import { counterItems } from "@/constants"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

const AnimatedCounter = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <div ref={ref} id="counter"  className=" padding-x-lg xl:mt-0 mt-32 ">
        <div className="mx-auto grid-4-cols">
            {counterItems.map((item) => (
                <div  className="p-10 bg-zinc-900 rounded-lg flex flex-col justify-center" key={item.label}>
                    <div className="counter-number text-white text-5xl font-bold mb-2">
                        <CountUp suffix={item.suffix} end={inView ? item.value : 0}  />
                        <div className="text-gray-400 text-lg" >{item.label}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter