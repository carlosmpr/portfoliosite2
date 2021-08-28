import React from "react";
import { useTrail, a } from "@react-spring/web";

const NavItem = ({ children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {

    from: { opacity: 0, y:-10 },
    to: {opacity: 1,y:1 },
    delay: 1200 
  });
  return (
  
      trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))
  
  );
};

export default NavItem;
