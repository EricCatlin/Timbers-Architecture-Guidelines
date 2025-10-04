/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of your site
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
*/

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Sections',
      collapsed: false,
      items: [
        'sections/purpose',
        'sections/committee',
        'sections/exterior-colors',
        'sections/roofing-structural',
        'sections/additions',
        'sections/landscaping',
        'sections/accessory-structures',
        'sections/special-areas',
        'sections/fencing',
        'sections/enforcement',
        'sections/amendments'
      ]
    },
    'attachments',
    'history'
  ],
};

export default sidebars;
