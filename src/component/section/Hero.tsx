import { words } from "@/constants"
import Image from "next/image"
import Button from "../Button"
import HeroExperience from "../HeroModels/HeroExperience"
import AnimatedCounter from "../AnimatedCounter"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
const Hero = () => {
    useGSAP(()  =>{
        gsap.fromTo('.hero-text h1',{
            y: 50,
            opacity:0,
        },{
            y:0,
            opacity:1,
            duration:1,
            stagger:0.2,
            ease: 'power1.inOut'
        },)
    })
  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <Image
                src={"/Images/bg.png"}
                alt="Background Image"
                width={1920}
                height={1080}
                />
        </div>
        <div className="hero-layout">
            {/* Left: hero content */}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5" >
                <div className="flex flex-col gap-7">
                    <div className="hero-text">
                    <h1>
                    shaping
                    <span className="slide">
                        <span className="wrapper">
                            {words.map((word, index) => (
                                <span key={index} className="flex items-center gap-1 md:gap-3 pb-2 ">
                                    <Image
                                        src={word.imgPath}
                                        alt={word.text}
                                        width={50}
                                        height={50}
                                        className="xs:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                        />

                                    {word.text}
                                </span>
                            ))}
                        </span>
                    </span>
                </h1>
                <h1>into real project&rsquo;s</h1>
                <h1>that Deliver Results</h1>
                </div>
                <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                    Hi, I&rsquo;m Ahmed Bouregba, am a software engineer student you can call me medex 
                </p>
                <Button text="Contact Me" className="mt-5 md:w-80 md:h-16 h-12 w-60" id="#contact" />
                </div>
            </header>
            {/* Right: 3d model */}
            <figure className="hero-model">
                {/* <HeroExperience /> */}
                <div className="hero-3d-layout">
                <HeroExperience />
                </div>
            </figure>
        </div>
        <AnimatedCounter />
    </section>

  )
}

export default Hero