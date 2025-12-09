import Image from "next/image"
import gsap from "gsap"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);


const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const projects = [project1Ref, project2Ref, project3Ref];

    useGSAP(()  =>
        {
        projects.forEach((projectRef, index) => {
            gsap.fromTo(projectRef.current,{
                y: 50,
                opacity:0,
            },{
                y:0,
                opacity:1,
                duration:1.5,
                ease: 'power1.inOut',
                delay: ++index * 0.3,
                scrollTrigger: {
                    trigger: projectRef.current,
                    // start: 'top 80%',
                    // end: 'bottom 60%',
                    toggleActions: 'play none none reverse',
                },
            })
        });
    })
  return (
    <section ref={sectionRef} id="work" className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/* Left Side */}
                <div ref={project1Ref} className="first-project-wrapper">
                    <div className="image-wrapper">
                        <Image src={"/images/project1.png"}
                        alt={"image"} width={500} height={300}/>
                    </div>
                    <div className="text-content">
                        <h2>On Demande rides made Simple with our app</h2>
                        <p className="text-white-50 md:text-xl" >
                        Developed a ride-hailing application using React Native for the front-end and Node.js with Express for the back-end. Implemented real-time location tracking with Google Maps API, secure user authentication, and integrated payment gateways for seamless transactions. Ensured scalability and performance optimization to handle high user traffic.
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div ref={project2Ref} className="project-list-wrapper overflow-hidden">
                        <div className="project">
                    {/* <div className="second-project-wrapper "> */}
                        <div className="image-wrapper bg-zinc-500 rounded-2xl">
                            <Image src={"/images/project2.png"}
                            alt={"image"} width={500} height={300}/>
                        </div>
                        <div className="text-content">
                            <h2>second Project</h2>
                        </div>
                 </div>
                    <div ref={project3Ref} className="third-project-wrapper">
                            <div className="image-wrapper bg-zinc-400 rounded-2xl">
                                <Image src={"/images/project3.png"}
                                alt={"image"} width={500} height={300}/>
                            </div>
                            <div className="text-content">
                                <h2> Third Project</h2>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </section>
  )
}

export default ShowcaseSection