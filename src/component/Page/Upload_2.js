import React , {useState, useRef}from "react";
import { Camera } from "react-camera-pro";

const Upload_2 = () => {
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);
  
  return (

    <div className=" w-96 h-56">
        <Camera ref={camera} 
        facingMode={'user'}
        numberOfCamerasCallback={setNumberOfCameras} 
        aspectRatio={4 / 3}/>

        <img src={image} alt='Image preview' />

        <button
        onClick={() => {
            const photo = camera.current.takePhoto();
            setImage(photo);
        }}>
        takePhoto    
        </button>
        
        <button
        hidden={numberOfCameras <= 1}
        onClick={() => {
          camera.current.switchCamera();
        }}>
        Switch camera
        </button>
    </div>

    );
};
export default Upload_2;