import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import {useMediaQuery} from "react-responsive/";
import {Room} from "./Optimized-room";
import HeloLights from "./HeloLights";
const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>

        <OrbitControls enableZoom={!isTablet} 
        enablePan={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 5}
        />
        <HeloLights />
        <group >
            <Room scale={isMobile ? 0.7 :1} position={[0, -3.5, 0]}  rotation={[0, -Math.PI / 4, 0]} />
        </group>
    </Canvas>
  )
}

export default HeroExperience