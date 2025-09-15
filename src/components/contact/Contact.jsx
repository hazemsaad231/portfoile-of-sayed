import { CgMail } from "react-icons/cg";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";


function Contact() {

 

  return (
    <>
    <div id="contact" className='px-8 pb-8'>
      <div className="flex flex-col justify-center items-center gap-2">

<div className="text-center">
<h1 
   className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold inline-block"
   style={{ WebkitTextFillColor: "transparent" }}>
  Contact Me <span className='w-4 h-4 bg-primary inline-block rounded-full'></span>
  </h1>
  </div>

  <div className="bg-[#1e1e1e] border border-[#444444] p-1 md:p-5 rounded-2xl shadow-lg mt-8">

<ul className="flex flex-col md:flex-row gap-5 md:gap-20 text-xl">

  <li className="flex items-center gap-1 hover:border-b p-2">
  <CgMail size={30} className="text-white" />
  <a href="mailto:elgoharysayed410@gmail" className="text-white">elgoharysayed410@gmail.com</a>
  </li>

  <li className="flex items-center gap-2 hover:border-b p-2">
  <FaPhoneVolume size={30} className="text-white" />
  <a href="tel:+20112544770" className="text-white">01126544770</a>
  </li>

  <li className="flex items-center gap-1 hover:border-b p-2">
    <FaSquareWhatsapp size={35} className="text-white" />
  <a href="https://wa.me/201099076093" className="text-white">Whatsapp</a>
  </li>
</ul>
  </div>

    <div className="mt-10 md:mt-40 text-lg sm:text-lg md:text-xl lg:text-2xl">
            <ul className='flex justify-center gap-4 md:gap-10'>
           <li><a href="#home" className="relative transition duration-500 ease-in-out hover:text-primary"> Home</a></li>
                <li> <a  href='#about' className="relative transition duration-500 ease-in-out hover:text-primary">About</a></li>
                <li> <a  href='#experience' className="relative transition duration-500 ease-in-out hover:text-primary">experience</a></li>
                <li> <a  href='#projects' className="relative transition duration-500 ease-in-out hover:text-primary">projects</a></li>
          </ul>
          
        </div>
<p className="mt-4 text-md text-center">Copyright © 2025 Sayed Elgohary. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Contact;

