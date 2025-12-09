
const HeloLights = () => {
  return (
    <>
        <spotLight position={[1,7,1]}
          intensity={100}
          angle={0.5}
          color={'blue'}
          penumbra={1}
        />
        <spotLight position={[1,1,1]}
          intensity={50}
          angle={0.5}
          color={'white'}
          penumbra={1}
        />
        <spotLight position={[-1,0.5,1]}
          intensity={10}
          angle={0.5}
          color={'orange'}
          penumbra={0.3}
        />
        <spotLight position={[1,3,1]}
          intensity={100}
          angle={0.3}
          color={'red'}
          penumbra={1}
        />
    </>
  )
}

export default HeloLights
