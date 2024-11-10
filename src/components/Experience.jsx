import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from './Footer';
import { upcomingEvents, pastEvents } from '../constants'; // Import events from constants

// Import event icon from src/assets
import eventIcon from '../assets/calendar-icon.png'; // Adjust path based on your structure

const Experience = () => {
  return (
    <div
      className="experience bg-black w-screen text-white pt-4 pt-16 overflow-x-hidden"
      id="experience"
    >
      <div className="pt-12 sm:px-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">
          Upcoming Events
        </h2>
      </div>

      {/* Upcoming Events */}
      <VerticalTimeline className="mt-9">
        {upcomingEvents.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className="relative vertical-timeline-element--work"
            contentStyle={{
              background: "#151030",
              color: "#fff",
              borderRadius: "8px",
              padding: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={event.date}
            iconStyle={{
              background: "#4A5568",
              color: "#fff",
              borderRadius: "50%",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
            icon={
              <a
                className="flex justify-center items-center w-full h-full"
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={eventIcon} // Using the imported event icon
                  alt={event.title}
                  className="w-[50%] h-[50%] object-contain"
                />
              </a>
            }
          >
            <div>
              <h3 className="text-white text-[24px] font-bold">
                {event.title}
              </h3>
              <p
                className="text-gray-400 text-[16px] font-semibold mb-4 "
                style={{ margin: 0 }}
              >
                {event.description}
              </p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {/* Past Events */}
      <div className="pt-12 sm:px-16 text-center">
        {/* <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>About Us</h2> */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">
          Past Events
        </h2>
      </div>
      <VerticalTimeline className="mt-9">
        {pastEvents.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className="relative vertical-timeline-element--work"
            contentStyle={{
              background: "#2D2F3B",
              color: "#fff",
              borderRadius: "8px",
              padding: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={event.date}
            iconStyle={{
              background: "#4A5568",
              color: "#fff",
              borderRadius: "50%",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
            }}
            icon={
              <a
                className="flex justify-center items-center w-full h-full"
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={eventIcon} // Using the imported event icon
                  alt={event.title}
                  className="w-[50%] h-[50%] object-contain"
                />
              </a>
            }
          >
            <div>
              <h3 className="text-white text-[24px] font-bold">
                {event.title}
              </h3>
              <p
                className="text-gray-400 text-[16px] font-semibold mb-10 pb-5"
                style={{ margin: 0 }}
              >
                {event.description}
              </p>
              <div>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-red-300 border border-gray-200 rounded-lg shadow p-2 hover:text-green-500 duration-300 transition-colors"
                >
                  More Info
                </a>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Experience;
