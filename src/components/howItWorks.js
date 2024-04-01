import React, { useState } from 'react';

function HowItWorks() {
  // State to manage hover effect
  const [hover, setHover] = useState({ id: null });

  // Inline styles
  const boxStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'around',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
    position: 'relative',
    backgroundSize: 'cover',
  };

  const contentBoxStyle = {
    marginTop: '24px',
    boxSizing: 'border-box',
    width: '40%',
    maxWidth: '100%',
    padding: '32px',
    borderRadius: '24px',
    marginBottom: '0',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: '#ffffff', // This is a fallback background
  };

  const hoverEffect = {
    transform: 'scale(1.05)',
  };

  const titleStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#374151', // This is for text color
  };

  const paragraphStyle = {
    marginTop: '28px',
    fontSize: '16px',
    color: '#6B7280',
  };

  // Function to handle mouse enter and leave
  const toggleHover = (id) => {
    setHover({ id: hover.id === id ? null : id });
  };

  return (
    <div style={boxStyle}>
      {[1, 2, 3].map((id) => (
        <div
          key={id}
          style={{ ...contentBoxStyle, ...(hover.id === id ? hoverEffect : {}) }}
          onMouseEnter={() => toggleHover(id)}
          onMouseLeave={() => toggleHover(id)}
        >
          <h1 style={titleStyle}>Step {id}</h1>
          <p style={paragraphStyle}>This is step {id} of how it works.</p>
        </div>
      ))}
    </div>
  );
}

export default HowItWorks;
