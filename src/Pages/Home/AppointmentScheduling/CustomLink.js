import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"



const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to ? to : 'productive');
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ borderBottom: match ? '5px solid #0077F1' : 'none' || to === 'productive' ? "5px solid #0077F1" : "", paddingBottom: match ? '5px  ' : 'none', fontWeight: match ? 'bold' : '', paddingLeft: '5px' }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;