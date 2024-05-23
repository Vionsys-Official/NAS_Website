import React from 'react'
import Model from '@/app/ui/career/model';

const ApplyCard = () => {
  const cards=[
    {
      id:1,
      title:"Software Engineer",
      responsibility:"As a Software Engineer, you will be responsible for designing, developing, and maintaining high-quality software applications. You will collaborate closely with cross-functional teams, including product managers, designers, and other engineers, to define and implement new features. Your role involves writing clean, scalable, and maintainable code, participating in code reviews to ensure quality, and troubleshooting and resolving software defects and performance issues.",
      Education:"Bachelor’s degree in Computer Science, Software Engineering, or a related field.",
      department:"Engineering",
      location:"Kharadi, Pune",

    },
    {
      id:2,
      title:"Web Developer",
      responsibility:"As a Web Developer, you will design, develop, and maintain user-friendly, responsive, and visually appealing web applications and websites.Your role involves writing clean, efficient, and well-documented code, optimizing web applications for speed and performance, and developing and implementing new features based on project requirements and user feedback.",
      Education:"Bachelor’s degree in Computer Science, Software Engineering, or a related field.",
      department:"Engineering",
      location:"Kharadi, Pune",

    },
    {
      id:3,
      title:"Product Manager",
      responsibility:"As a Product Manager,Your responsibilities will encompass a wide range of tasks, from defining the product vision and strategy to collaborating with cross-functional teams throughout the product lifecycle. You'll work closely with stakeholders, including customers, sales, and engineering teams, to gather requirements and prioritize features. Effective communication will be essential as you articulate product plans, progress, and results to stakeholders at all levels of the organization, ensuring alignment and managing expectations.",
      Education:"Bachelor’s degree in Computer Science, Software Engineering, or a related field.",
      department:"Product",
      location:"Kharadi, Pune",

    },
    {
      id:4,
      title:"UX/UI Designer",
      responsibility:"As a UX/UI Designer, you will be responsible for creating user-centered designs by developing wireframes, prototypes, and high-fidelity mockups that align with user needs and business goals. You will conduct user research and usability testing to gather insights and validate design decisions, ensuring that your designs are responsive and optimized for various devices and platforms.",
      Education:"Bachelor’s degree in Computer Science, Software Engineering, or a related field.",
      department:"Design",
      location:"Kharadi, Pune",

    },
    {
      id:5,
      title:"Data Scientist",
      responsibility:"As a Data Scientist, you will be responsible for analyzing large and complex datasets to extract actionable insights that drive business decisions. You will develop predictive models and machine learning algorithms to solve business problems and enhance our products. Collaborating closely with cross-functional teams, you will implement data-driven solutions and communicate your findings to both technical and non-technical stakeholders.",
      Education:"Bachelor’s degree in Computer Science, Software Engineering, or a related field.",
      department:"Data Science",
      location:"Kharadi, Pune",

    },
    {
      id:6,
      title:"DevOps Engineer",
      responsibility:"As a DevOps Engineer, you will be responsible for designing, implementing, and maintaining CI/CD pipelines to streamline the development and deployment processes. You will automate deployment and scaling processes, ensuring that our applications are running smoothly and efficiently. Collaborating closely with development and operations teams, you will optimize infrastructure, monitor system performance, and troubleshoot issues to ensure high availability and reliability.",
      Education:"Bachelor’s degree in Computer Science, Software Engineering, or a related field.",
      department:"Engineering",
      location:"Kharadi, Pune",

    },
    {
      id:7,
      title:"Network Engineer",
      responsibility:"As a Network Engineer, you will be responsible for designing, implementing, and maintaining our network infrastructure to ensure optimal performance and security. You will configure and manage network hardware and software, including routers, switches, firewalls, and load balancers. Your role involves monitoring network performance, troubleshooting issues, and providing timely resolutions to ensure minimal downtime.",
      Education:"Bachelor’s degree in Computer Science, Software Engineering, or a related field.",
      department:"IT Infrastructure",
      location:"Kharadi, Pune",
    },
    {
      id:8,
      title:"Database Administrator",
      responsibility:"As a Database Administrator, you will be responsible for installing, configuring, and maintaining our database systems to ensure optimal performance, security, and availability. You will manage database backups, recovery, and archiving processes, as well as monitor database performance and troubleshoot any issues that arise. Your role involves designing and implementing database schemas, optimizing queries, and ensuring data integrity and security.",
      Education:"Bachelor’s degree in Computer Science, Software Engineering, or a related field.",
      department:"IT Infrastructure",
      location:"Kharadi, Pune",
    }
  ]

  return (
    <div className='py-4 md:py-10'>
      <div className='flex flex-col items-center justify-center'>
        <div>
          <h2 className='text-center text-MainHeading-sm md:text-MainHeading font-bold py-2 md:py-6'>Job Opportunities For You</h2>
        </div>
        <div className='w-[90%] grid grid-col-1 md:grid-cols-2 items-center justify-center gap-2 md:gap-6'>
          {cards.map((feat)=>{
            return(
              <div key={feat.id} className='p-4 border border-black rounded-xl'>
                <div className='flex flex-col gap-2 h-full md:h-[87vh] lg:h-[73vh] xl:h-[52vh]'>
                  <h2 className='text-CardHeading-sm md:text-CardHeading font-bold md:py-4'>{feat.title}</h2>
                  <p className='text-Para-sm md:text-Para'>{feat.responsibility}</p>
                  <div className='text-SubHeading-sm md:text-SubHeading'><span className='font-bold'>Department</span>{feat.department}</div>
                  <div className='text-SubHeading-sm md:text-SubHeading'><span className='font-bold'>Education</span>{feat.Education}</div>
                  <div className='text-SubHeading-sm md:text-SubHeading'><span className='font-bold'>Location</span>{feat.location}</div>
                </div>
                <div className='flex items-center justify-center mt-2'>
                  <Model/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ApplyCard;