const projects = [
    {
        imageSrc: "hfhfhf",
        title: "Student Register",
        description: "sebebebebebebebee",
        githubLink: "github.com",
        liveViewLink: "goal.com"
    },
    {
        imageSrc: "hfhfhf",
        title: "Watchdawg",
        description: "sebebebebebebebee",
        githubLink: "github.com",
        liveViewLink: "https://watchdawg.app"
    },
    {
        imageSrc: "hfhfhf",
        title: "Student Register",
        description: "sebebebebebebebee",
        githubLink: "github.com",
        liveViewLink: "goal.com"
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


const Projects  = () => {
    return(
        <div>
            <div>
            <h1 className="text-[50px] mb-[40px]">Projects</h1>
            </div>
            <div className="flex flex-col gap-[20px] md:flex-row">
                {
                    projects.map((project)=>(
                        <ProjectCard 
                            imageSrc={project.imageSrc}
                            title={project.title}
                            description={project.description}
                            githubLink = {project.githubLink}
                            liveViewLink = {project.liveViewLink}
                        />
                    ))
                }

            </div>
        </div>
    )
        
}

export default Projects;