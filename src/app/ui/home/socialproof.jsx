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
    <div className="md:backdrop-blur-sm shadow-md overflow-hidden">
      <section
        className="w-full md:px-16 px-4 pt-5 flex justify-center items-center backdrop-blur-sm bg-slate-200"
        ref={sectionRef}
      >
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-6 gap-2 justify-center items-center">
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
            {/* Heading */}
            <div className="md:w-72 w-full md:h-48 h-20 bg-golden4 flex justify-center items-center rounded-md">
              <h3
                className="md:text-MainHeading text-MainHeading-sm text-blue2 font-extrabold rounded-xl bg-white shadow-lg
              py-4 uppercase md:px-8 w-full md:w-auto text-center"
              >
                Highlights
              </h3>
            </div>
          </motion.div>

          {/* second section */}
          <div className="lg:col-span-3 md:col-span-2 flex justify-center items-center py-10">
            <div className="w-full flex md:flex-row flex-col gap-4 justify-center items-center px-2 lg:px-12">
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
                  className="relative bg-white flex flex-col gap-4 justify-center items-center border py-4 rounded-xl shadow-2xl shadow-gray2 overflow-hidden group cursor-pointer md:w-52 lg:w-60 w-full h-48 align-content-center"
                >
                  <div className="relative z-10 bg-golden3 text-blue2 rounded-full transition-all duration-500 group-hover:text-black">
                    {item.icon}
                  </div>
                  <div className="relative z-10 flex flex-col justify-center items-center gap-1">
                    <h5 className="text-3xl font-extrabold transition-all duration-500 group-hover:text-black text-black">
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
                    <p className="text-subHeading font-semibold transition-all duration-500 group-hover:text-black text-black text-center">
                      {item.heading}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-green2 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
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
