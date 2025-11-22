import { Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const contactItems = [
    {
      id: 'email',
      icon: <Mail size={30} />,
      label: 'elgoharysayed410@gmail.com',
      href: 'mailto:elgoharysayed410@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'phone',
      icon: <Phone size={30} />,
      label: '01126544770',
      href: 'tel:+20112544770',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'whatsapp',
      icon: <MessageCircle size={35} />,
      label: 'WhatsApp',
      href: 'https://wa.me/201099076093',
      color: 'from-green-400 to-green-600'
    }
  ];

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" }
  ];

  return (
    <div id="contact" className='px-4 pb-12 mt-24 relative overflow-hidden'>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="flex flex-col justify-center items-center gap-8 relative z-10">
        
        {/* Title Section */}
        <div className="text-center space-y-3">
          <div className="text-center">
 <h1 
   className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold inline-block"
   style={{ WebkitTextFillColor: "transparent" }}>
  Contact Me <span className='w-4 h-4 bg-primary inline-block rounded-full'></span>
  </h1>
  </div>
        
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's connect and bring your ideas to life
          </p>
        </div>

        {/* Contact Cards */}
        <div className="w-full max-w-5xl mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {contactItems.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-primary/30 p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className="relative flex flex-col items-center gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-500`}>
                    <div className="text-white group-hover:animate-pulse">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Label */}
                  <span className="text-white text-center font-medium group-hover:text-primary transition-colors duration-300 break-all">
                    {item.label}
                  </span>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500"></div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-16 md:mt-24">
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-lg md:text-xl">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group px-4 py-2 transition-all duration-300 hover:scale-110"
                style={{
                  animation: `fadeIn 0.8s ease-out ${index * 0.1 + 0.5}s both`
                }}
              >
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                  {link.label}
                </span>
                
                {/* Underline Effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></span>
                
                {/* Glow Effect */}
                <span className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-lg blur-xl transition-all duration-500"></span>
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center space-y-2">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto"></div>
          <p className="text-sm text-gray-500 tracking-wide">
            Copyright © 2025 <span className="text-white font-semibold">Sayed Elgohary</span>. All Rights Reserved.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;