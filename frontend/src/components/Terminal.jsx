import React, { useEffect, useRef } from 'react'

const Terminal = () => {

const comp=useRef(null);
useEffect(()=>{


const toggle=(e)=>{
  if(e.key.toLowerCase()==='f'){
      if(!document.fullscreenElement){
        comp.current.requestFullscreen();
      }else{
        document.exitFullscreen();
      }
    }
}

  document.addEventListener('keydown',toggle)

  return()=>{
    document.removeEventListener('keydown',toggle)
  };

},[]);
  


  return (
  <div className='flex items-center justify-center h-screen'>

    <div 
      ref={comp}
      className='w-100 h-100 text-white bg-black'
      >
      <h1>Press 'F' to Fullscreen</h1>
    </div>
  </div>
  )
}

export default Terminal