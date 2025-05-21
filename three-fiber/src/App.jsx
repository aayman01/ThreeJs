import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RotatingCube from './RotatingCube';


const App = () => {
  return (
    <Canvas style={ {height: "100vh", width : "100vw" , display : "flex" , alignItems : "center" , justifyContent : "center"} }>
      <OrbitControls enableDamping enableZoom enablePan dampingFactor={0.05}/>
      <directionalLight color={0x9CDBA6} intensity={10} position={[1, 1, 1]} />
      <ambientLight color={0x9CDBA6} intensity={0.5} />
      {/* for setting bg color of the canvas */}
      <color attach="background" args={["#F0F0F0"]} /> 
      <RotatingCube/>
    </Canvas>
  );
};

export default App;