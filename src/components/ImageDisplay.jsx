import React, {useState,useEffect} from 'react'

export default function ImageDisplay(props) {
    const {file, url} = props
    
  return (
    <>
    <div className="flex text-center w-[400px] h-auto"> 
    { file ? <img className="flex text-center" src={`${file}`}/> : <img src={`${url}`}/> }
   </div>
    </>
  )
}