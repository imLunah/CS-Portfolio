import './App.css'

const App = () => {
  return <div>

    <section className="mt-52 mb-[500px] flex justify-start items-left flex-col flex-wrap gap-20 animate ">
      <div className="flex flex-col flex-wrap max-w-xl ">
        <h1 className="text-8xl font-bold text-gray-50 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-left"> Hello, I'm </h1>
        <h1 className="text-8xl font-bold type-names text-left text-gray-50 mt-10">  </h1>
      </div>
      <img className="h-96 rounded-full absolute right-64" src="images/duck.png" alt="profile-pic"/>

      <div className="text-left items-center flex gap-5">
        <a className="btn bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white py-2 px-6" href="https://docs.google.com/document/d/1yOVS3SOW-E1OXmeGGq9JF6tBK4x5FPqNTSY_wzada3M/edit?usp=sharing" target="_blank"> Resume </a>
        <a className="btn border-solid border-2 rounded-full text-white py-2 px-6 hover:bg-gradient-to-r from-purple-500 to-pink-500" href="https://www.linkedin.com/in/johndangca/" target="_blank"> Contact </a>
      </div>
      
    </section>

    <section className="flex justify-center items-center flex-col flex-wrap text-gray-50" id="about">
      <h1 className="text-5xl font-bold mb-10"> About Me </h1>
      <div className="flex justify-center items-center text-center flex-row flex-wrap gap-5">
      <img className="h-72 rounded-full mb-10"src="images/me.jpg" alt="about-me-pic"/>
      <p className="text-3xl"> My name is John Dang, and I am currently a student at Cal Poly Pomona. I have developed a robust skill set in various programming languages and frameworks. While my experience spans both frontend and backend technologies, my passion lies in frontend web development </p>
      
      </div>

      <div className="flex justify-center items-center flex-row flex-wrap  mt-10" >
        
        <section>
          <div className="flex justify-center items-center flex-row flex-wrap gap-10">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-html-3628838-3030115.png?f=webp&w=128" alt="html"/>
            <img src="https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=128" alt="css"/>
            <img src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=128" alt="js"/>
            <img className="h-64" src="https://www.svgrepo.com/show/374118/tailwind.svg?" alt="tailwind"/>
            <img className="h-48" src="https://cdn.iconscout.com/icon/free/png-512/free-java-3628857-3029997.png?f=webp&w=256" alt="java"/>
            <img className="h-48" src="https://cdn.iconscout.com/icon/free/png-512/free-python-2-226051.png?f=webp&w=256" alt="python"/>
            <img className="h-48" src="https://cdn.iconscout.com/icon/free/png-512/free-react-3-1175109.png?f=webp&w=256" alt="react"/>
            <img className="h-64" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/1200px-Three.js_Icon.svg.png" alt="three.js"/>
            <img className="h-48" src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" alt="vite"/>
            </div>
        </section>
       

      </div>
    </section>

    <section className="mt-96 flex justify-center items-center flex-col flex-wrap" id="experience">
     
      <h1 className="text-5xl font-bold mb-10 text-center text-gray-50" id="about"> Experience </h1>

      <div className="flex flex-row gap-10 text-white ">
        <section className="mb-48 p-10 bg-gray-400  rounded-xl bg-opacity-5">
          <div className="flex justify-center items-center flex-col gap-10 max-w-md h-209 ">
            <img className="h-40" src="images/nasa-logo.webp" alt="nasa-pic"/>
            <p className="text-start"> I played a pivotal software engineering role at NASA NCAS, collaborating with a multidisciplinary team to prototype a rover model for a simulated Martian environment. My responsibilities included programming the rover with intelligence and agility using, conducting comprehensive research on in-situ resource utilization and space exploration processes, and demonstrating a commitment to advancing the frontiers of space exploration. </p>   
          </div>
        </section>

        <section className="mb-48 p-10 bg-gray-400 rounded-xl bg-opacity-5">
          <div className="flex justify-center items-center flex-col gap-10 max-w-md h-209">
            <img src="images/dfs-logo.png" alt="dreamsforschools"/>
            <p className="text-start"> I taught essential web development concepts, including HTML, CSS, and JavaScript, to over 40 middle school students in the Yorba Linda and Irvine districts, providing comprehensive lessons and hands-on learning experiences. Additionally, I introduced STEM fundamentals to over 60 elementary school students through hands-on projects. </p>   
          </div>
        </section>

        <section className="mb-48 p-10 bg-gray-400 backdrop-blur-xl rounded-xl bg-opacity-5">
          <div className="flex justify-center items-center flex-col gap-10 max-w-md h-209">
            <img className="rounded-full w-40" src="images/camera.webp" alt="photography"/>
            <p className="text-start"> I established and operated SpiceChi, a successful photography brand specializing in weddings, engagements, graduations, corporate events, and school events. With five years of extensive experience, I delivered exceptional results using advanced techniques and equipment. I provided services for renowned companies like Johnson & Johnson, Dreams For Schools, The Electric Bike Co, Big Brothers Big Sisters, Girls Scouts Of America, and IUSD,  capturing images that aligned with their branding. Through SpiceChi, I documented weddings and engagements, capturing memorable moments and collaborating closely with clients to meet their specific needs. </p>   
          </div>
        </section>
      </div>
    
      
 
    </section>
    
  </div>

}

export default App