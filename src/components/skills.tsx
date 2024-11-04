import { useEffect, useRef, useState } from "react";

export const Skills = () => {
    const skillsData = [
        { skillName: 'JavaScript', skillValue: 85, skillGroupName: 'Programming Languages' },
        { skillName: 'TypeScript', skillValue: 85, skillGroupName: 'Programming Languages' },
        { skillName: 'C++ / C', skillValue: 80, skillGroupName: 'Programming Languages' },
        { skillName: 'C# / .NET Core / EF Core', skillValue: 100, skillGroupName: 'Programming Languages' },
        { skillName: 'Java / Spring Boot', skillValue: 75, skillGroupName: 'Programming Languages' },
        { skillName: 'Python', skillValue: 65, skillGroupName: 'Programming Languages' },
        { skillName: 'Kotlin', skillValue: 65, skillGroupName: 'Programming Languages' },
        { skillName: 'PHP / Laravel', skillValue: 50, skillGroupName: 'Programming Languages' },

        { skillName: 'React.js / Next.js', skillValue: 97, skillGroupName: 'Libraries & Frameworks' },
        { skillName: 'NestJS', skillValue: 90, skillGroupName: 'Libraries & Frameworks' },
        { skillName: 'Express.js', skillValue: 80, skillGroupName: 'Libraries & Frameworks' },
        { skillName: 'Angular', skillValue: 70, skillGroupName: 'Libraries & Frameworks' },
        { skillName: 'Vue.js', skillValue: 50, skillGroupName: 'Libraries & Frameworks' },
        { skillName: 'Blazor', skillValue: 70, skillGroupName: 'Libraries & Frameworks' },

        { skillName: 'SQL (MSSQL, PostgreSQL, SQLite)', skillValue: 90, skillGroupName: 'Databases' },
        { skillName: 'MongoDB / MongoDB Atlas', skillValue: 75, skillGroupName: 'Databases' },
        { skillName: 'Redis', skillValue: 75, skillGroupName: 'Databases' },

        { skillName: 'Ubuntu Server', skillValue: 80, skillGroupName: 'Server Tools & Environment' },
        { skillName: 'Docker', skillValue: 85, skillGroupName: 'Server Tools & Environment' },
        { skillName: 'AWS / AWS Elasticsearch', skillValue: 75, skillGroupName: 'Server Tools & Environment' },
        { skillName: 'Cloudflare', skillValue: 70, skillGroupName: 'Server Tools & Environment' },

        { skillName: 'Git / GitHub / GitLab', skillValue: 85, skillGroupName: 'Develop Tools & Project Management' },
        { skillName: 'Atlassian (Trello, Jira)', skillValue: 70, skillGroupName: 'Develop Tools & Project Management' },
        { skillName: 'Office 365', skillValue: 70, skillGroupName: 'Develop Tools & Project Management' },
        { skillName: 'draw.io', skillValue: 90, skillGroupName: 'Develop Tools & Project Management' },
        { skillName: 'Figma', skillValue: 60, skillGroupName: 'Develop Tools & Project Management' },
        { skillName: 'Photoshop', skillValue: 45, skillGroupName: 'Develop Tools & Project Management' },

        { skillName: 'Data Structures', skillValue: 85, skillGroupName: 'Computer Science Concepts' },
        { skillName: 'Analysis of Algorithms', skillValue: 85, skillGroupName: 'Computer Science Concepts' },
        { skillName: 'Design Patterns', skillValue: 85, skillGroupName: 'Computer Science Concepts' },
        { skillName: 'Software Architecture', skillValue: 85, skillGroupName: 'Computer Science Concepts' },
        { skillName: 'Performance Optimization', skillValue: 85, skillGroupName: 'Computer Science Concepts' },
        { skillName: 'Troubleshooting', skillValue: 85, skillGroupName: 'Computer Science Concepts' },

        { skillName: 'Love of Learning', skillValue: 90, skillGroupName: 'Personal Skills' },
        { skillName: 'Dedicated Team Player', skillValue: 85, skillGroupName: 'Personal Skills' },
        { skillName: 'Analytical Thinking Skills', skillValue: 85, skillGroupName: 'Personal Skills' },
        { skillName: 'Attention to Detail', skillValue: 90, skillGroupName: 'Personal Skills' },
        { skillName: 'Good Listener', skillValue: 95, skillGroupName: 'Personal Skills' },

        { skillName: 'IOT', skillValue: 50, skillGroupName: 'Others' },
        { skillName: 'Raspberry Pi', skillValue: 50, skillGroupName: 'Others' },
        { skillName: 'Arduino', skillValue: 50, skillGroupName: 'Others' },
        { skillName: 'Data Communications', skillValue: 45, skillGroupName: 'Others' },
        { skillName: 'Electric Circuit', skillValue: 35, skillGroupName: 'Others' },
        { skillName: 'PayloadCMS', skillValue: 65, skillGroupName: 'Others' },
        { skillName: 'Storybook', skillValue: 80, skillGroupName: 'Others' },
    ];


    const [values, setValues] = useState(skillsData.map(() => 0));
    const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
    useEffect(() => {
        skillsData.forEach((_, index) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    const entry = entries[0];
                    if (entry.isIntersecting) {
                        const interval = setInterval(() => {
                            setValues((prevValues) => {
                                const newValues = [...prevValues];
                                if (newValues[index] < skillsData[index].skillValue) {
                                    newValues[index] += 2;
                                } else {
                                    clearInterval(interval);
                                }
                                return newValues;
                            });
                        }, 25); // التحديث كل 200 مللي ثانية
                    }
                },
                { threshold: 0.5 }
            );

            if (progressRefs.current[index]) {
                observer.observe(progressRefs.current[index] as HTMLDivElement);
            }

            return () => {
                if (progressRefs.current[index]) {
                    observer.unobserve(progressRefs.current[index] as HTMLDivElement);
                }
            };
        });
    }, []);

    return (<div className="w-full px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                    <h1 className="font-manrope text-gray-400 text-4xl font-bold leading-10">Skills</h1>
                    <hr className="w-28 h-1 bg-black border-0 rounded dark:bg-gray-700" />
                </div>
                <div className="flex w-full overflow-auto flex-col justify-start items-start flex-wrap h-full max-h-[800px] gap-y-2 gap-x-3">
                    {Object.values(skillsData.reduce((acc: any, skill: any) => {
                        // Grouping skills by skillGroupName
                        const group = acc[skill.skillGroupName] || { groupName: skill.skillGroupName, skills: [] };
                        group.skills.push(skill);
                        acc[skill.skillGroupName] = group;
                        return acc;
                    }, {})).map((group: any) => (
                        <div key={group.groupName} className="flex flex-col w-full max-w-52 pb-2">
                            <div className="flex-col justify-start lg:items-start items-start flex gap-1">
                                <h1 className="font-manrope text-xs leading-10">{group.groupName}</h1>
                                <hr className="w-12 h-1 relative bottom-2 bg-black border-0 rounded dark:bg-gray-700" />
                            </div>
                            {group.skills.map((skill: any, index: any) => (
                                <div key={skill.skillName} className="flex flex-col">
                                    <div className='text-sm'>{skill.skillName}</div>
                                    <div ref={(el) => (progressRefs.current[index] = el)} className="flex flex-row items-center gap-x-3">
                                        <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar"
                                            aria-valuenow={skill.skillValue}
                                            aria-valuemin={0}
                                            aria-valuemax={100}>
                                            <div className="flex flex-col justify-center rounded-full bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                                                style={{ width: `${skill.skillValue}%` }}>
                                            </div>
                                        </div>
                                        <div className="w-10 text-end">
                                            <span className="text-sm text-gray-800 dark:text-white">{skill.skillValue}%</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>)
}