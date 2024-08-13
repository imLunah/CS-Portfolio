import './App.css';
import { IconContext } from 'react-icons';
import { FaHtml5, FaReact, FaJava, FaPython, } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiCplusplus, SiMui, SiThreedotjs, SiVite } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Ghost from '../public/Scene'
import { Suspense } from 'react';

const App = () => {
  return (
    <IconContext.Provider value={{ color: "white", size: "4em" }}>
      <div>
        <section className="mt-10 mb-20 md:mt-52 md:mb-[500px] flex flex-col gap-10 md:gap-20 items-center md:items-start">
          <div className="flex flex-col flex-wrap max-w-xl text-center md:text-left xl:ml-40">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-50 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hello, I'm
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold type-names text-gray-50 mt-6 md:mt-10"></h1>
          </div>

          <img className="h-60 md:h-72 md:mr-10 rounded-full md:absolute right-0 xl:mr-40 xl:h-96 2xl:h-2/5" src="images/duck.png" alt="profile-pic" />

          <div className="flex gap-3 md:gap-5 xl:ml-40">
            <a
              className="btn bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white py-2 px-4 md:px-6"
              href="https://docs.google.com/document/d/1yOVS3SOW-E1OXmeGGq9JF6tBK4x5FPqNTSY_wzada3M/edit?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
            <a
              className="btn border-solid border-2 rounded-full text-white py-2 px-4 md:py-2 md:px-6 hover:bg-gradient-to-r from-purple-500 to-pink-500"
              href="https://www.linkedin.com/in/johndangca/"
              target="_blank"
            >
              Contact
            </a>
          </div>
        </section>

        <section className="flex flex-col items-center text-gray-50 rounded-xl bg-gray-400 bg-opacity-5 p-10" id="about">
          <h1 className="text-4xl md:text-5xl font-bold mb-10">About Me</h1>

          <div className="flex flex-col md:flex-col justify-center items-center text-center md:text-left gap-5">
            <div className="mb-10">
              <Canvas camera={{ position: [1, 1, 200] }}>
                <ambientLight intensity={2} />
                <OrbitControls enableZoom={false} enablePan={false} />
                <Suspense>
                  <Ghost scale={[1, 1, 1]} />
                </Suspense>
                <Environment preset='sunset' />
              </Canvas>
              <p className="text-center"> Rotate me! </p>
            </div>

            <p className="text-xl md:text-3xl text-center max-w-4xl">
              My name is John Dang, and I am currently a student at Cal Poly Pomona. I have developed a robust skill set in various programming languages and frameworks. Below showcases my knowledge and skills I am currently learning. While my experience spans both frontend and backend technologies, I preferably work in frontend web development however, I am open to working with backend.
            </p>
          </div>

          <div>
            <section>
              <ul className="flex justify-center items-center flex-wrap mt-10 gap-6 md:gap-10">
                <li> <FaHtml5 /> </li>
                <li> <IoLogoCss3 /> </li>
                <li> <IoLogoJavascript /> </li>
                <li> <FaReact /></li>
                <li> <FaJava /></li>
                <li> <SiCplusplus /> </li>
                <li> <FaPython /> </li>
                <li> <SiThreedotjs /> </li>
                <li> <FaGolang /> </li>
                <li> <SiVite /> </li>
                <li> <SiMui /> </li>
              </ul>
            </section>
          </div>
        </section>

        <section className="mt-32 md:mt-96 flex flex-col items-center" id="experience">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-50">Experience</h1>
          <div className="flex flex-col md:flex-col lg:flex-row gap-10 text-white px-4 md:px-0">
            <section className="mb-10 md:mb-48 p-6 md:p-10 bg-gray-400 rounded-xl bg-opacity-5">
              <div className="flex flex-col gap-10 max-w-md h-209 justify-center items-center">
                <img className="w-40 flex" src="images/nasa-logo.webp" alt="nasa-pic" />
                <p className="text-start">
                  I played a pivotal software engineering role at NASA NCAS, collaborating with a multidisciplinary team to prototype a rover model for a simulated Martian environment. My responsibilities included programming the rover with intelligence and agility, conducting comprehensive research on in-situ resource utilization and space exploration processes, and demonstrating a commitment to advancing the frontiers of space exploration.
                </p>
              </div>
            </section>

            <section className="mb-10 md:mb-48 p-6 md:p-10 bg-gray-400 rounded-xl bg-opacity-5">
              <div className="flex flex-col gap-10 max-w-md h-209 justify-center items-center">
                <img src="images/dfs-logo.png" alt="dreamsforschools" />
                <p className="text-start">
                  I taught essential web development concepts, including HTML, CSS, and JavaScript, to over 40 middle school students in the Yorba Linda and Irvine districts, providing comprehensive lessons and hands-on learning experiences. Additionally, I introduced STEM fundamentals to over 60 elementary school students through hands-on projects.
                </p>
              </div>
            </section>

            <section className="mb-10 md:mb-48 p-6 md:p-10 bg-gray-400 backdrop-blur-xl rounded-xl bg-opacity-5">
              <div className="flex flex-col gap-10 max-w-md h-209 justify-center items-center">
                <img className="rounded-full w-40" src="images/camera.webp" alt="photography" />
                <p className="text-start">
                  I established and operated SpiceChi, a successful photography brand specializing in weddings, engagements, graduations, corporate events, and school events. With five years of extensive experience, I delivered exceptional results using advanced techniques and equipment. I provided services for renowned companies like Johnson & Johnson, Dreams For Schools, The Electric Bike Co, Big Brothers Big Sisters, Girl Scouts Of America, and IUSD, capturing images that aligned with their branding. Through SpiceChi, I documented weddings and engagements, capturing memorable moments and collaborating closely with clients to meet their specific needs.
                </p>
              </div>
            </section>
          </div>
        </section>

        <section className="mt-32 md:mt-96 flex flex-col items-center" id="projects">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-gray-50">Projects</h1>
          <div className="flex flex-col md:flex-col lg:flex-row gap-10 text-white px-4 md:px-0">
            <section className="mb-10 md:mb-48 p-6 md:p-10 bg-gray-400 rounded-xl bg-opacity-5">
              <div className="flex flex-col gap-10 max-w-md h-209 justify-center items-center">
                
                <p className="text-start">
                 
                </p>
              </div>
            </section>

            <section className="mb-10 md:mb-48 p-6 md:p-10 bg-gray-400 rounded-xl bg-opacity-5">
              <div className="flex flex-col gap-10 max-w-md h-209 justify-center items-center">
               
                <p className="text-start">
                  
                </p>
              </div>
            </section>

            <section className="mb-10 md:mb-48 p-6 md:p-10 bg-gray-400 backdrop-blur-xl rounded-xl bg-opacity-5">
              <div className="flex flex-col gap-10 max-w-md h-209 justify-center items-center">
                
                <p className="text-start">
                  
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </IconContext.Provider>
  );
};

export default App;
