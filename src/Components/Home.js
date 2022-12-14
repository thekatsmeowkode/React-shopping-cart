import React from "react";
import chocolateBackground from '../imgs/chocolate-background.jpg'


export function Home() {
  return (
    <div style={{backgroundImage: `url(${chocolateBackground})`, height: '100vh', opacity: '90%'}}>
    </div>
  )
}
