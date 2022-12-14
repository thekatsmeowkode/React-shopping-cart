import React from "react";
import chocolateBackground from "../imgs/chocolate-background.jpg";
import "../App.css";

export function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${chocolateBackground})`,
        height: "100vh",
        opacity: "90%",
      }}
    >
        <h1 className='fade-in page-center'>Luxury Chocolatiers</h1>
    </div>
  );
}
