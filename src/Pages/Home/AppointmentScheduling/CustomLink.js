import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";


const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
        <Link
          style={{borderBottom : match ? '5px solid black' : 'none', borderLeft : match ? '3px solid black' : 'none', fontWeight :match ? 'bold' : '',paddingLeft:'5px'}}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
};

export default CustomLink;