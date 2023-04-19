import Pill from "../components/Pill"
import WorkHistory from "../sections/Experience"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"

export default function Home() {
    return (
     <div className="bg-[#f3f4f6] min-h-screen flex flex-col items-center">
        <div className="w-full max-w-[1300px] py-[140px] px-[25px]">
            <div>
                <h1 className=" font-bold text-[35px] lwafing md:text-[50px] mb-[0px]">Joshua Osaro Oriakhi</h1>
                <h4 className="text-[25px]">Fullstack developer</h4>
                <p className="max-w-[600px] text-[14px] md:text-[18px] my-[20px]">I am a detail-oriented software engineer with 7+ years of experience in web development and 5 years of experience in software programming in the following industries:</p>
                <div className="flex flex-wrap mb-[20px]">
                    <Pill 
                        text="E-commerce"
                        bgColor="#3B82F6"
                    />
                    <Pill 
                    text="Fintech"
                    bgColor="#10B981"
                    />
                    <Pill 
                    text="Cryptocurrency"
                    bgColor="#14B8A6"
                    />
                    <Pill 
                    text="Gambling"
                    bgColor="#FBBF24"
                    />
                </div>
                <Skills />
           
            </div>
        </div>
        <div className="bg-black w-[100%] flex flex-col items-center">
            <WorkHistory />
        </div>
        <div className=" w-[100%] py-[100px] max-w-[1300px] px-[25px]">
            <Projects />
        </div>
        
     </div>
    )
  }