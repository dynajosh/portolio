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
  ];

  const [showContributions, setShowContributions] = useState(false);



  return (
    <div className="bg-black py-[100px] w-full max-w-[1300px]">
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
                <p className="my-2 text-white">{experience.description}</p>
                {experience.contributions && (
                  <>
                    <button
                      className="bg-white text-black px-2 py-1 rounded-md mb-2"
                      onClick={() => setShowContributions(!showContributions)}
                    >
                      {showContributions ? "Hide Contributions" : "Show Contributions"}
                    </button>
                    {showContributions && (
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
