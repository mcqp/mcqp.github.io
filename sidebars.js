// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'installation',
      label: 'Installation',
    },
    {
      type: 'doc',
      id: 'create_telegram_bot',
      label: 'Create Telegram Bot',
    },
    {
      type: 'doc',
      id: 'config_mcqp',
      label: 'Config MCQP',
    },
    {
      type: 'category',
      label: 'MCQP Syntax',
      items: [
        'mcqp_syntax/intro',
        'mcqp_syntax/poll',
        'mcqp_syntax/mcpoll',
        'mcqp_syntax/question',
        'mcqp_syntax/message',
        'mcqp_syntax/config',
      ],
    },
  ],
};

module.exports = sidebars;
