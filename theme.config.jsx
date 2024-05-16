import Image from "next/image";

const config = {
	logo: <span className="text-bold">abduvoitov.com</span>,
	project: {
		link: "https://github.com/aad05/abduvoitov.com",
	},
	useNextSeoProps() {
		return {
			titleTemplate: "%s - abduvoitov.com",
		};
	},
	chat: {
		link: "https://t.me/asadbek_abduvoitov",
		icon: (
			<Image width={25} height={25} src={"/telegram.svg"} alt="telegram-icon" />
		),
	},
	i18n: [
		{ locale: "en-US", text: "English" },
		{ locale: "ar-SA", text: "العربية", direction: "rtl" },
		{ locale: "ru-RU", text: "Русский" },
		{ locale: "ko-KR", text: "한국인" },
		{ locale: "uz-UZ", text: "O'zbek" },
	],
};

export default config;
