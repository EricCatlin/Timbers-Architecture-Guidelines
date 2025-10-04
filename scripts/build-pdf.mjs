import {mdToPdf} from 'md-to-pdf';
import {globby} from 'globby';
import fs from 'node:fs';
import path from 'node:path';

const DOCS_DIR = path.resolve('docs');
const OUT_DIR = path.resolve('dist');
const OUT_FILE = path.join(OUT_DIR, 'Timbers-HOA-Guidelines.pdf');

async function run() {
  const files = await globby(['docs/**/*.md', '!docs/**/README.md'], {expandDirectories: false});
  files.sort((a, b) => a.localeCompare(b)); // naive order; follows folder/filename sort

  const combined = files.map(fp => fs.readFileSync(fp, 'utf8')).join('\n\n\n---\n\n\n');
  fs.mkdirSync(OUT_DIR, {recursive: true});

  const res = await mdToPdf({ content: combined }, {
    pdf_options: {
      format: 'A4',
      margin: { top: '18mm', bottom: '18mm', left: '18mm', right: '18mm' },
      printBackground: true
    },
    stylesheet: [
      path.resolve('src/css/custom.css')
    ]
  });

  if (res.content) {
    fs.writeFileSync(OUT_FILE, res.content);
    console.log('PDF written:', OUT_FILE);
  } else {
    console.error('Failed to generate PDF');
    process.exit(1);
  }
}

run().catch(err => { console.error(err); process.exit(1); });
