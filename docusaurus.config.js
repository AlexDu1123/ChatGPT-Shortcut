// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

//const zhNavbar = require("./src/components/LocalizedNavbar/Navbar.zh");
//const enNavbar = require("./src/components/LocalizedNavbar/Navbar.en");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AiShort(ChatGPT Shortcut)-AI Prompt Management,Productivity Tool",
  // tagline: '方便中文使用 ChatGPT 快捷指令',
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.aialex.cn",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rockbenben", // Usually your GitHub org/user name.
  projectName: "ChatGPT-Shortcut", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is English, you
  // may want to replace "zh" with "en".
  i18n: {
    defaultLocale: "zh",
    locales: [
      "en",
      "zh",
      "ja",
      "ko",
      "es",
      "fr",
      "de",
      "it",
      "ru",
      "pt",
      "hi",
      "ar",
      "bn"
    ],
    localeConfigs: {
      ar: {
        direction: "rtl",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          sidebarPath: "sidebars.js",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-YJY639H2J1",
          anonymizeIP: false,
        },
        /*
        googleTagManager: {
          containerId: "GTM-MX524GTT",
        },*/
      }),
    ],
  ],
  plugins: [
    /* [
      "docusaurus2-plugin-google-adsense",
      {
        dataAdClient: "ca-pub-7585955822109216",
      },
    ], */
    "./plugins/piwik.js",
    "./plugins/instantpage.js",
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      metadata: [
        {
          name: "keywords",
          content: "prompt,aishort,ChatGPT Shortcut,ChatGPT SC,ChatGPT,AI prompts，提示词",
        },
      ],
      navbar: {
        hideOnScroll: true,
        title: "ALEX大表哥",
        logo: {
          alt: "ChatGPT Shortcuts",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://www.alexdbg.com/",
            label: "🌏 AI工具导航",
            position: "left",
          },
          {
            to: "docs",
            label: "📕 说明",
            position: "left",
          },
          {
            href: "http://51.aifk.pw",
            label: "🕹️ 账号",
            position: "left",
          },
          {
            type: "dropdown",
            label: "🏛️ 课程",
            position: "left",
            items: [
              {
                label: "PPT模拟人生100天",
                href: "https://j.youzan.com/sH0kwA",
              },
              {
                label: "Excel模拟人生100天",
                href: "https://j.youzan.com/E6ZkwA",
              },
              {
                label: "Word模拟人生21天",
                href: "https://j.youzan.com/mUZkwA",
              },
              {
                label: "FCPX剪辑公园21天",
                href: "https://j.youzan.com/9sKkwA",
              },
            ],
          },
          {
            href: "https://www.aialex.cn/QR-code",
            label: "🤗 交流群",
            position: "left",
          },
          { type: "localeDropdown", position: "right" },
          {
            href: "https://www.weibo.com/u/1794009892",
            position: "right",
            className: "header-weibo-link",
          },
          {
            href: "https://www.aialex.cn/QR-code",
            position: "right",
            className: "header-weixin-link",
          },
          {
            href: "https://www.xiaohongshu.com/user/profile/64644166000000002a0080a7?xhsshare=CopyLink&appuid=64644166000000002a0080a7&apptime=1699172469",
            position: "right",
            className: "header-xiaohongshu-link",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} AI Prompt Library`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
