import React, { useState, useEffect } from "react";

export default function Header() {

  const [state, setState] = useState(0);

  useEffect(() => {
    setState(window.innerWidth);
  })

  return (
    <div className="swoosh-container" style={{ backgroundImage: `url(${require("../static/img/header.svg")})` }}>
      
    </div>
  );
}
