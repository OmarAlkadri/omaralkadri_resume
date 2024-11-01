import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import ReactTypingEffect from 'react-typing-effect';
import trtWorldIcon from './assets/trtWorldIcon.jpeg';
import hitatekIcon from './assets/hitatekIcon.png';
import sakaryaIcon from './assets/sakaryaIcon.png';
import myImage from './assets/my.jpg';
import visitors from '../visitors.json';
//import { Octokit, App } from "octokit";

type ElementData = {
  content: any;
  startAnimationClasses: string[];
};

function App() {
  const [dark, setDark] = React.useState(false);

  function darkModeHandler(): void {
    setDark(!dark);
    document.body.classList.toggle("dark");
    document.getElementsByName('custom-img')
  }

  const allElements: ElementData[] = [
    { content: "عنصر 1", startAnimationClasses: ["animate-slideInLeft", "animate-slideOutRight"] },
    { content: "عنصر 2", startAnimationClasses: ["animate-slideInLeft", "animate-slideOutRight"] },
    { content: "عنصر 3", startAnimationClasses: ["animate-slideInLeft", "animate-slideOutRight"] },
    {
      content: <>
        <ReactTypingEffect
          text={"Hello. World!!!"}
          displayTextRenderer={(text: any) => {
            return (
              <h1>
                {text.split('').map((char: any, i: any) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={i % 2 === 0 ? { color: 'magenta' } : {}}
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
  const [activeIndex, setActiveIndex] = React.useState(0);
  const skillsData = [
    { skillName: 'C++', skillValue: 95 },
    { skillName: 'C', skillValue: 80 },
    { skillName: 'C#', skillValue: 80 },
    { skillName: 'JavaScript', skillValue: 80 },
    { skillName: 'React.js', skillValue: 85 },
    { skillName: 'NestJS', skillValue: 75 },
    { skillName: 'C++', skillValue: 95 },
    { skillName: 'C', skillValue: 80 },
    { skillName: 'C#', skillValue: 80 },
    { skillName: 'JavaScript', skillValue: 80 },
    { skillName: 'React.js', skillValue: 85 },
    { skillName: 'NestJS', skillValue: 75 },
    { skillName: 'C++', skillValue: 95 },
    { skillName: 'C', skillValue: 80 },
    { skillName: 'C#', skillValue: 80 },
    { skillName: 'JavaScript', skillValue: 80 },
    { skillName: 'React.js', skillValue: 85 },
    { skillName: 'NestJS', skillValue: 75 },
    { skillName: 'C++', skillValue: 95 },
    { skillName: 'C', skillValue: 80 },
    { skillName: 'C#', skillValue: 80 },
    { skillName: 'JavaScript', skillValue: 80 },
    { skillName: 'React.js', skillValue: 85 },
    { skillName: 'NestJS', skillValue: 75 },
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

  const [visitorCount, setVisitorCount] = useState<number>(0);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        /*   const octokit = new Octokit({
             auth: 'SHA256:ui4BXqvAZdYoKqpfINtMjKnu9+KSkdxmF267CHtb7hQ'
           })
   
           const response = await octokit.request('GET /repos/OmarAlkadri/omaralkadri_resume/contents/visitors.json', {
             owner: 'OWNER',
             repo: 'REPO',
             path: 'PATH',
             headers: {
               'X-GitHub-Api-Version': '2022-11-28'
             }
           })
   
           const data = await response.json();
           setVisitorCount(data.count ?? 0);*/
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      }
    };

    fetchVisitorCount();
  }, []);
  return (
    <html className='bg-white dark:bg-black'>
      <nav className="block w-full px-4 py-2 mx-auto bg-white bg-opacity-60 sticky top-0 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <a href="#"
            className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
            Omer Alkadri
          </a>
          <div>
            Number of visitors to my profile:
            {visitorCount}
          </div>
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <a href="#" className="flex items-center">Pages</a>
              </li>
              <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <a href="#" className="flex items-center">Light</a>
                <div className='flex'>
                  <div className="relative">
                    <label className=" flex w-full items-center justify-center cursor-pointer items-center">
                      <input id="switch-2" type="checkbox" className="peer sr-only" />
                      <label htmlFor="switch-2" className="hidden"></label>
                      <div onClick={darkModeHandler} className="peer h-4 w-11 rounded-full border bg-slate-200
   after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border
    after:border-gray-300 after:bg-white after:transition-all after:content-[''] bg-black peer-checked:bg-white
    peer-checked:after:translate-x-full peer-focus:ring-green-300"></div>
                    </label>
                  </div>
                </div>
                <a href="#" className="flex items-center">Dark</a>

              </li>
            </ul>
          </div>
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button">
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </span>
          </button>
        </div>
      </nav>
      <header>
        <div className='flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
          {elements.map((element, index) => {
            const [animatingIndex, setAnimatingIndex] = React.useState(0);
            const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>, index: number) => {
              if (index == 3)
                console.log()
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
      </header>
      <main className='w-full flex w-full max-w-7xl gap-y-20 flex-col items-center justify-center relative xl:mr-0 lg:mr-5 mr-0  py-24 '>
        <section className="w-full sm:px-0 px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h1 className="font-manrope text-gray-400 text-4xl font-bold leading-10 relative left-0">About us</h1>
                  <hr className="w-28 h-1 bg-black border-0 rounded  dark:bg-gray-700" />
                  <div className="w-full flex flex-col justify-start lg:items-start items-center gap-3 ">
                    <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      My Story
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Innovative software developer who loves learning new technologies and mastering software engineering. I am committed to utilizing my skills to further the company's mission. I believe that success only comes from working hand in hand with my team and I believe in solving community issues through technology.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div
                      className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">5+ Years</h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Creating state-of-the-art solutions for society through technology and coding.
                      </p>
                    </div>
                    <div
                      className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">8+ Projects
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">Excellence Achieved
                        Through Success</p>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div
                      className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">3+ Awards</h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">Our Dedication to
                        Innovation Wins Understanding</p>
                    </div>
                    <div
                      className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">98% Happy
                        Clients</h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">Mirrors our Focus on
                        Client Satisfaction.</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                <span
                  className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read
                  More</span>
                <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" stroke-width="1.6"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div
                className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src={myImage} alt="about Us image" />
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="w-full px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h1 className="font-manrope text-gray-400 text-4xl font-bold leading-10 relative left-0">Skills</h1>
                  <hr className="w-28 h-1 bg-black border-0 rounded dark:bg-gray-700" />
                </div>
                <div className="flex w-full overflow-auto flex-col justify-start items-start flex-wrap h-full max-h-[475px] gap-y-8 gap-x-2">

                  {skillsData.map((skill, index) => (
                    <div key={skill.skillName} className="flex flex-col w-full max-w-64">
                      {skill.skillName}
                      <div ref={(el) => (progressRefs.current[index] = el)} className="flex flex-row items-center gap-x-3 whitespace-nowrap">
                        <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar"
                          aria-valuenow={values[index]}
                          aria-valuemin={0}
                          aria-valuemax={100}>
                          <div className="flex  flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                            style={{ width: `${values[index]}%` }}>
                          </div>
                        </div>
                        <div className="w-10 text-end">
                          <span className="text-sm text-gray-800 dark:text-white">{values[index]}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="w-full px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h1 className="font-manrope text-gray-400 text-4xl font-bold leading-10 relative left-0">Curriculum Vitae</h1>
                  <hr className="w-28 h-1 bg-black border-0 rounded dark:bg-gray-700" />
                </div>
                <div className='flex lg:flex-row w-full flex-col'>
                  <div className="px-4 md:px-5 lg:px-5 mx-auto h-full w-full md:max-w-[600px] lg:max-w-[450px]">
                    <div className='relative right-4'>
                      Education
                    </div>
                    <ol className="relative top-4 border-s border-gray-200 dark:border-gray-700">
                      <li className="mb-10 ms-6">
                        <span className="absolute -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                          <img className="w-11 h-11 object-contain rounded-full" src={sakaryaIcon} alt="" />
                        </span>
                        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                          <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2018-2022</time>
                          <div className=" text-sm font-normal text-gray-500 dark:text-gray-300">
                            <a href="https://cs.sakarya.edu.tr/" className="">
                              <span className="flex flex-col bg-gray-100 text-gray-800 font-semibold text-blue-600 dark:text-blue-500 hover:underline text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                                <p>SAKARYA ÜNİVERSİTESİ</p>
                                <p>Bilgisayar ve Bilişim Bilimleri Fakültesi</p>
                                <p>Bilgisayar Mühendisliği Bölümü</p>

                              </span>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ol>
                    <div className='relative right-4'>
                      Certifications / Honors
                    </div>
                    <ol className="relative top-4 border-s border-gray-200 dark:border-gray-700">
                      <li className="mb-10 ms-6">
                        <span className="absolute -start-7 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                          <span className="w-14 h-14 object-contain rounded-full icon-[iconamoon--certificate-badge-light] fill-current text-blue-500 dark:text-white"></span>
                        </span>
                        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                          <div className=" text-sm font-normal text-gray-500 dark:text-gray-300">
                            <span className="p-4 flex flex-col gap-y-1 bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                              <p>Data Structures</p>
                              <p> Algorithms</p>
                              <p className=''>sosyal uyum icin inovatif cozumler hackathonu <a href='https://habitatdernegi.org/' className='text-blue-600 dark:text-blue-500'>habitat derneği</a></p>
                              <p> Access Code in Networking</p>
                            </span>
                          </div>
                        </div>
                      </li>
                    </ol>

                    <div className='relative right-4'>
                      Interests & Hobbies
                    </div>
                    <ol className="relative top-4 border-s border-gray-200 dark:border-gray-700">
                      <li className="mb-10 ms-6">
                        <span className="absolute -start-5 -ml-0.5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                          <span className="w-11 h-11 object-contain rounded-full icon-[material-symbols-light--interests-outline-rounded] fill-current text-blue-500 dark:text-white"></span>
                        </span>
                        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                          <div className=" text-sm font-normal text-gray-500 dark:text-gray-300">
                            <span className="p-4 flex flex-col bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                              I'm interested in the latest technology and self-development. I love swimming and sports. I love listening; I'm a fairly good
                              listener. I love learning and I love the excitement of learning, especially in the field of programming. I love camping trips and cruises.
                            </span>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className="px-4 md:px-5 lg:px-5 mx-auto h-full w-full max-w-[600px]">
                    <div className='relative right-4'>
                      Work Experiences
                    </div>
                    <ol className="relative top-4 border-s border-gray-200 dark:border-gray-700">
                      <li className="-5 ms-6">
                        <span className="absolute -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                          <img className="w-11 h-11 pr-1 object-contain rounded-full" src={trtWorldIcon} alt="" />
                        </span>
                        <div className="p-4 bg-white border  border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                          <div className="items-center justify-between mb-3 sm:flex">
                            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Febraury 2024 - November 2024</time>
                            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Full Stack Developer
                              <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                                Senior Level
                              </span>
                            </div>
                          </div>
                          <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                            <ul className="flex flex-col pl-3 gap-y-1 list-disc">
                              <li>Implemented a Comprehensive CMS: Developed a robust Content Management System (CMS) for content management system,
                                ensuring all content adheres to predefined guidelines before publication. The system included spell check, content validation, and
                                direct email notifications.</li>
                              <li>AI Integration: Leveraged Artificial Intelligence to assist writers with formatting, translation, text summarization, and
                                content enhancement, significantly improving the efficiency and quality of content creation.</li>
                              <li>Collaboration with NewsHQ and AssetHQ: Worked with NewsHQ and AssetHQ to integrate additional features, improving
                                overall system capabilities and user experience.</li>
                              <li>Microservices Architecture: Adopted a microservices architecture to divide the project into smaller, manageable services,
                                facilitating easier development, maintenance, and scalability.</li>
                              <li>Technologies Used: [Node.js, React, MongoDB, Postgresql, Docker, AWS, Typesense, nextjs, PayloadCMS]</li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="mb-5 ms-6">
                        <span className="absolute -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                          <img className="w-11 h-11 pr-1 object-contain rounded-full" src={hitatekIcon} alt="" />
                        </span>
                        <div className="p-4 bg-white border  border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                          <div className="items-center justify-between mb-3 sm:flex">
                            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Febraury 2022 - November 2023</time>
                            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Software Engineer at Hitatek
                              <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                                Mid Level
                              </span>
                            </div>
                          </div>
                          <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                            <ul className="flex flex-col pl-3 gap-y-1 list-disc">
                              <li>
                                Developed a Telegram bot using Node.js to track project progress, manage invoices, and handle permissions, enhancing project
                                management efficiency by 25%.
                              </li>
                              <li>
                                Developed software for Baykar, starting with the Eğitim Yönetim Sistemi (Education Management System), which
                                handles semesters, curriculum, trainers, trainees, exam schedules, and more, including notifications.
                              </li>
                              <li>
                                Developed the Saha Yönetim Sistemi (Field Management System) for Baykar, an ERP system for managing company
                                resources, branches, field resources, employee tracking, priority organization, and fair employee evaluation.
                              </li>
                              <li>
                                Built election tracking pages for TRT World, featuring real-time data from Anadolu Agency, improving data accessibility
                                during elections.
                              </li>
                              <li>
                                Technologies Used: [Node.js, React, MongoDB, ubuntu server, nestjs, C#, AWS, Docker, Angular]
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="mb-10 ms-6">
                        <span className="absolute -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                          <span className="w-11 h-11 pr-1 object-contain rounded-full icon-[simple-icons--freelancer] fill-current text-blue-500 dark:text-white" ></span>
                        </span>
                        <div className="p-4 bg-white border  border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                          <div className="items-center justify-between mb-3 sm:flex">
                            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2018 - 2022</time>
                            <div className="text-sm font-normal text-gray-500 lex dark:text-gray-300">Software Engineer
                              <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                                Junior-Mid Level
                              </span>
                            </div>
                          </div>
                          <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                            <ul className="flex flex-col pl-3 gap-y-1 list-disc">
                              <li>
                                Ustaol specializes in connecting culinary ingredients with easy-to-follow recipes. We relied on .NET Core to build the backend to ensure performance and stability, and used Razor and Blazor to deliver an interactive user interface that simplifies the cooking experience for users and ensures smooth navigation.
                              </li>
                              <li>
                                Developed an appointment booking app for barbers using Kotlin, featuring in-app payments, ratings, photo uploads, and
                                comments, increasing user engagement by 40%.
                              </li>
                              <li>
                                Built an e-shopping app with Visual Studio and .NET Core Blazor, integrating ERP functionality to provide a mobile-friendly
                                platform, boosting sales by 20%.
                              </li>
                              <li>
                                Optimized finance resource utilization using "Ubuntu Remmina" and Raspberry Pi, enabling simultaneous access to a central
                                computer for basic applications, reducing hardware costs by 30%.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className='flex flex-col items-start justify-start px-4 md:px-5 lg:px-5 mx-auto h-full w-full max-w-[600px] h-full gap-y-4 w-full max-w-[150px]'>
                    <div className='relative right-3'>
                      Languages
                    </div>
                    <div className="px-4 md:px-5 lg:px-5 flex lg:flex-col sm:flex-row sm:gap-x-8 items-center justify-center gap-y-4">
                      <div className='flex items-center justify-start gap-x-1'>
                        <span className="">
                          <img className="w-7 h-7 rounded-full" src="https://www.worldometers.info/img/flags/sa-flag.gif" alt="" />
                        </span>
                        <div className='justify-items-end'>
                          Arabic
                        </div>
                      </div>
                      <div className='flex items-center justify-start gap-x-1'>
                        <span className="">
                          <img className="w-7 h-7 rounded-full" src="https://www.worldometers.info/img/flags/tu-flag.gif" alt="" />
                        </span>
                        <div className='justify-items-end'>
                          Turkish
                        </div>
                      </div>
                      <div className='flex items-center justify-start gap-x-1'>
                        <span className="">
                          <img className="w-7 h-7 rounded-full" src="https://www.worldometers.info/img/flags/uk-flag.gif" alt="" />
                        </span>
                        <div className='justify-items-end'>
                          English
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="REFERENCES">
          <div className="w-full px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center xl:gap-12 gap-10">
              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                    <h1 className="font-manrope text-gray-400 text-4xl font-bold leading-10 relative left-0">REFERENCES</h1>
                    <hr className="w-28 h-1 bg-black border-0 rounded  dark:bg-gray-700" />
                  </div>
                  <div className="w-full flex-col justify-center items-start gap-6 flex">
                    <ol className="items-center sm:flex">
                      <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                          <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                          </div>
                          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pe-8">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ahmed Elkadri</h3>
                          <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Senior Software Developer at Meler-Toledo</p>
                          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Phone: +90 551 600 54 28</p>
                          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Email: ah.al-kadri@live.com</p>
                        </div>
                      </li>
                      <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                          <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                          </div>
                          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pe-8">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Yasin Faruk Kılıç</h3>
                          <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Senior Software Developer & Co-Founderat Hitatek</p>
                          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Phone: +90 505 468 37 17</p>
                          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Email: info@hitatek.com</p>
                        </div>
                      </li>
                      <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                          <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                          </div>
                          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pe-8">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Amir Alkadri</h3>
                          <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">product manager</p>
                          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Phone: +90 553 723 00 31</p>
                          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Email: alkadriamer@gmail.com</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ContactUs">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="lg:mb-0 mb-10">
                <div className="group w-full h-full">
                  <div className="relative h-full">
                    <img src="https://pagedone.io/asset/uploads/1696488602.png" alt="ContactUs tailwind section" className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover" />
                    <div className='absolute flex flex-col items-start justify-between top-11 left-11 h-14'>
                      <h1 className="font-manrope text-white text-4xl font-bold leading-10 ">Contact us</h1>
                      <hr className="relative top-2 w-28 h-1 bg-black border-0 rounded  dark:bg-gray-700" />
                    </div>
                    <div className="absolute bottom-0 w-full lg:p-11 p-5">
                      <div className="bg-white rounded-lg p-6 block">
                        <a href="javascript:;" className="flex items-center mb-6">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <h5 className="text-black text-base font-normal leading-6 ml-5">470-601-1911</h5>
                        </a>
                        <a href="javascript:;" className="flex items-center mb-6">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" />
                          </svg>
                          <h5 className="text-black text-base font-normal leading-6 ml-5">Pagedone1234@gmail.com</h5>
                        </a>
                        <a href="javascript:;" className="flex items-center">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z" stroke="#4F46E5" stroke-width="2" />
                            <path d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z" stroke="#4F46E5" stroke-width="2" />
                          </svg>
                          <h5 className="text-black text-base font-normal leading-6 ml-5">654 Sycamore Avenue, Meadowville, WA 76543</h5>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">Send Us A Message</h2>
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Name" />
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Email" />
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Phone" />
                <div className="mb-10">
                  <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">Preferred method  of communication</h4>
                  <div className="flex">
                    <div className="flex items-center mr-11">
                      <input id="radio-group-1" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100" />
                      <label htmlFor="radio-group-1" className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
                        <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 "></span> Email
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="radio-group-2" type="radio" name="radio-group" className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100" />
                      <label htmlFor="radio-group-2" className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
                        <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 "></span> Phone
                      </label>
                    </div>
                  </div>
                </div>
                <input type="text" className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10" placeholder="Message" />
                <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">Send</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </html>
  )
}

export default App



/*

        <section>
          <div className="grid grid-cols-4 gap-4 p-4">
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeIn">fadeIn</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeInDown">fadeInDown</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeInLeft">fadeInLeft</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeInRight">fadeInRight</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeInUp">fadeInUp</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeOut">fadeOut</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeOutDown">fadeOutDown</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeOutLeft">fadeOutLeft</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeOutRight">fadeOutRight</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeOutUp">fadeOutUp</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideInDown">slideInDown</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideInLeft">slideInLeft</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideInRight">slideInRight</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideInUp">slideInUp</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideOutDown">slideOutDown</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideOutLeft">slideOutLeft</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideOutRight">slideOutRight</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideOutUp">slideOutUp</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideDown">slideDown</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideLeft">slideLeft</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideRight">slideRight</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-slideUp">slideUp</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoomIn">ZoomIn</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-zoomOut">ZoomOut</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-tada">Tada</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-spinnerGrow">SpinnerGrow</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center text-center hover:animate-fadeInTopLeft">fadeIn <br />TopLeft </div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center text-center hover:animate-fadeInTopRight">fadeIn <br />TopRight </div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center text-center hover:animate-fadeInBottomLeft">fadeIn <br />BottomLeft </div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center text-center hover:animate-fadeInBottomRight">fadeIn <br />BottomRight </div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center text-center hover:animate-fadeInBounceDown">fadeIn <br />BounceDown </div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center text-center hover:animate-fadeInBounceUp">fadeIn <br />BounceUp </div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center text-center hover:animate-fadeInBounceRight">fadeIn <br />BounceRight </div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center text-center hover:animate-fadeInBounceLeft">fadeIn <br />BounceLeft </div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-fadeOutLeft">fadeOutLeft</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center text-center hover:animate-fadeOutTopLeft">fadeOut <br />TopLeft </div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center text-center hover:animate-fadeOutTopRight">fadeOut <br />TopRight </div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-dropIn">dropIn</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-dropOut">dropOut</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyIn">flyIn</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyInUp">flyInUp</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyInDown">flyInDown</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyInLeft">flyInLeft</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyInRight">flyInRight</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyOut">flyOut</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyOutUp">flyOutUp</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyOutDown">flyOutDown</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyOutLeft">flyOutLeft</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flyOutRight">flyOutRight</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-browseIn">browseIn</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-browseOut">browseOut</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center text-center hover:animate-browseOutLeft">browse <br />OutLeft </div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center text-center hover:animate-browseOutRight">browse <br />OutRight </div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-jiggle">jiggle</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-flash">flash</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-shake">Shake</div>
            <div className="bg-indigo-100 text-indigo-600 text-base w-40 h-36 font-medium flex items-center justify-center text-center hover:animate-glow">Glow</div>
          </div>
        </section>


*/