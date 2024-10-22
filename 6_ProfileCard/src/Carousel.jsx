import { useState } from "react"

export default function Carousel() {
    const [image, setImage] = useState(0);
    const imgs = [
        '/image1.png',
        '/image2.png',
        '/image3.png',
        '/image4.png',
        '/image5.png',
    ]

    const handlePrev = () => {
        if(image>0){
            setImage((prev) => prev-1);
        }
    }

    const handleNext = () => {
        if(image<imgs.length-1){
            setImage((next) => next+1);
        } else{
            setImage(4);
        }
    }
  return (
    <div className="flex flex-row justify-center items-center gap-2">
        <button className="bg-gray-500 rounded-md p-2 m-2 hover:bg-gray-600" onClick={handlePrev} disabled={image==0}>Prev</button>
        <img src={imgs[image]} alt="images" className="h-60 w-72"/>
        <button className="bg-gray-500 rounded-md p-2 m-2 hover:bg-gray-600" onClick={handleNext} disabled={image==imgs.length-1}>Next</button>
    </div>
  )
}
