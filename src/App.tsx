import { useRef } from 'react';
import Navbar from './components/Navbar';
import { useEventListener } from 'usehooks-ts';
import Hero from './components/Hero';
import Services from './components/Services';
import GlobeNeuralNetwork from './components/GlobeNeuralNetwork';
import { Canvas } from '@react-three/fiber';
import { useAtom } from 'jotai';
import Projects from './components/Projects.tsx';
import { OrbitControls } from '@react-three/drei';
import { topAtom } from './jotai/atoms.ts';
import { isMobile, isDesktop } from 'react-device-detect';
import Contact from './components/Contact.tsx';
import { twMerge } from 'tailwind-merge';
import Metodology from './components/Metodology.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { CSSReset } from '@chakra-ui/react';
import BullEyeSolidSvg from './components/Svg/BullsEyeSolidSvg.tsx';

function App() {
  const servicesRef = useRef<HTMLDivElement>(null!);
  const ref = useRef<HTMLDivElement>(null!);
  const heroRef = useRef<HTMLDivElement>(null!);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['start start', 'end start'],
  // });

  // const globeY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  // const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);

  const [, setTop] = useAtom(topAtom);

  useEventListener('scroll', () => {
    const servicesHeight = servicesRef.current.getBoundingClientRect().height;
    const heroHeight = heroRef.current.getBoundingClientRect().height;

    setTop(servicesHeight + heroHeight);
  });

  return (
    <ChakraProvider>
      {/* <CSSReset /> */}
      <div
        ref={ref}
        className={twMerge([
          'bg-black relative lg:h-full max-w-full',
          isMobile && 'overflow-x-hidden',
        ])}
      >
        <Navbar />

        <div
          ref={heroRef}
          className={twMerge(
            [
              'grid place-items-center overflow-hidden relative bg-black min-h-[100vh] md:min-h-[100rem] ',
            ],
            isMobile && 'min-h-screen'
          )}
        >
          <div
            className={twMerge([
              'absolute w-full  z-[100]',
              isMobile && 'mt-[5vh] pb-[5vh]',
              // 'mt-[10vh] md:mt-[40vh] bottom-[50vh]'
            ])}
          >
            <Hero />
          </div>

          <div
            // style={{
            //   y: globeY,
            //   x: '-50%',
            // }}
            className={twMerge([
              'absolute top-1/2 w-[40rem] h-[40rem] sm:w-[55rem] sm:h-[55rem] md:w-[70rem] md:h-[70rem] lg:w-[90vw] lg:h-[90vh] md:top-[10vh] left-1/2 -translate-x-1/2 z-[1]',
              isMobile &&
                'w-[30rem] h-[30rem] top-[50vh] -translate-y-[calc(50%-10rem)]',
            ])}
          >
            <Canvas
              className='z-[-1]'
              camera={{ position: [0, 5, isMobile ? 15.5 : 18.5] }}
            >
              <GlobeNeuralNetwork />
              {isDesktop && <OrbitControls enableZoom={false} />}
            </Canvas>
          </div>
        </div>

        <div ref={servicesRef}>
          <Services />
        </div>

        <Metodology />

        <Projects />

        <Contact />
      </div>
    </ChakraProvider>
  );
}

export default App;
