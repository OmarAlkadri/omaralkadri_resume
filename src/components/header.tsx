import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactTypingEffect from "react-typing-effect";

type ElementData = {
    content: any;
    startAnimationClasses: string[];
};

export const Header = () => {
    const { t } = useTranslation();

    const allElements: ElementData[] = [
        { content: t("greeting"), startAnimationClasses: ["animate-slideInLeft", "animate-slideOutRight"] },
        { content: t("welcomeMessage"), startAnimationClasses: ["animate-slideInLeft", "animate-slideOutRight"] },
        { content: t("introMessage"), startAnimationClasses: ["animate-slideInLeft", "animate-slideOutRight"] },
        {
            content: <>
                <ReactTypingEffect
                    text={[t("typing1"), t("typing2"), t("typing3"), t("ContactMe")]}
                    displayTextRenderer={(text: any) => {
                        if (text == t('ContactMe'))
                            return (
                                <a href='#contact_my'>
                                    {text.split('').map((char: any, i: any) => {
                                        const key = `${i}`;
                                        return (
                                            <span
                                                key={key}
                                                style={i % 2 === 0 ? { color: 'red' } : {}}
                                            >{char}</span>
                                        );
                                    })}
                                </a>
                            )
                        return (
                            <h1>
                                {text.split('').map((char: any, i: any) => {
                                    const key = `${i}`;
                                    return (
                                        <span
                                            key={key}
                                            style={i % 2 === 0 ? { color: 'red' } : {}}
                                        >{char}</span>
                                    );
                                })}
                            </h1>
                        );
                    }}
                /></>, startAnimationClasses: ["animate-tada", ""]
        }
    ];
    const [elements] = useState<ElementData[]>(allElements);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const fetchVisitorCount = async () => {
            try {
                // Add visitor count fetching logic here if needed.
            } catch (error) {
                console.error('Error fetching visitor count:', error);
            }
        };

        fetchVisitorCount();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
            {elements.map((element, index) => {
                const [animatingIndex, setAnimatingIndex] = useState(0);
                const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>, index: number) => {
                    setAnimatingIndex(animatingIndex + 1)
                    if (elements.length - 1 > index)
                        e.currentTarget.classList.replace(element.startAnimationClasses[animatingIndex], element.startAnimationClasses[animatingIndex + 1]);
                    if (element.startAnimationClasses.length == animatingIndex + 1)
                        setActiveIndex(activeIndex + 1)
                };
                const handleAnimationStart = (e: React.AnimationEvent<HTMLDivElement>) => {
                    if (animatingIndex == 0)
                        e.currentTarget.classList.replace("invisible", "visible");
                };
                return (
                    index == activeIndex &&
                    <div
                        key={index}
                        className={`invisible p-5 text-2xl text-white rounded-xl mb-4 transition-opacity duration-1000 
              ${element.startAnimationClasses[0]}`}
                        onAnimationStart={(e) => handleAnimationStart(e)}
                        onAnimationEnd={(e) => handleAnimationEnd(e, index)}
                    >
                        {element.content}
                    </div>

                )
            })
            }
        </div>
    )
}
