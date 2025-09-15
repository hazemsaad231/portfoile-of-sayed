import { useState } from "react";
import { motion } from "framer-motion";
import { mobileApps } from "../Data/data";
import webApps from "../Data/data";
import Card from "@mui/material/Card";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";



const Projects = () => {
  const [active, setActive] = useState("web");
  const [isWeb, setIsWeb] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = (type) => {
    setActive(type);
    if (type === "web") {
      setIsWeb(true);
      setIsMobile(false);
    } else if (type === "mobile") {
      setIsWeb(false);
      setIsMobile(true);
    }
  };

  const renderProjects = (data) => (
    <motion.div
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={3}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              sx={{
                maxWidth: isMobile ? "300px" : "400px",
                bgcolor: "#1e1e1e",
                margin: "auto",
                border: "1px solid #444444",
                borderRadius: "20px",
                padding: "20px",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[300px] object-center rounded-xl"
                />

                <motion.div className="flex flex-col justify-center items-center gap-1 mt-2">
                  <motion.h1
                    className="text-2xl text-white font-bold"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h1>

                  <motion.p
                    className="text-gray-400 text-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {item.description}
                  </motion.p>

                  <button className="border-2 border-[#444444] text-white px-4 py-2 mt-1 rounded-xl">
                    <a href={item.link}>Live Demo</a>
                  </button>
                </motion.div>
              </motion.div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );

  return (
    <div className="py-20" id="projects">
      {/* Title */}
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent text-5xl font-bold">
          Projects{" "}
          <span className="w-4 h-4 bg-primary inline-block rounded-full"></span>
        </h1>

        {/* Toggle Tabs */}
        <ul className="flex gap-4 p-2 mt-4 text-white text-xl cursor-pointer">
          <li
            className={`${
              active === "web"
                ? "bg-gradient-to-r from-primary to-white transform scale-125 transition-all duration-700 w-24 p-1 text-center rounded-full"
                : "bg-gradient-to-r from-[#8750f7] to-white w-24 text-center rounded-full"
            }`}
            onClick={() => handleToggle("web")}
          >
            Web
          </li>
          <li
            className={`${
              active === "mobile"
                ? "bg-gradient-to-r from-primary to-white transform scale-125 transition-all duration-700 w-24 p-1 text-center rounded-full"
                : "bg-gradient-to-r from-[#8750f7] to-white w-24 text-center rounded-full"
            }`}
            onClick={() => handleToggle("mobile")}
          >
            Mobile
          </li>
        </ul>
      </div>

      {/* Render Projects */}
      <div className="flex flex-col justify-center items-center p-4 md:p-8">
        {isWeb && renderProjects(webApps)}
        {isMobile && renderProjects(mobileApps)}
      </div>
    </div>
  );
};

export default Projects;
