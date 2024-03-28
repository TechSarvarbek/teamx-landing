import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import './p.css';

const MyComponent = () => {
    const options = {
        particles: {
          number: {
            value: 25,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 1
          },
          size: {
            value: { min: 1, max: 5 }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#808080",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2, // Hızı düşürün
            direction: "none",
            random: false,
            straight: false,
            outModes: "out"
          },
          collisions: {
            enable: true,
            mode: "bounce"
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 1
              }
            },
            push: {
              quantity: 4
            }
          }
        }
      };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="App">
      <Particles options={options} init={particlesInit} />
    </div>
  );
};

export default MyComponent;
