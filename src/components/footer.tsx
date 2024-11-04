import { useTranslation } from 'react-i18next';
import myImage from '../assets/my.jpg';

export const Footer = () => {
    const [t] = useTranslation();

    const profile = {
        name: t('footer.profileName', { defaultValue: 'Omar Alkadri' }),  // Default to English name if translation is missing
        copyright: t('footer.copyright', {
            year: '2023',
            name: 'Omar Alkadri'
        }),
        socialLinks: [
            { href: "https://www.facebook.com/11omar.omar", label: t('footer.social.facebook'), iconClass: 'icon-[logos--facebook]' },
            { href: "https://github.com/OmarAlkadri", label: t('footer.social.github'), iconClass: 'icon-[fa--github] mr-1' },
            { href: "#", label: t('footer.social.dribbble'), svgIcon: true },
            { href: "https://www.linkedin.com/in/omar-alkadri/", label: t('footer.social.linkedin'), iconClass: 'icon-[logos--linkedin]' },
        ]
    };

    const sections = {
        about: [
            { href: "#my_story", label: t('footer.myStory') },
            { href: "#skills", label: t('footer.skills') },
            { href: "#curriculum_vitae", label: t('footer.curriculumVitae') },
            { href: "#references", label: t('footer.references') },
            { href: "#contact_me", label: t('footer.contactMe') }
        ],
        follow: [
            { href: "https://github.com/themesberg/flowbite", label: t('footer.follow.github') },
            { href: "https://www.linkedin.com/in/omar-alkadri/", label: t('footer.follow.linkedin') },
        ]
    };

    return (
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="#" className="flex items-center">
                        <img src={myImage} className="h-8 me-3" alt={t('footer.logoAlt')} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{profile.name}</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('footer.aboutMe')}</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            {sections.about.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <a href={item.href} className="hover:underline">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{t('footer.followMe')}</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            {sections.follow.map((item, index) => (
                                <li key={index} className="mb-4">
                                    <a target="_blank" href={item.href} className="hover:underline">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">{profile.copyright}</span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    {profile.socialLinks.map((link, index) => (
                        <a key={index} target="_blank" href={link.href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            {link.svgIcon ? (
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <span className={link.iconClass}></span>
                            )}
                            <span className="sr-only">{link.label} {t('footer.account')}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
