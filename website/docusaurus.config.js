// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Syed Tousif Ahmed',
  tagline: 'Software Engineer',
  url: 'https://syed-ahmed.ai',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'syed-ahmed', // Usually your GitHub org/user name.
  projectName: 'syed-ahmed.github.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/syed-ahmed/syed-ahmed.github.io/blob/main/website/${versionDocsDirPath}/${docPath}?plain=1`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: ({blogDirPath, blogPath}) =>
            `https://github.com/syed-ahmed/syed-ahmed.github.io/blob/main/website/${blogDirPath}/${blogPath}?plain=1`,
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
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'Syed Tousif Ahmed',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Engineering Notebook',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://syed-ahmed.ai/blog/rss.xml',
            label: 'RSS',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Syed Tousif Ahmed.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['llvm'],
      },
      algolia: {
        appId: 'EM2ME1087F',
        apiKey: '6fe0ee9efd0343dde4d6eed7f98b5f59',
        indexName: 'syed',
        contextualSearch: true,
        searchPagePath: 'search',
      },
    }),
  plugins: [require.resolve("@syed-ahmed/docusaurus-plugin-react-pdf")],
};

module.exports = config;
