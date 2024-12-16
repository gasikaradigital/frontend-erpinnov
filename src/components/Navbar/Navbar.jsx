import * as React from "react";


export const Navbar = ({ className, content }) => {
    return (
      <div className={`bg-white rounded shadow-md px-8 py-4 z-50 m-4 fixed max-w-7xl mx-auto left-0 right-0 ${className}`}>
        {content}
      </div>
    );
  };


