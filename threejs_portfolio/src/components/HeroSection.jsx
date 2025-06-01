import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import { calculateSizes } from "../constants/index.js";
import HeroCamera from "../shared/HeroCamera.jsx";
import CanvasLoader from "../Shared/CanvasLoader.jsx";
import HackerRoom from "../shared/HackerRoom.jsx";
import Target from "../shared/Target.jsx";
import ReactLogo from "../shared/ReactLogo.jsx";
import Cube from "../shared/Cude.jsx";
import Rings from "../shared/Rings.jsx";


const HeroSection = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // const x = useControls("hackerRoom", {
  //   positionX : {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionY : {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionZ : {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   scale : {
  //   value : 0.1,
  //   min : 0.0,
  //   max : 1.0
  //   }
  // })

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-generalsans font-medium text-white text-center">
          Hi, I am Aayman <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0 ">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0, -Math.PI, 0]} // using Math.PI to rotate 180 degrees
            />
            {/* <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo />
              <Cube />
              <Rings position={sizes.ringPosition} />
            </group> */}

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <button>Let's work together</button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
