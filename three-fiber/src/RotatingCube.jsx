import { Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingCube = () => {
    const meshRef = useRef();
    useFrame(()=>{
        if(meshRef.current){
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    })
    return (
        <mesh ref={meshRef}>
            <cylinderGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color="#468585" emissive="#468585" />
            <Sparkles count={100} color="yellow" scale={2} size={6} speed={0.002} noise={0.2}/>
        </mesh>
    );
};

export default RotatingCube;