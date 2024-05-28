"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { SiMaterialformkdocs } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";

const CountUp = ({ end, duration, reset }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reset) {
      setCount(0);
      animateValue(0, end, duration * 1000, setCount);
    }
  }, [end, duration, reset]);

  const animateValue = (start, end, duration, callback) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      callback(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return <span>{count}</span>;
};

const SocialProofCounter = () => {
  const arr = [
    {
      id: 1,
      icon: <SiMaterialformkdocs size={35} />,
      count: 4,
      heading: "Years in Business",
    },
    {
      id: 2,
      icon: <FiUsers size={35} />,
      count: 30,
      heading: "Employees",
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher size={35} />,
      count: 12,
      heading: "Completed Projects",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="backdrop-blur-sm shadow-md">
      <section
        className="w-full md:px-16 px-4 py-10 flex justify-center items-center backdrop-blur-sm"
        ref={sectionRef}
      >
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-center items-center">
          {/* first section */}
          <motion.div
            initial={{ scale: 1.3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.2,
              scale: { type: "spring", stiffness: 30 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="lg:col-span-1 md:col-span-2 flex justify-center items-center"
          >
            <div className="md:w-72 w-full md:h-48 h-20 bg-golden4 flex justify-center items-center rounded-md">
              <h3 className="text-MainHeading font-bold text-blue-900 uppercase md:px-8">
                Highlights
              </h3>
            </div>
          </motion.div>

          {/* second section */}
          <div className="lg:col-span-3 md:col-span-2 flex justify-center items-center py-10">
            <div className="w-full flex flex-wrap gap-4 justify-center items-center px-2 lg:px-12">
              {arr.map((item) => (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    scale: { type: "spring", stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: "easeInOut",
                  }}
                  key={item.id}
                  className="relative bg-white flex flex-col gap-4 justify-center items-center border py-4 rounded-xl shadow-md shadow-gray2 overflow-hidden group cursor-pointer md:w-60 w-full h-48 align-content-center"
                >
                  <div className="relative z-10 bg-golden3 text-black p-3 rounded-full transition-all duration-500 group-hover:text-black">
                    {item.icon}
                  </div>
                  <div className="relative z-10 flex flex-col justify-center items-center">
                    <h5 className="text-2xl font-extrabold transition-all duration-500 group-hover:text-white text-black">
                      {isVisible ? (
                        <CountUp
                          end={item.count}
                          duration={1.5}
                          reset={isVisible}
                        />
                      ) : (
                        "0"
                      )}
                      {item.id === 4 ? "%" : "+"}
                    </h5>
                    <p className="text-subHeading font-semibold transition-all duration-500 group-hover:text-white text-black text-center">
                      {item.heading}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-blue-900 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialProofCounter;
