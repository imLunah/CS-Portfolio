import './App.css';
import {IconContext} from 'react-icons';
import { FaHtml5, FaReact, FaJava, FaPython, } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiCplusplus, SiThreedotjs, SiVite } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

import { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {OrbitControls, Environment} from '@react-three/drei'
import Ghost from '../public/Scene'


const App = () => { 

  return (   

    

    <IconContext.Provider value={{ color: "", size: "5em" }}>
      <div>

        <section className="mt-52 mb-[500px] flex justify-start items-left flex-col flex-wrap gap-20">
          <div className="flex flex-col flex-wrap max-w-xl ">
            <h1 className="text-8xl font-bold text-gray-50 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-left">
              Hello, I'm
            </h1>
            <h1 className="text-8xl font-bold type-names text-left text-gray-50 mt-10"></h1>
          </div>

          <img className="h-96 rounded-full absolute right-64" src="images/duck.png" alt="profile-pic"/>

          <div className="text-left items-center flex gap-5">
            <a
              className="btn bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white py-2 px-6"
              href="https://docs.google.com/document/d/1yOVS3SOW-E1OXmeGGq9JF6tBK4x5FPqNTSY_wzada3M/edit?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
            <a
              className="btn border-solid border-2 rounded-full text-white py-2 px-6 hover:bg-gradient-to-r from-purple-500 to-pink-500"
              href="https://www.linkedin.com/in/johndangca/"
              target="_blank"
            >
              Contact
            </a>
          </div>
        </section>
     

        <section className="flex justify-center items-center flex-col flex-wrap text-gray-50" id="about">
          <h1 className="text-5xl font-bold mb-10">About Me</h1>
          
          <div className="flex justify-center items-center text-center flex-row flex-wrap gap-5">
            <div className="mb-10">
              <Canvas camera={{position: [1, 1, 200]}}>
                
                <ambientLight intensity={2} />
                <OrbitControls enableZoom={false} enablePan={false}/> 
                <Suspense fallback={null}>
                  <Ghost scale={[1,1,1]}/>
                </Suspense>
                <Environment preset='sunset' />
              </Canvas>
              <span> Rotate me! </span>
            </div>
            

            <p className="text-3xl">
              My name is John Dang, and I am currently a student at Cal Poly Pomona. I have developed a robust skill set in various programming languages and frameworks. Below showcases my knowledge and skills I am currently learning. 
              While my experience spans both frontend and backend technologies, I preferably work in frontend web development, however I am flexible with backend as well.
            </p>
          </div>

          <div>
            <section>
              <ul className="flex justify-center items-center flex-row flex-wrap mt-10 gap-10">
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
              </ul>
              
            </section>
          </div>
        </section>

        <section className="mt-96 flex justify-center items-center flex-col flex-wrap" id="experience">
          <h1 className="text-5xl font-bold mb-10 text-center text-gray-50">Experience</h1>
          <div className="flex flex-row gap-10 text-white">
            <section className="mb-48 p-10 bg-gray-400 rounded-xl bg-opacity-5">
              <div className="flex justify-center items-center flex-col gap-10 max-w-md h-209">
                <img className="h-40" src="images/nasa-logo.webp" alt="nasa-pic"/>
                <p className="text-start">
                  I played a pivotal software engineering role at NASA NCAS, collaborating with a multidisciplinary team to prototype a rover model for a simulated Martian environment. My responsibilities included programming the rover with intelligence and agility, conducting comprehensive research on in-situ resource utilization and space exploration processes, and demonstrating a commitment to advancing the frontiers of space exploration.
                </p>
              </div>
            </section>

            <section className="mb-48 p-10 bg-gray-400 rounded-xl bg-opacity-5">
              <div className="flex justify-center items-center flex-col gap-10 max-w-md h-209">
                <img src="images/dfs-logo.png" alt="dreamsforschools"/>
                <p className="text-start">
                  I taught essential web development concepts, including HTML, CSS, and JavaScript, to over 40 middle school students in the Yorba Linda and Irvine districts, providing comprehensive lessons and hands-on learning experiences. Additionally, I introduced STEM fundamentals to over 60 elementary school students through hands-on projects.
                </p>
              </div>
            </section>

            <section className="mb-48 p-10 bg-gray-400 backdrop-blur-xl rounded-xl bg-opacity-5">
              <div className="flex justify-center items-center flex-col gap-10 max-w-md h-209">
                <img className="rounded-full w-40" src="images/camera.webp" alt="photography"/>
                <p className="text-start">
                  I established and operated SpiceChi, a successful photography brand specializing in weddings, engagements, graduations, corporate events, and school events. With five years of extensive experience, I delivered exceptional results using advanced techniques and equipment. I provided services for renowned companies like Johnson & Johnson, Dreams For Schools, The Electric Bike Co, Big Brothers Big Sisters, Girl Scouts Of America, and IUSD, capturing images that aligned with their branding. Through SpiceChi, I documented weddings and engagements, capturing memorable moments and collaborating closely with clients to meet their specific needs.
                </p>
              </div>
            </section>
          </div>
        </section>

        <section className="mt-96 flex justify-center items-center flex-col flex-wrap" id="Projects">
          <h1 className="text-5xl font-bold mb-10 text-center text-gray-50">Projects</h1>
          <div className="flex flex-row gap-10 text-white">
            <section className="mb-48 p-10 bg-gray-400 rounded-xl bg-opacity-5">
              <div className="flex justify-center items-center flex-col gap-10 max-w-md h-209">
                
              </div>
            </section>

            <section className="mb-48 p-10 bg-gray-400 rounded-xl bg-opacity-5">
              <div className="flex justify-center items-center flex-col gap-10 max-w-md h-209">
               
              </div>
            </section>

            <section className="mb-48 p-10 bg-gray-400 backdrop-blur-xl rounded-xl bg-opacity-5">
              <div className="flex justify-center items-center flex-col gap-10 max-w-md h-209">
                
              </div>
            </section>
          </div>
        </section>
      </div>
    </IconContext.Provider>
  );
};

export default App;
