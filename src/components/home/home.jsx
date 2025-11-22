import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-40 justify-center items-center w-full pt-40 pb-28 px-4' id='home'>


    <div className='flex flex-col justify-center items-center'>
      
    <h1 
  className="bg-gradient-to-r from-primary to-white bg-clip-text text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold tracking-[2px] inline-block"
  style={{ WebkitTextFillColor: "transparent" }}
>
  I'm Sayed
</h1>
        <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl my-3'>

          
          <TypeAnimation
          sequence={[
      'software engineer',
      1000,
      'Back end developer',
      1000,
          ]}
          wrapper="h1"
          speed={1} 
          repeat={Infinity}
          cursor={true}/>

          </h1>

        <p className='text-md text-center text-gray-200 sm:text-md md:text-md lg:text-lg xl:text-xl w-80 mb-4 '>

        I'm professional web developer 

        </p>
        <div className='flex mb-8'>

<div className="relative z-10">
  <a href='/CV.pdf' download={"HazemSaad_CV.pdf"}><button className="text-sm flex bg-gradient-to-t from-primary to-white py-2.5 px-4 font-medium uppercase text-white rounded-full ">
        Download Cv
      </button></a>
    </div>
        <a href="https://github.com/Sayed-cpu"><FaGithub className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl mx-3 text-white'/></a>
        <a href="https://www.linkedin.com/in/sayed-elgohary-a2a000351"><FaLinkedin className='text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl'/></a>
        </div>
    </div>

<div className='w-60 h-60 md:w-80 md:h-80'>
  <img src="/sayed.jpg" alt="" className='object-center w-full h-full rounded-full' loading='eager'/>
</div>

</div>

</>

  )
};

export default Home


