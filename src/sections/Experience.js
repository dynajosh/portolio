import React, { useState } from "react";

const WorkHistory = () => {
    const workExperiences = [
        {
          title: "Backend Engineer",
          company: "Doings Africa",
          startDate: "February 2023",
          endDate: "Present",
          contributions: {
            1: "Built and integrated APIs for currency conversion and transaction processing from third-party providers, ensuring scalability and high performance.",
            2: "Led the development of a custom user authentication and authorization system using JWT and OAuth.",
            3: "Implemented data modeling and database architecture using MongoDB and ensured data consistency and integrity.",
            4: "Collaborated with the frontend development team to design and develop efficient API endpoints that met project requirements and delivered expected features.",
            5: "Established continuous integration and deployment pipelines using Docker and AWS services.",
            6: "Supervised and mentored junior developers to ensure project deadlines were met and adhered to best software development practices."
          },
          description:
            "Developed and maintained the backend service for a fintech application focused on currency exchange using ExpressJS.",
        },
        {
          title: "Fullstack Engineer",
          company: "Gambit US",
          startDate: "November 2022",
          endDate: "February 2023",
          contributions: {
            1: "Designed and implemented RESTful APIs, integrating with multiple third-party services to provide seamless transaction processing and management.",
            2: "Built a scalable, fault-tolerant architecture that allowed for high availability and ensured the security of user data.",
            3: "Collaborated with frontend and QA teams to ensure timely delivery of features, as well as conducting code reviews and mentoring junior developers.",
            4: "Employed Postgresql for data management, helping to provide a scalable and reliable database solution for the platform.",
            5: "Established continuous integration and deployment pipelines using Docker and AWS services.",
          },
          description:
            "Led the backend development for a cryptocurrency-based gambling platform called Gambitt, using Express and Node.js.",
        },
        {
          title: "Frontend Engineer",
          company: "Tokenhouse Canada",
          startDate: "June 2022",
          endDate: "September 2022",
          description:
            "Developed web applications and dashboards for the sale of Cryptocurrency tokens using ReactJS, Typescript, and Tailwind CSS, with data stored in Fauna DB.",
        },
        {
            title: "Fullstack Developer",
            company: "Crowdbotics US",
            startDate: "January 2022",
            endDate: "Present",
            contributions: {
                1: "As a frontend developer, I developed responsive and functional parts of the CRM application and the loyalty-based E-commerce platform using ReactJS and Tailwind CSS for styling. I took a DRY approach to building the CRM application, creating reusable components utilized throughout the project.",
                2: "Managed the deployment and scaling of these applications on cloud service providers.",
              },
            description:
              "As a backend developer, I developed scalable endpoints for a CRM application using Django Rest Framework. Additionally, I built a travel and vacation platform, where I integrated third-party APIs to enhance its robust features. I also developed efficient endpoints for a loyalty-based E-commerce platform using Django Rest Framework.",
          },
          {
            title: "Fullstack Developer",
            company: "Xblitz Agency",
            startDate: "November 2021",
            endDate: "January 2022",
            contributions: {
                1: "Improved the application's scalability by implementing efficient data structures and algorithms, leading to a 25% reduction in response time during peak traffic",
                2: "Implemented an AI-powered matching algorithm to match cleaners with clients based on proximity and service requirements, resulting in a 30% increase in the number of successful matches",
                3: "Integrated a payment gateway and implemented a secure user authentication system using Python, ensuring safe and secure transactions",
                4: "Conducted unit testing and debugging using Python and Selenium, resulting in a 40% reduction in the number of bugs reported by users",
                5: "Collaborated with a cross-functional team of developers, designers, and business analysts to deliver the project within the specified timeline and budget constraints"


              },
            description:
              "Developed the web application for HelpClean, a service that connected cleaners with clients within a specific geographical area, using Python and Django framework",
          },
          {
            title: "Frontend Engineer",
            company: "Onebridge",
            startDate: "November 2021",
            endDate: "January 2022",
            contributions: {
                1: "Developed the frontend adapter for a Fintech application, connecting mobile applications to a web app, by leveraging window injections to inject data sent from the mobile app to the web adapter",
                2: "Improved user experience by implementing real-time data synchronization between mobile and web applications, reducing latency and improving reliability",
                3: "Worked closely with the backend team to ensure seamless integration of the frontend adapter with the existing backend systems, resulting in a 20% reduction in integration time",
                4: "Conducted performance testing and optimization, resulting in a 30% improvement in application load time and a 15% reduction in server response time",
                5: "Created a detailed documentation and provided training to the development team, resulting in a more streamlined and efficient development process"


              },
            description:
              "Developed the web application for HelpClean, a service that connected cleaners with clients within a specific geographical area, using Python and Django framework",
          },
          {
            title: "Frontend Engineer",
            company: "Aorthar Design Agency",
            startDate: "November 2020",
            endDate: "January 2022",
            contributions: {
                1: "Optimized the performance of web applications by 20% through effective use of caching and code optimization techniques",
                2: "Developed and implemented a new component library for frequently used UI elements, resulting in a 30% reduction in development time and improved consistency across applications",
              },
            description:
              "Built and delivered high-quality, responsive frontend web applications using React JavaScript and WordPress, working closely with in-house designers to ensure the designs were implemented accurately",
          },
      ];

  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(-1);

  return (
    <div className="bg-[#0B0705] py-[100px] w-full max-w-[1300px]">
      <div className="container mx-auto px-[30px]">
        <h2 className="text-3xl font-bold mb-4 text-white">Work History</h2>
        <div className="space-y-8">
          {workExperiences.map((experience, index) => (
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4" key={index}>
              <div className="md:w-1/3 text-left md:text-left">
                <p className="text-xl font-semibold text-white">{experience.title}</p>
                <p className="text-gray-600">{experience.company}</p>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600">{experience.startDate} - {experience.endDate}</p>
                <p className="my-4 text-white">{experience.description}</p>
                {experience.contributions && (
                  <>
                    <button
                      className="bg-white text-black px-4 py-2 mb-2"
                      onClick={() => setSelectedExperienceIndex(selectedExperienceIndex === index ? -1 : index)}
                    >
                      {selectedExperienceIndex === index ? "Hide Contributions" : "Show Contributions"}
                    </button>
                    {selectedExperienceIndex === index && (
                      <ul className="list-disc pl-4">
                        {Object.values(experience.contributions).map((contribution, index) => (
                          <li key={index} className="text-white">{contribution}</li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
