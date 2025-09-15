import { useState } from "react";
import { FaAlignRight } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';
import { CiLocationArrow1 } from "react-icons/ci";

const NavBar = () => {
  

    const [isNavbarVisible, setNavbarVisible] = useState(false);
   
      const toggleNavbar = () => {
        setNavbarVisible(!isNavbarVisible);
    
      };


    return (
        
        <>

<div className="py-4 w-full rounded-full z-50">


<div className='flex items-center justify-around w-full'>


<div>
<h1 className="text-xl lg:text-3xl text-center">
  S<span className='text-blue-500 relative right-1'> G</span>
  <h5 className="text-sm text-gray-200">Sayed Elgohary</h5>
  </h1>

</div>
        
{/* القاءمه العاديه */}

        <div className="hidden sm:hidden md:block lg:block xl:block">
            <ul className='flex gap-6 text-md sm:text-md md:text-md lg:text-xl xl:text-xl p-2'>
           <li><a href="#home" className="relative transition duration-500 ease-in-out hover:text-primary"> Home</a></li>
                <li> <a  href='#about' className="relative transition duration-500 ease-in-out hover:text-primary">About</a></li>
                <li> <a  href='#experience' className="relative transition duration-500 ease-in-out hover:text-primary">experience</a></li>
                <li> <a  href='#projects' className="relative transition duration-500 ease-in-out hover:text-primary">projects</a></li>
                <li> <a  href='#contact' className="relative transition duration-500 ease-in-out hover:text-primary">contact</a></li>
          </ul>
        </div>

    <div className="relative z-10">
  <button className="flex border-2 border-primary bg-transparent py-2.5 px-5 font-medium uppercase text-white rounded-full before:rounded-full transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-1000 before:content-[''] hover:text-white before:hover:scale-x-100">
           <CiLocationArrow1 color="white" size={20} className="relative top-1 right-1"/>
        <a href='https://wa.me/201099076093'>Contact Me</a>
      </button>
    </div>
    

           

<FaAlignRight className='text-2xl mt-1 cursor-pointer block sm:block md:hidden lg:hidden xl:hidden' onClick={toggleNavbar} />


{/* {القاءمه المنسدله} */}
<AnimatePresence>
      {isNavbarVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }} // ❌ تأثير الاختفاء
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 right-0 inset-0 w-[40%] h-max p-1 bg-primary z-40 "
        >
          <div className="flex flex-col gap-2 items-center w-full">

          <ul className="flex flex-col gap-x-3 font-semibold gap-y-4 my-8 mx-4">
          {["home", "about", "experience", "projects", "contact" ].map((item) => (
            <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }} // ❌ تأثير اختفاء كل عنصر
                  transition={{ duration: 0.3, delay: Math.random() * 0.3 }}

                >
                  <a
                    href={`#${item}`}
                    className="relative transition duration-500 ease-in-out"
                    onClick={toggleNavbar}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>

            <button
        onClick={toggleNavbar}
        className="text-white font-bold text-xl absolute top-2 right-2"
       >
        ✖
      </button>
     </div>
  </motion.div>
  )}
 </AnimatePresence> 
 
    
            </div>
        </div>

        
        </>
    )
}

export default NavBar




         
