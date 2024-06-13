import {useState} from 'react'
import Header from './components/Header'
import Homepage from './components/Homepage'
import ImageDisplay from './components/ImageDisplay'

export default function App() {
  const [file,setFile] = useState('')
  const [url,setUrl] = useState('')
  
  const image = file || url

  return (
    <>
    <Header/>
    {image ? <ImageDisplay file={file} url={url} /> : <Homepage setFile = {setFile} setUrl = {setUrl}/>}
    </>
  )
}
