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
                    imgSrc="/icons/python.png"
                />
                 <Pill 
                text="JavaScript"
                imgSrc="/icons/js.png"
                />
                <Pill 
                text="Typescript"
                imgSrc="/icons/ts.webp"
                />
                <Pill 
                text="Django"
                imgSrc="/icons/django.png"
                />
                <Pill 
                text="Express"
                imgSrc="/icons/node.png"
                />
                <Pill 
                text="Fast API"
                imgSrc="/icons/fastapi.png"
                />
                <Pill 
                text="ReactJS"
                imgSrc="/icons/react.svg"
                />
                <Pill 
                text="AWS"
                imgSrc="/icons/aws.png"
                />
                <Pill 
                text="GCP"
                imgSrc="/icons/gcp.svg"
                />
            </div>
        </div>
    )
}

export default Skills;