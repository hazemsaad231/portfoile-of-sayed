import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { skills } from '../Data/data';



const education = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "University of Menoufia", 
    year: "2020 - 2024",
    description: "Focused on software engineering, algorithms, and database systems"
  }
];

export default  function About() {
  const [activeTab, setActiveTab] = useState('skills');
  
  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' }
  ];

  return (
    <section className="min-h-screen py-20" id="about">
      <div className="mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 
   className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold inline-block"
   style={{ WebkitTextFillColor: "transparent" }}>
  About Me <span className='w-4 h-4 bg-primary inline-block rounded-full'></span>
  </h1>
        </motion.div>

        <div className="flex flex-col justify-center items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-primary font-semibold">Sayed</span>, a backend developer specialized in Laravel, 
                with experience in building secure, scalable, and high performance server side applications.
              </p>
              <p>
                I have worked on developing robust APIs, authentication systems, and dynamic web applications 
                that power modern front-end experiences.
              </p>
              <p>
                I focus on optimizing databases, ensuring application security, and enhancing overall system performance.
              </p>
            </div>
          </motion.div>

          {/* Skills & Education Section with Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Tab Navigation */}
            <div className="flex gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative text-xl font-semibold cursor-pointer transition-all duration-300 ease-in-out pb-2 ${
                    activeTab === tab.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 bottom-0 h-0.5 w-full bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                {activeTab === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap gap-3"
                  >
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover-elevate cursor-pointer select-none transition-all duration-200"
                      >
                        <span className="font-medium text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'education' && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {education.map((edu, index) => (
                      <motion.div
                        key={edu.degree}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-card rounded-lg p-6 border border-card-border hover-elevate"
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <GraduationCap className="w-6 h-6 text-primary" />
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-card-foreground mb-1">
                              {edu.degree}
                            </h3>
                            
                            <div className="flex items-center gap-2 text-muted-foreground mb-2">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{edu.institution}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-muted-foreground mb-3">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{edu.year}</span>
                            </div>
                            
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {edu.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}