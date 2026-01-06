import { useState,useEffect } from "react";

const BasicEffect = () => {
    useEffect(() => {
      console.log('Hello i am a message')
    },[]);
  return (
    <div>
        <h2>console dekh jakr</h2>
    </div>
  )
}

export default BasicEffect