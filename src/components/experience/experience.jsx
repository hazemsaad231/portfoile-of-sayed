import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experience } from "../Data/data";

function Experience() {
  return (
    <div>
    <div className="py-8" id="experience">

<div className="text-center w-full my-10">
<h1 
   className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold inline-block"
   style={{ WebkitTextFillColor: "transparent" }}>
  Experience <span className='w-4 h-4 bg-primary inline-block rounded-full'></span>
  </h1>
</div>
    

      <VerticalTimeline lineColor="white">
      {experience.map((data, index) => (
        <VerticalTimelineElement
          date={data.Date}
          icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          contentStyle={{ background: "transparent" }}
          key={index}
        >
          
          <div>
          <h3 className="bg-gradient-to-t from-primary font-bold to-white bg-clip-text text-transparent text-xl">{data.company}</h3>
          <h4 className="bg-gradient-to-t from-primary to-white bg-clip-text text-transparent">{data.role}</h4>
          <ol className="pt-4 text-gray-300">
            <li>{data.text[0]}</li>
            <li>{data.text[1]}</li>
            <li>{data.text[2]}</li>
            <li>{data.text[3]}</li>
          </ol>
          </div>
          
        </VerticalTimelineElement>
))}
      </VerticalTimeline>
    </div>

    </div>
  );
}

export default Experience;