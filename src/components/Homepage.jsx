import React from 'react'

export default function Homepage(props) {
const {setFile, setUrl} = props

const handleFileChange = (e) => {
    const tempFile = e.target.files[0];
    if (tempFile) {
      const fileUrl = URL.createObjectURL(tempFile);
      setFile(fileUrl);
      setUrl(''); // Clear the URL input when file input is used
    }
  }

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setFile(null); // Clear the file input when URL input is used
  }

return (
    <main className ="flex-1 p-4 flex flex-col gap-3 sm:gap-4
     justify-center text-center pb-20"> 

    <div className = "flex flex-col items-center p-2 specialBtn px-4 py-2 font-bold rounded-xl items-center text-base justify-between mx-auto my-4 focus:border-0 focus:outline-none  hover:scale-105 "> 
      <p> 
        <input  className=" focus:outline-none focus:border-0 " placeholder=" Paste an image URL" onChange={handleUrlChange} type='text' />
      </p>
    </div> 

    <div className=" flex flex-col items-center p-2 specialBtn px-4 py-2 font-bold rounded-xl items-center text-base justify-between mx-auto my-2 focus:border-0 focus:outline-none hover:scale-105 cursor-pointer">
    <p className="px-2 font-bold "> 
    Or Upload an image
    <label className="fa-solid fa-upload text-blue-400 cursor-pointer hover:text-blue-600 p-2"> 
      <div> 
    <input className = "hidden " onChange = {handleFileChange} type='file' accept='.jpg,.png,.webp,.avif'/>   
    </div> 
    </label>
    </p>
    </div>   

    </main> 
  )
}
