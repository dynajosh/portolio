import Pill from "../components/Pill.js";


const Skills = () => {
    return(
        <div>
            <div>
                <h1 className="text-[25px] md:text-[40px] mb-[20px]">Skills</h1>
            </div>
            <div className="flex flex-wrap">
                <Pill 
                    text="Python"
                    bgColor="#3B82F6"
                />
                 <Pill 
                text="JavaScript"
                bgColor="#10B981"
                />
                <Pill 
                text="Typescript"
                bgColor="#14B8A6"
                />
                <Pill 
                text="Django"
                bgColor="#FBBF24"
                />
                <Pill 
                text="Express"
                bgColor="#FBBF24"
                />
                <Pill 
                text="Fast API"
                bgColor="#FBBF24"
                />
                <Pill 
                text="ReactJS"
                bgColor="#FBBF24"
                />
                <Pill 
                text="AWS"
                bgColor="#FBBF24"
                />
                <Pill 
                text="GCP"
                bgColor="#FBBF24"
                />
                <Pill 
                text="REST API"
                bgColor="#FBBF24"
                />
                <Pill 
                text="GraphQL"
                bgColor="#FBBF24"
                />
                <Pill 
                text="Tailwind CSS"
                bgColor="#FBBF24"
                />
            </div>
        </div>
    )
}

export default Skills;