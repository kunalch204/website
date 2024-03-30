// MovingBorderBtn.jsx
import React from 'react';

const MovingBorderBtn = React.forwardRef(({ onClick, href, children, className }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref} className={`moving-border-btn ${className || ''}`}>
      {children}
    </a>
  );
});

MovingBorderBtn.displayName = 'MovingBorderBtn';

export default MovingBorderBtn;
