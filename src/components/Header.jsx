import React from 'react'
import { resetmodelTracker } from '../utils/huggingface'
export default function Header() {
  return (
    <header className=" h-[200px] text-white flex items-center justify-center"> 
      <a onClick={resetmodelTracker} href="/"> 
    <h1 className="text-3xl text-black"> IMAGE<span className="text-blue-400">DESCRIPTOR </span>  🤖</h1>
   </a> 
   </header>
  )
}
