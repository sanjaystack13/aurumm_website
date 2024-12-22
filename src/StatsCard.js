import React from 'react'
import { useSpring, animated } from 'react-spring';


const StatsCard = ({ number, label }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 }, // Start from invisible
    to: { opacity: 1 }, // Animate to visible
    config: { duration: 1000 }, // Duration of the animation
  });

  return (
    <animated.div style={props} className="stat-card">
    <h3 className="stat-number">{number}</h3>
    <p className="stat-text">{label}</p>
  </animated.div>
  )
}

export default StatsCard
