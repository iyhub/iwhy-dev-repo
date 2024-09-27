// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'IWHY.DEV',
		customCss: [
			// 你的 Tailwind 基础样式的相对路径
			'./src/tailwind.css',
			'./src/fonts/font-face.css'
		  ],
        social: {
            twitter: 'https://x.com/sh_awai',
        },
        sidebar: [
            {
                label: 'RAG',
                autogenerate: { directory: 'AIGC' },
            },
            {
                label: 'Chrome-Plugin',
                autogenerate: { directory: 'Chrome-Plugin' },
                collapsed: true,
            },
            {
                label: 'Redis',
                autogenerate: { directory: 'Redis' },
                collapsed: true,
            },
            {
                label: 'UI Design',
                autogenerate: { directory: 'UI Design' },
                collapsed: false,
            },
            {
                label: 'React',
                autogenerate: { directory: 'React' },
                collapsed: false,
            },
            {
                label: 'Nextjs',
                autogenerate: { directory: 'Nextjs' },
                collapsed: false,
            },
        ],
		}), tailwind()],
});