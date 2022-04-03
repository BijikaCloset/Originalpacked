import React, { useRef, useState, useEffect } from "react";
import Crousal from "../Crousal";

import Button from "../Button/index";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState();

  const filePickerRef = useRef();

  // useEffect(() => {
  //   if (!file) {
  //     return;
  //   }
  //   const fileReader = new FileReader();
  //   fileReader.onload = () => {
  //     setPreviewUrl(fileReader.result);
  //   };
  //   fileReader.readAsDataURL(file[0]);
  // }, [file]);

  const pickedImage = async (evt) => {
    let pickedFile;
    let fileIsValid = isValid;

    if (evt.target.files && evt.target.files.length >= 1) {
      pickedFile = evt.target.files;
      // setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid(false);
    }

    let images = [];
    const base64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          images.push(fileReader.result);
          resolve(images);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };

    let i = 0;
    for (const property in pickedFile) {
      if (i < pickedFile.length) {
        const image = await base64(pickedFile[i]);
      }

      i = i + 1;
    }
    setFile(images);

    props.onInput(props.id, images);
  };

  const pickImageHandler = (evt) => {
    filePickerRef.current.click();
  };

  return (
    <div>
      <input
        id={props.id}
        style={{ display: "none" }}
        type="file"
        accept=".jpg , .png , .jpeg"
        ref={filePickerRef}
        onChange={pickedImage}
        multiple
      />
      <div>
        <div>
          <div>
            {file ? <Crousal image={file} /> : null}

            {/* {previewUrl && (
              <img src={previewUrl} alt="Preview" className="img-thumbnail" />
            )} */}
            {!previewUrl && <p>Upload product Image</p>}
          </div>
          <Button type="button" text="Choose Image" onClick={pickImageHandler}>
            Choose Images
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
