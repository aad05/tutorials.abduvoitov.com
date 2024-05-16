/** @type {import('next').NextConfig} */

import nextra from "nextra";

const withNextra = nextra({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.jsx",
	readingTime: true,
});

export default withNextra({
	i18n: {
		locales: ["en-US", "ar-SA", "ru-RU", "ko-KR", "uz-UZ"],
		defaultLocale: "en-US",
	},
});
