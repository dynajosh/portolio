import Pill from "../components/Pill"
import WorkHistory from "../sections/Experience"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"
import { IndustryPill } from "../components/Pill"

export default function Home() {
    return (
     <div className="bg-[#FFC3C9] min-h-screen flex flex-col items-center">
        <div className="w-full max-w-[1300px] py-[140px] px-[25px]">
            <div>
                <h1 className=" font-bold text-[35px] lwafing md:text-[170px] mb-[0px]">Joshua Oriakhi</h1>
                <h4 className="text-[25px] font-bold">Backend Engineer</h4>
                <p className="max-w-[600px] text-[14px] md:text-[18px] my-[20px]">I am a detail-oriented software engineer with 7+ years of experience in web development and 5 years of experience in software programming in the following industries:</p>
                <div className="flex flex-wrap mb-[20px]">
                    <IndustryPill 
                        text="E-commerce"
                    />
                    <IndustryPill 
                    text="Fintech"
                    />
                    <IndustryPill 
                    text="Cryptocurrency"
                    />
                    <IndustryPill 
                    text="Gambling"
                    />
                </div>
                <Skills />
           
            </div>
        </div>
        <div className="bg-[#0B0705] w-[100%] flex flex-col items-center">
            <WorkHistory />
        </div>
        <div className=" w-[100%] py-[100px] max-w-[1300px] px-[25px]">
            <Projects />
        </div>
        
     </div>
    )
  }