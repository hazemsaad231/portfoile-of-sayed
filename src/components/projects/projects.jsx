import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { webApps, mobileApps } from '../Data/data';




export default function Projects() {
  const [activeTab, setActiveTab] = useState('web');
  const [expanded, setExpanded] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const tabs = [
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone }
  ];

  const currentProjects = activeTab === 'web' ? webApps : mobileApps;

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset slide when changing tabs
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab]);

  const maxSlide = Math.max(0, currentProjects.length - slidesPerView);

  const handleExpandClick = (id) => {
    setExpanded(prev => prev === id ? null : id);
  };

  const handleImageChange = (projectId, index) => {
    setCurrentImageIndex(prev => ({ ...prev, [projectId]: index }));
  };

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-24 min-h-screen" id="projects">
      <div className="container mx-auto p-3 md:p-8  max-w-7xl">
        {/* Header */}
        <div className="text-center w-full my-10">
<h1 
 className="bg-gradient-to-r from-primary to-white bg-clip-text pb-4 text-transparent text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold inline-block"

   style={{ WebkitTextFillColor: "transparent" }}
  >
  Projects <span className='w-4 h-4 bg-primary inline-block rounded-full'></span>
  </h1>
</div>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="flex justify-center mb-12"
        >
          <div className="flex gap-2 bg-slate-800/50 p-1.5 rounded-full backdrop-blur-sm border border-slate-700">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <Icon className="w-5 h-5 relative z-10" />
                  <span className="font-medium relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Slider Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-0 md:gap-4"
                animate={{
                  x: `-${currentSlide * (100 / slidesPerView)}%`
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                {currentProjects.map((project) => {
                  const images = Array.isArray(project.images) ? project.images : [project.img];
                  const activeImageIndex = currentImageIndex[project.id] || 0;
                  
                  return (
                    <motion.div
                      key={project.id}
                      className="flex-shrink-0"
                      style={{ width: `calc(${100 / slidesPerView}% - ${(slidesPerView - 1) * 24 / slidesPerView}px)` }}
                    >
                      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group h-full flex flex-col">
                        {/* Image Section with Multiple Images */}
                        <div className="relative h-56 overflow-hidden bg-slate-900">
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={activeImageIndex}
                              src={images[activeImageIndex]}
                              alt={`${project.title}`}
                              className="w-full h-full object-center"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              loading="lazy"
                            />
                          </AnimatePresence>
                          
                          {/* Image indicators if multiple images */}
                          {images.length > 1 && (
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                              {images.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleImageChange(project.id, idx)}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    idx === activeImageIndex 
                                      ? 'bg-primary w-6' 
                                      : 'bg-white/50 hover:bg-white/75'
                                  }`}
                                  aria-label={`View image ${idx + 1}`}
                                />
                              ))}
                            </div>
                          )}
                          
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary/60 transition-colors">
                            {project.title}
                          </h3>
                          
                          {/* Live Demo Button */}
                          {project.link && (
                            <button 
                              onClick={() => window.open(project.link, '_blank')}
                              className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary/20 text-white rounded-lg transition-colors duration-200 font-medium"
                            >
                              <Globe className="w-4 h-4" />
                              Live Demo
                            </button>
                          )}

                          {/* Expand Button */}
                          <button
                            onClick={() => handleExpandClick(project.id)}
                            className="mt-4 flex items-center justify-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm"
                          >
                            <span>Details</span>
                            <motion.div
                              animate={{ rotate: expanded === project.id ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </motion.div>
                          </button>

                          {/* Collapsible Content */}
                          <AnimatePresence>
                            {expanded === project.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-4 pt-4 border-t border-slate-700">
                                  <p className="text-slate-300 text-sm mb-3">
                                    {project.description}
                                  </p>
                                  {Array.isArray(project.skills) && project.skills.length > 0 && (
                                    <div>
                                      <p className="text-slate-400 text-xs font-semibold mb-2">Technologies:</p>
                                      <div className="flex flex-wrap gap-2">
                                        {project.skills.map((skill, idx) => (
                                          <span
                                            key={idx}
                                            className="px-2.5 py-1 bg-slate-700/50 text-blue-400 rounded-md text-xs border border-slate-600"
                                          >
                                            {skill}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            {currentProjects.length > slidesPerView && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-10 w-10 h-10 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700 flex items-center justify-center transition-all ${
                    currentSlide === 0
                      ? 'opacity-30 cursor-not-allowed'
                      : 'hover:bg-primary hover:border-primary'
                  }`}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentSlide === maxSlide}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-10 w-10 h-10 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700 flex items-center justify-center transition-all ${
                    currentSlide === maxSlide
                      ? 'opacity-30 cursor-not-allowed'
                      : 'hover:bg-primary hover:border-primary'
                  }`}
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Pagination Dots */}
            {currentProjects.length > slidesPerView && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxSlide + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentSlide
                        ? 'bg-primary w-8'
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}