import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import ReactTypingEffect from 'react-typing-effect';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { MyStory } from './components/my_story';
import { Skills } from './components/skills';
import { CurriculumVitae } from './components/curriculum_vitae';
import { References } from './components/references';
import { ContactMy } from './components/contact_my';
import { Footer } from './components/footer';
import { useTranslation } from 'react-i18next';
import { NavBar } from './components/navBar';
//import visitors from '../visitors.json';
//import { Octokit, App } from "octokit";

type ElementData = {
  content: any;
  startAnimationClasses: string[];
};

function App() {



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
        <NavBar />
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
      <main className='w-full flex items-center justify-center relative xl:mr-0 lg:mr-5 mr-0  py-24'>
        <div className='max-w-7xl flex flex-col  gap-y-20'>

          <section id='my_story' className="w-full sm:px-5 px-4 md:px-5 lg:px-5 mx-auto">
            <MyStory />
          </section>
          <section id='skills'>
            <Skills />
          </section>
          <section id='curriculum_vitae' className="">
            <CurriculumVitae />
          </section>
          <section id='references' className="">
            <References />
          </section>
          <section id='contact_my' className="contact_my">
            <ContactMy />
          </section>

        </div>

      </main>
      <footer className="bg-gray-200 dark:bg-gray-900">
        <Footer />
      </footer>
      <ToastContainer />

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