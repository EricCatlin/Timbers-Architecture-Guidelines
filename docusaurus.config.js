// @ts-check
const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Timbers HOA — Architectural Review Guidelines',
  tagline: 'Living, versioned guidance for architectural changes',
  url: 'https://ericcatlin.github.io',
  baseUrl: '/Timbers-Architecture-Guidelines/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',

  organizationName: 'EricCatlin',
  projectName: 'Timbers-Architecture-Guidelines',

  deploymentBranch: 'main',
  trailingSlash: false,

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Docs as the site root
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/EricCatlin/Timbers-Architecture-Guidelines/edit/main/',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // image: 'img/social-card.png', // Commented out since file doesn't exist
      navbar: {
        title: 'Timbers HOA',
        logo: {
          alt: 'Timbers HOA',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/', label: 'Guidelines', position: 'left'},
          {to: '/history', label: 'History', position: 'left'},
          {
            href: 'https://github.com/EricCatlin/Timbers-Architecture-Guidelines',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Guidelines (Home)', to: '/'},
              {label: 'History', to: '/history'},
              {label: 'Attachments & References', to: '/attachments'}
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Issues', href: 'https://github.com/EricCatlin/Timbers-Architecture-Guidelines/issues'}
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} The Timbers HOA — Architectural Review Guidelines`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
