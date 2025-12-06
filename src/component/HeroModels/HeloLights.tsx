
const HeloLights = () => {
  return (
    <>
        <ambientLight intensity={0.2} color={"white"}/>
        <directionalLight position={[5, 5, 5]} intensity={1} />
    </>
  )
}

export default HeloLights