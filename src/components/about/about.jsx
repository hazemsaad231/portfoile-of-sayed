import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import { skills } from '../Data/data';




const About = () => {



      const [active, setActive] = useState('skills');
      const [viewSkills, setViewSkills] = useState(true);
      const [viewEducation, setViewEducation] = useState(false);

      const toggleView = () => {
        setViewSkills(true);
        setViewEducation(false);
      }

      const toggleView2 = () => {
        setViewEducation(true);
        setViewSkills(false);
      }


      const toggleActive = (e) => {
        setActive(e);
        
      }

    
    return (
        <>
        <div className='flex flex-col justify-center items-center py-20' id='about'>
       
          <div className='px-4'>
          <h1 
  className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold inline-block"
  style={{ WebkitTextFillColor: "transparent" }}
>
  About Me <span className='w-4 h-4 bg-primary inline-block rounded-full'></span>
</h1>
            
            <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-6 sm:gap-6 md:gap-10 lg:gap-10 xl:gap-12'
             >
          <p className="text-gray-300 w-[100%] sm:w-[100%] md:w-[60%] lg:w-[60%] xl:w-[600px] mt-4 text-lg z-1">
  I'm Sayed, a backend developer specialized in Laravel, with experience in building secure, scalable, and high performance server side applications. 
  I have worked on developing robust APIs, authentication systems, and dynamic web applications that power modern front-end experiences.
  <p className='mt-2'>
    I focus on optimizing databases, ensuring application security, and enhancing overall system performance. Whether it's collaborating on a small project 
    or architecting a large scale application, I bring dedication and problem-solving skills to every task.
  </p>
</p>


            <div>
            <ul className='flex gap-x-4 mt-5 text-xl text-gray-300 cursor-pointer relative top-2 '>
            <li 
     onClick={() => {
       toggleActive('skills');
      toggleView();
  }} 
  className={`text-2xl font-bold relative cursor-pointer transition-all duration-700 ease-in-out 
    ${active === 'skills' ? 'text-primary' : 'text-gray-300'}
  `}
>
  Skills
  <span className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-700 ease-in-out 
    ${active === 'skills' ? 'w-full' : 'w-0'}`}>
  </span>
</li>
  <li onClick={()=>{toggleActive('education');
    toggleView2()}} className={`text-2xl font-bold  relative cursor-pointer transition-all duration-700 ease-in-out
     ${active==='education' ? 'text-primary' : 'text-gray-300'}`}>
      Education <span
   className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-700 ease-in-out
    ${active==='education' ? 'w-full' : 'w-0'}`}></span></li>
            </ul>


            <div className='h-80 mt-10 text-gray-300 cursor-pointer text-xl'>
            {viewSkills &&
            <div className='grid grid-cols-2 w-64 gap-1'>
            {skills.map((item, index) => (
              <ul key={index}>
                <li className='bg-primary text-white px-2 m-1 w-max rounded-full hover:bg-white hover:text-primary'>{item}</li>
               
                </ul>
            ))}
            </div>
              }
              {viewEducation &&
              <ul className='grid grid-cols-1 gap-3'>
                <li className='bg-primary text-white px-2 w-max rounded-full hover:bg-white hover:text-primary'>Bachelor's in Computer Science</li>
                <li className='bg-primary text-white px-2 w-max rounded-full hover:bg-white hover:text-primary'>university of Menoufia</li>
              </ul>
              }
            </div>
          
            </div>
          
            
           
       


            </div>
         
            </div>
        
            </div>

        </>
    )
}

export default About

