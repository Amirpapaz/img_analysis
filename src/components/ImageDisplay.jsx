import React, {useState,useEffect} from 'react'
import  {getImageCaption}  from '../utils/huggingface.js'

export default function ImageDisplay(props) {
    const {file, url, resetButton} = props
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [regenerate,setRegenerate] = useState(false)
    
    useEffect(() => {
      async function fetchData() {
        if (file || url) {
          try {
            const captionResult = await getImageCaption(file, url,false)
            setResult(captionResult)
            setLoading(false)
          } catch (error) {
            console.error("Error fetching caption:", error)
            setResult("Failed to fetch caption")
            
          }
        } 
      }
      fetchData()
     
    }, [file,url])
    
    function Regenerate(){
      setRegenerate(true)
      setLoading(true)
      async function Regenerate() {
        if (file || url) {
          try {
            const captionResult = await getImageCaption(file, url,true)
            setResult(captionResult)
            setLoading(false)
          } catch (error) {
            console.error("Error fetching caption:", error)
            setResult("Failed to fetch caption")
            
          }
        } 
      }
    Regenerate()
    setRegenerate(false) //clear Regenerate value
  }   

  return (
    <>
    <div className="flex flex-col justify-center items-center w-full h-auto p-2 "> 
      <div className=" object-cover shadow"> 
    { file ? <img className=" max-w-[300px] justify-center p-2 " src={`${file}`}/> : <img className=" max-w-[300px] justify-center p-2" src={`${url}`}/> }
   </div>
   {loading ? (<i className="fa-solid fa-spinner loadingState p-4 "></i>) : (<p className="flex specialBtn px-4 py-2 font-bold rounded-xl items-center text-base justify-between gap-4 mx-auto  max-w-full my-4 specialBtn"> {result} </p>)}

   <div className="flex px-4 gap-4"> 
    <button className=" hover:scale-105 flex specialBtn px-4 py-2 font-bold rounded-xl items-center text-base justify-between gap-4 mx-auto  max-w-full my-4 specialBtn" onClick={resetButton}> 
      Reset
    </button>
    <button onClick={Regenerate} className=" hover:scale-105 flex specialBtn px-4 py-2 font-bold rounded-xl items-center text-base justify-between gap-4 mx-auto  max-w-full my-4 specialBtn"> 
      Regenerate text
    </button>
    </div>
   </div>
    </>
  )
}