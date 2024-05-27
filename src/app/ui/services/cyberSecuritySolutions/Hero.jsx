import React from "react";
import CyberSecurity from "/public/assets/services/CyberSecurity/cs2.jpg";
import CheckLogo from "/public/assets/services/CyberSecurity/check.png";
import About from "/public/assets/services/CyberSecurity/about3.jpg";
import Image from "next/image";
import Link from "next/link";
function Hero() {
  const sections = [
    {
      id: 1,
      title: "Identify Assets",
      description:
        "Catalog all critical hardware, software, data, and personnel.",
    },
    {
      id: 2,
      title: "Identify Threats",
      description:
        "Recognize potential threats like malware, phishing, and insider attacks.",
    },
    {
      id: 3,
      title: "Assess Vulnerabilities",
      description: "Identify weaknesses that could be exploited by threats.",
    },
    {
      id: 4,
      title: "Analyze Risks",
      description:
        "Evaluate the potential impact and likelihood of threats exploiting vulnerabilities.",
    },
    {
      id: 5,
      title: "Develop Risk Mitigation Strategies",
      description: "Create plans to reduce identified risks.",
    },
    {
      id: 6,
      title: "Establish Security Policies",
      description:
        "Define rules for acceptable use, access controls, and data protection.",
    },
    {
      id: 7,
      title: "Implement Continuous Monitoring",
      description: "Monitor systems in real-time for security events.",
    },
    {
      id: 8,
      title: "Prepare an Incident Response Team",
      description: "Establish a team to respond to security incidents.",
    },
    {
      id: 9,
      title: "Recover Systems and Data",
      description: "Restore affected systems and data to normal operations.",
    },
    {
      id: 10,
      title: "Ensure Regulatory Compliance",
      description: "Meet relevant laws, regulations, and standards.",
    },
  ];

  return (
    <section className="">
      {/* section1 */}
      <div className="relative w-full pt-16 ">
        <Image
          src={CyberSecurity}
          alt=""
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex pt-52 w-1/2">
          <div>
            <span>
              <h1 className="text-white md:text-5xl text-xl font-extrabold   pl-6 py-4">
                Cyber Security Solutions{" "}
              </h1>
              <p className="md:text-lg text-base text-white pl-6 pt-2 pb-4">
                Explore a full suite of advanced Cyber Security Solutions
                designed specifically to meet your unique requirements. Our
                comprehensive services strengthen your defenses and provide
                robust protection, ensuring your organization remains secure
                against a constantly evolving landscape of cyber threats.
                Safeguard your critical assets and maintain peace of mind with
                our state-of-the-art security measures and proactive threat
                management strategies.
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* section2 */}
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-lg font-bold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Our Services
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{" "}
            What we do for your Cyber Security Solution?
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            We provide comprehensive cybersecurity solutions, including threat
            detection, risk assessment, data encryption, and incident response,
            to ensure the safety and integrity of your digital assets.
          </p>
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
          <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 text-lg font-semibold leading-5">
                Malware Protection
              </h6>
              <p className="text-sm text-gray-900">
                Malware Protection services safeguard systems by detecting,
                preventing, and removing malicious software. Utilizing advanced
                tools and real-time monitoring, these services protect against
                viruses, spyware, ransomware, and other malware threats,
                ensuring the integrity and security of digital assets.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5 text-lg ">
                Sewer Protection
              </h6>
              <p className="text-sm text-gray-900">
                Sewer Protection services safeguard critical infrastructure by
                implementing advanced monitoring, threat detection, and incident
                response strategies to ensure the security and integrity of
                wastewater treatment facilities.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 text-lg font-semibold leading-5">
                Computer Security
              </h6>
              <p className="text-sm text-gray-900">
                Our Computer Security services protect systems from unauthorized
                access, cyber threats, and data breaches. We offer antivirus
                protection, firewall management, encryption, and regular
                security audits to ensure the integrity, confidentiality, and
                availability of your digital assets.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 text-lg font-semibold leading-5">
                Vulnerability Assessment
              </h6>
              <p className="text-sm text-gray-900">
                Comprehensive Vulnerability Assessment services identify
                weaknesses in systems and networks through thorough scans and
                evaluations. This proactive approach helps to mitigate potential
                threats and enhance overall security posture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section3 */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block"></span> Workflow of Cyber
            Security
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Discover comprehensive Cyber Security Solutions tailored to your
            needs, fortifying your defenses and shielding your organization from
            evolving threats
          </p>
        </div>
        <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2 py-4 px-6">
          <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
            <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
          </div>
          {sections.map((item) => (
            <div
              key={item.id}
              className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-lg font-bold leading-5">{item.title}</p>
                <p className="flex items-center justify-center w-8 h-8 font-bold rounded text-deep-purple-accent-400">
                  {item.para}
                </p>
              </div>
              <p className="text-sm text-gray-900">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* section4 */}
      <div className=" w-full  flex md:flex-col flex-col-1 ">
        <div className="w-full py-4">
          <p className=" md:text-4xl text-xl text-black font-extrabold text-center ">
            This is 24/7 Cyber Security Operation Center for your problem
            solution
          </p>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 px-6  flex items-center justify-center">
            <Image src={About} alt="" className="w-full h-[80%] " />
          </div>
          <div className="w-1/2 flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row">
                <div className="w-1/2 bg-gray-300 rounded overflow-hidden shadow-lg mx-4 hover:shadow-xl transition duration-300">
                  <div className="px-6 py-6">
                    <div className="flex items-center mb-4">
                      <Image src={CheckLogo} alt="" className="w-7 h-7 mr-2" />
                      <div className="font-bold text-xl text-black">
                        Identifying Threats
                      </div>
                    </div>
                    <p className="text-black text-base">
                      Our company specializes in identifying threats by
                      employing advanced monitoring techniques and proactive
                      security measures, ensuring comprehensive protection for
                      our clients' digital assets
                    </p>
                  </div>
                </div>
                <div className="w-1/2 bg-gray-300  rounded overflow-hidden shadow-lg mx-4 hover:shadow-xl transition duration-300">
                  <div className="px-6 py-6">
                    <div className="flex items-center mb-4">
                      <Image src={CheckLogo} alt="" className="w-7 h-7 mr-2" />
                      <div className="font-bold text-xl text-black">
                        Security Management
                      </div>
                    </div>
                    <p className="text-black text-base">
                      Our company specializes in Security Management, offering
                      comprehensive solutions for safeguarding digital assets
                      through proactive monitoring and strategic security
                      measures
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-2/3 bg-gray-300  rounded overflow-hidden shadow-lg mx-4 hover:shadow-xl transition duration-300">
                  <div className="px-6 py-6">
                    <div className="flex items-center mb-4">
                      <Image src={CheckLogo} alt="" className="w-7 h-7 mr-2" />
                      <div className="font-bold text-xl text-black">
                        Security Services
                      </div>
                    </div>
                    <p className="text-black text-base">
                      Our company specializes in Security Management, offering
                      comprehensive solutions for safeguarding digital assets
                      through proactive monitoring and strategic security
                      measures
                    </p>
                  </div>
                </div>
                <div className="w-2/3 bg-gray-300  rounded overflow-hidden shadow-lg mx-4 hover:shadow-xl transition duration-300">
                  <div className="px-6 py-6">
                    <div className="flex items-center mb-4">
                      <Image src={CheckLogo} alt="" className="w-7 h-7 mr-2" />
                      <div className="font-bold text-xl text-black">
                        Industry Certified
                      </div>
                    </div>
                    <p className="text-black text-base">
                      Our company specializes in Security Management, offering
                      comprehensive solutions for safeguarding digital assets
                      through proactive monitoring and strategic security
                      measures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
