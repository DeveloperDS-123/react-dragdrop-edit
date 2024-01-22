import "./App.css";
import React, { useState } from "react";
import ReactImagePickerEditor from "react-image-picker-editor";
import "react-image-picker-editor/dist/index.css";

const arrayOfImages = [
  {
    id: 1,
    link: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    link: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    link: "https://images.pexels.com/photos/3020083/pexels-photo-3020083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    link: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const App = () => {
  const config = {
    borderRadius: "8px",
    language: "en",
    width: "100%",
    height: "250px",
    objectFit: "contain",
    hideDeleteBtn: true,
    hideDownloadBtn: true,
    hideEditBtn: false,
    hideAddBtn: true,
    hideUploadIcon: true,
    hideUploadBtn: true,
  };

  const [imageSrc, setImageSrc] = useState(false);

  const [imageSrc1, setImageSrc1] = useState(false);
  const [link,setLink] = useState(false);
  

  return (
    <div className="app">
      {arrayOfImages.map((singleImage) => {
        return (
          <section
            key={singleImage.id}
            onDragStart={() =>  setLink(singleImage.link)}
            draggable="true"
          >
            <img
              src={singleImage.link}
              alt={singleImage.id + "image"}
              width="220px"
              height="220px"
            />
          </section>
        );
      })}
      <div className="shimmerBlocks">
        <section  onDragOver={(e)=>( e.preventDefault())}  onDrop={()=>setImageSrc(link)}>
          <ReactImagePickerEditor
            config={{
              ...config,
            }}
            imageSrcProp={imageSrc}
          />
        </section>

        <section  onDragOver={(e)=>( e.preventDefault())}  onDrop={()=>setImageSrc1(link)}>
          <ReactImagePickerEditor
            config={{
              ...config,
            }}
            imageSrcProp={imageSrc1}
          />
        </section>
      </div>
    </div>
  );
};

export default App;
