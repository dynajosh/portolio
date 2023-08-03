const projects = [
    {
        imageSrc: "/images/gambit.jpg",
        title: "Gambit",
        description: "Backend Engineering on a cryptocurrency based peer to peer gambling platform using NodeJS, Postgresql, AWS and Docker",
        githubLink: "github.com",
        liveViewLink: "https://usegambit.com"
    },
    {
        imageSrc: "/images/watchdawg.jpg",
        title: "Watchdawg",
        description: "Fullstack Engineering on a Movie Reminder app that lets users never miss a movie using Django Rest Framework, and ReactJS",
        githubLink: "github.com",
        liveViewLink: "https://watchdawg.app"
    },
    {
        imageSrc: "/images/doings.jpg",
        title: "Doings Exchange",
        description: "Fullstack Engineering on a Currency Exchange Platform using NodeJS, NextJS, MongoDB, AWS and Docker",
        githubLink: "github.com",
        liveViewLink: "https://doings.africa"
    },
    {
      imageSrc: "/images/darkdesires.jpg",
      title: "Dark Desires",
      description: "An outlet for people to share their desires and wants anonynously. Built with Django Rest Framework, Postgresql and ReactJS",
      githubLink: "github.com",
      liveViewLink: "https://darkdesires.live"
  },
]


const ProjectCard = ({ imageSrc, title, description, githubLink, liveViewLink }) => {
    return (
      <div className="w-full  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex flex-col">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover " src={imageSrc} alt={title} />
          </div>
          <div className="p-8">
            <div className=" tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
            <p className="mt-2 text-gray-500">{description}</p>
            <div className="mt-4 flex space-x-[10px]">
              <a href={githubLink}>
                <img src="/github.svg" className="w-[25px] h-[25px] cursor"/>
              </a>
              <a href={liveViewLink} className="text-indigo-500 hover:text-indigo-600">
                <img src="/web.png" className="w-[25px] h-[25px] cursor"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };


  const Projects = () => {
    return (
        <div>
            <div>
                <h1 className="text-[50px] mb-[40px]">Proof of work</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    projects.map((project) => (
                        <ProjectCard 
                            imageSrc={project.imageSrc}
                            title={project.title}
                            description={project.description}
                            githubLink={project.githubLink}
                            liveViewLink={project.liveViewLink}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;