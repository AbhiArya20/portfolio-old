import { useCallback, useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import { MoveDirection, OutMode, type Container, type ISourceOptions } from '@tsparticles/engine';

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (_: Container | undefined) => { }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 10,
            duration: 1,
          },
        },
        retina_detect: false
      },

      particles: {
        color: {
          value: "#ffffff",
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: '#ffffff',
          opacity: 0.25,
          width: 1
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: 6,
          straight: false, bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        },
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 800
          }
        },
        opacity: {
          value: 0.48102361825965684,
          random: true
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 5,
            size_min: 1,
            sync: true
          }
        },
      },
      detectRetina: true,
      style: {
        maxHeight: "100vh",
      }
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};


export default ParticlesContainer;
