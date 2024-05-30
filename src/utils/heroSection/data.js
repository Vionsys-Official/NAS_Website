import AboutUs from '/public/assets/aboutUs/about.jpg';
import Hero from '/public/assets/contact/Hero.jpg';
import head from '/public/assets/career/career.jpg';
import ServiceHero from '/public/assets/services/ServiceHero.jpg';
import indystresHero from '/public/assets/industries/myIndustriesHero.jpg';
import Button from '@/components/ui/Button';
import Linkbutton from '@/components/ui/Linkbutton';

export const careerData = 
  {
    content: {
        image:head,
        heading: "Unlock Your Talent",
        title:
          "Diverse Software Careers Await",
          button:<Linkbutton/>,
    },
};
export const aboutData = 
  {
    content: {
        image:AboutUs,
        heading: "Transform Your Ideas Into Reality",
        title:
          "Ready to take your IT solutions to the next level?",
        button:<Button/>,
    },
};
export const contactData = 
{
  content: {
    image: Hero,
    heading: "Shape the Future with Us",
    title: "Join Our Innovative Team at NAS Infotech",
    
  },
};
export const servicesData = 
  {
    content: {
        image:ServiceHero,
        heading: "Innovative Software Services for Modern Enterprises",
        title:
          "Explore our services",
          button:<Button/>,
    },
};
export const industriesData = 
  {
    content: {
        image:indystresHero,
        heading: "Innovating Across Sectors: Transforming Industries with Technology",
        title:
          "Explore Our Industry-Specific Expertise",
          button:<Button/>,
    },
};
