import React, { useRef, useEffect } from "react"

export default function EmitImageAnimation() {
  const emitterRef = useRef(null)

  useEffect(() => {
    const emitterEl = emitterRef.current
    if (!emitterEl) return

    // Emitter interval in milliseconds
    const EMIT_INTERVAL = 500

    // List of images to pick from
    const images = [
      "btc.png",
      "eth.png",
      "solana.png",
      "ton.png",
      "usdt.png",
    ]

    // Function to create and emit a particle
    function emitParticle() {
      // Create a new div for the particle
      const particle = document.createElement("div")
      particle.classList.add("particle")

      // Randomly pick one of the images
      const randomIndex = Math.floor(Math.random() * images.length)
      const randomImage = images[randomIndex]

      // Set the background image
      particle.style.backgroundImage = `url('https://milangladis.com/demo/onboarding/${randomImage}')`

      // Generate a random horizontal offset
      const randomOffset = (Math.random() - 0.5) * 100
      particle.style.setProperty(
        "--random-x",
        `calc(-50% + ${randomOffset}px)`
      )

      // Add the particle to the emitter container
      emitterEl.appendChild(particle)

      // Remove the particle after its animation completes + a small buffer
      setTimeout(() => {
        emitterEl.removeChild(particle)
      }, 2200) // ~2 seconds
    }

    // Continuously emit particles at the specified interval
    const intervalId = setInterval(emitParticle, EMIT_INTERVAL)

    // Cleanup when this component unmounts
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      className="groups-container"
      style={{
        width: "100%",
        height: "100%",
        // overflow: "hidden",
        // background: "#482567", // match your original background
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* The emitter container */}
      <div
        id="emitter"
        ref={emitterRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transform: "translateY(100px)",
          zIndex: 1,
        }}
      ></div>

      <img
        className="bagFullOfMoney"
        src="https://milangladis.com/demo/onboarding/bag.png"
        width={268}
        height={207}
        alt="Bag"
        style={{
          position: "relative",
          zIndex: 10,
        }}
      />

      {/* Inline CSS for .particle and animation */}
      <style>{`
        .particle {
          position: absolute;
          left: 50%;
          bottom: 20px;
          width: 64px;
          height: 64px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transform: translateX(-50%);
          animation: floatUp 2s forwards;
        }

        /* Optional: keep the same .bagFullOfMoney class in case you want custom styling */
        .bagFullOfMoney {
          position: relative;
          z-index: 10;
        }

        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translate(-50%, 0px) scale(1);
          }
          80% {
            transform: translate(var(--random-x), -100px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--random-x), -100px) scale(0.5);
          }
        }
      `}</style>
    </div>
  )
}
