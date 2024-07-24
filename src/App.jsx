import './App.css'

const App = () => {
  return <div>

    <section class="mt-52 mb-[500px] flex justify-center items-center flex-row flex-wrap gap-96">
          <h1 class="text-8xl font-Zain type-names text-gray-50 max-w-96"></h1>
          <img class="h-72 rounded-full animate-none" src="https://media.licdn.com/dms/image/D5603AQEhVDdxJLxutg/profile-displayphoto-shrink_800_800/0/1713764359389?e=1727308800&v=beta&t=dF6HzwVqNkq-iStMsbAc6g9U-57LBAwaDnWk9ksEz2g" alt="profile-pic"/>
    </section>

    <section class="flex justify-center items-center flex-col flex-wrap border-solid border-8 p-10 text-gray-50" id="about">
      <h1 class="text-5xl font-Zain mb-52"> About Me </h1>
      <div class="flex justify-center items-center text-start flex-row flex-wrap gap-5">
        <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        
      </div>

      <div class="flex justify-center items-center flex-row flex-wrap  mt-10" >
        
        <section class="flex justify-center items-center flex-row flex-wrap gap-10">
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-html-3628838-3030115.png?f=webp&w=128" alt="html"/>
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=128" alt="css"/>
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=128" alt="js"/>
          <img class="h-64" src="https://www.svgrepo.com/show/374118/tailwind.svg?" alt="tailwind"/>
        </section>
       

      </div>
    </section>

    <section class="mt-96 flex justify-center items-center flex-col flex-wrap border-solid border-8 p-10 " id="experience">
      <h1 class="text-5xl font-Zain mb-52 text-center text-gray-50" id="about"> Experience </h1>

      <section class="mb-48 p-10 bg-gray-400  rounded-xl backdrop-blur-lg ">
        <div class="flex justify-center items-center flex-col gap-10 max-w-md mt-10 h-209 ">
          <span class="text-3xl font-bold font-Zain"> National Aeronautics and Space Administration </span>
          <img class="h-40" src="portfolio/images/nasa-logo.webp" alt="nasa-pic"/>
          <p class="text-start"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>   
        </div>
      </section>

      <section class="mb-48 p-10 bg-gray-400 rounded-xl">
        <div class="flex justify-center items-center flex-col gap-10 max-w-md mt-10 h-209">
          <span class="text-3xl font-bold font-Zain"> Dreams For Schools </span>
          <img src="portfolio/images/dfs-logo.png" alt="dreamsforschools"/>
          <p class="text-start"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>   
        </div>
      </section>
 
    </section>
    
  </div>

}

export default App