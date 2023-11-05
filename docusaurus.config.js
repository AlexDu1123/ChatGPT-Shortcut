// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

//const zhNavbar = require("./src/components/LocalizedNavbar/Navbar.zh");
//const enNavbar = require("./src/components/LocalizedNavbar/Navbar.en");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title:
    "AiShort(ChatGPT Shortcut)-AI Prompt Management,Productivity Tool",
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
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en", "ja", "ko", "es", "fr", "de", "it", "ru", "pt", "hi", "ar", "bn"],
    localeConfigs: {
      en: {
        htmlLang: "en-US",
      },
      ja: {
        htmlLang: "ja-JP",
      },
      ko: {
        htmlLang: "ko-KR",
      },
      es: {
        htmlLang: "es-ES",
      },
      fr: {
        htmlLang: "fr-FR",
      },
      de: {
        htmlLang: "de-DE",
      },
      it: {
        htmlLang: "it-IT",
      },
      ru: {
        htmlLang: "ru-RU",
      },
      pt: {
        htmlLang: "pt-PT",
      },
      hi: {
        htmlLang: "hi-IN",
      },
      ar: {
        htmlLang: "ar-SA",
      },
      bn: {
        htmlLang: "bn-BD",
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
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: "G-YJY639H2J1",
          anonymizeIP: false,
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: "/",
            from: "/cn",
          },
        ],
      },
    ],
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
          content:
            "prompt,aishort,ChatGPT Shortcut,ChatGPT SC,ChatGPT,AI prompts，提示词",
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
            to: "docs",
            label: "📕 说明",
            position: "left",
          },
          {
            to: "/community-prompts",
            label: "💡 社区",
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
            href: "https://shop40767237.m.youzan.com/wscgoods/detail/3evkebb3ecvq57j?fromStore=true&banner_id=f.104645105~image_ad.3~0~Yfdrdc3N&reft=1697098439255_1699163147294&spm=salesmanpromotion.3266187786_f.104645105&sf=qq_sm",
            label: "👨‍💻 AI工作坊第4期招募中",
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

          /*
          {
            type: "dropdown",
            label: "🛠️ 应用工具",
            position: "left",
            items: [
              {
                label: "IMGPrompt",
                href: "https://prompt.newzone.top/",
              },
              {
                label: "文字处理",
                href: "https://tools.newzone.top/json-translate",
              },
              {
                label: "工具收藏",
                href: "https://nav.newzone.top",
              },
              {
                label: "Chrome 扩展",
                href: "https://chrome.google.com/webstore/detail/chatgpt-shortcut/blcgeoojgdpodnmnhfpohphdhfncblnj",
              },
              {
                label: "Edge 扩展",
                href: "https://microsoftedge.microsoft.com/addons/detail/chatgpt-shortcut/hnggpalhfjmdhhmgfjpmhlfilnbmjoin",
              },
              {
                label: "Find on Product Hunt",
                href: "https://www.producthunt.com/posts/chatgpt-shortcut?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chatgpt&#0045;shortcut",
              },
            ],
          },
          {
            type: "dropdown",
            label: "反馈建议",
            position: "left",
            items: [
            {
                label: "📝 提交反馈",
                to: "/feedback",
              },
              {
                label: "💬 微信交流",
                href: "https://img.newzone.top/wechat.svg",
              },
              {
                label: "📧 发送邮件",
                href: "mailto:learndata@newzone.top",
              },
              {
                label: "📺 加入 Discord",
                href: "https://discord.gg/PZTQfJ4GjX",
              },
            ],
          },
        
          { type: "localeDropdown", position: "right" },
          {
            href: "https://github.com/rockbenben/ChatGPT-Shortcut",
            position: "right",
            className: "header-github-link",
          },
          {
            href: "https://discord.gg/PZTQfJ4GjX",
            position: "right",
            className: "header-discord-link",
          },
          */
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

      /* announcementBar: {
        id: 'announcement_bar',
        content: getAnnouncement(),
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      }, */
    }),
};

export default config;

/* process.env.DOCUSAURUS_CURRENT_LOCALE ??= "zh-Hans";
function getNavbar() {
  switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
    case "en":
      return enNavbar;
    default:
      return zhNavbar;
  }
} */
/* function getAnnouncement() {
  switch(process.env.DOCUSAURUS_CURRENT_LOCALE) {
    case "en": return 'Announcement_en';
    default: return 'Announcement_cn';
  }
} */
