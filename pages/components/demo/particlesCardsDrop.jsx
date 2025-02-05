// EmitDataAnimation.jsx

import React, { useRef, useEffect } from "react"

// Sample data for each particle
const particleData = [
  { title: "Win 10 ETH", subtitle: "Value: $16,000 USD", image: "eth.png" },
  { title: "Win 200 BTC", subtitle: "Value: $40,000 USD", image: "btc.png" },
  { title: "Win 50 TON", subtitle: "Value: $312 USD", image: "ton.png" },
  { title: "Win 100 Solana", subtitle: "Value: $15 USD", image: "solana.png" },
  { title: "Win 2 USDT", subtitle: "Value: $54,000 USD", image: "usdt.png" },
]

export default function EmitDataCardsAnimation() {
  // We'll emit our particles into this container
  const emitterRef = useRef(null)

  useEffect(() => {
    const emitterEl = emitterRef.current
    if (!emitterEl) return

    // How often (ms) to emit a new particle
    const EMIT_INTERVAL = 1000

    
    // The function that spawns a new particle
    function getRandomRotation() {
      return (Math.random() * 24 - 12).toFixed(2); // e.g. -5.23, +3.11, etc.
    }
    function emitParticle() {
      // Pick a random data object
      const data =
        particleData[Math.floor(Math.random() * particleData.length)]

      // Create a new div for the particle
      const particleDiv = document.createElement("div")
      particleDiv.classList.add("particle2")
      
      particleDiv.style.setProperty( "--randomRotation", getRandomRotation()+'deg')

      // particleDiv.style.transform = `rotate(${initialRotation}deg) translateY(0) `;
      
      // Inject your custom particle markup (title, subtitle, image)
      particleDiv.innerHTML = `
        <div class="particle2-content">
          <img class="particle2-image" src="https://milangladis.com/demo/onboarding/${data.image}" />
          <div class="particle2-text">
            <div class="particle2-title">${data.title}</div>
            <div class="particle2-subtitle">${data.subtitle}</div>
          </div>
        </div>
      `

      // Append to the emitter container
      // emitterEl.appendChild(particleDiv)
      // prepend child
      emitterEl.prepend(particleDiv)

      // Remove once the animation completes
      setTimeout(() => {
        emitterEl.removeChild(particleDiv)
      }, 3000) // ~3s (matches animation timing + buffer)
    }

    // Continuously emit on an interval
    const intervalId = setInterval(emitParticle, EMIT_INTERVAL)

    // Cleanup when unmounting
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      // A container that holds both the emitter (particles) and the styles
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        // backgroundColor: "#EEE", // Example background
      }}
      ref={emitterRef}
    >
      <style>{`

        .particle2 {
          position: absolute;
          display: flex;
          width: fit-content;
          // left: 50%;
          justify-content: center;
          align-items: center;
          border-radius: 53.76px;
          padding: 16px;
          box-shadow: 0px 4px 68px rgba(0,0,0,0.2);
          background: #fff;
          /* Let the animation handle movement over 2.5s */
          animation: fallDown 2.5s forwards ease-in;
        }

        /* The main content container within each particle */
        .particle2-content {
          display: flex;
          align-items: center;
          gap: 15.36px;
          padding-right: 16px;
        }

        .particle2-image {
          width: 56px;
          height: 56px;
          flex: none;
          border-radius: 50%;
          object-fit: cover;
        }

        .particle2-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .particle2-title {
          font-size: 17.28px;
          font-weight: 800;
          letter-spacing: -0.4px;
          color: rgba(0, 0, 0, 0.7);
        }

        .particle2-subtitle {
          font-size: 13.44px;
          font-weight: 500;
          letter-spacing: -0.4px;
          color: rgba(0, 0, 0, 0.5);
        }

        /* ============= Particle Animation ============= */
        @keyframes fallDown {
          0% {
            left: 50%
            opacity: 0;
            transform: rotate(var(--randomRotation)) scale(0.7);
          }
          10% {
            opacity: 1;
            transform: rotate(var(--randomRotation)) translateY(0px) scale(1);
          }
          80% {
          opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: rotate(var(--randomRotation)) translateY(100px) scale(0.9);
          }
        }
      `}</style>
    </div>
  )
}
