import React, { useState, useRef } from "react";

const ProfileHook = () => {
  const [imageFile, setImageFile] = useState(null);
  const profileImgUploaderRef = useRef(null);
  const uploadedImage = useRef(null);

  const handleImageUpload = (e) => {
    e.preventDefault();
    const [file] = e.target.files;
    console.log(file, "file");
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageFile(event.target.result);
        localStorage.setItem("profileImg", event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return {
    handleImageUpload,
    imageFile,
    profileImgUploaderRef,
    uploadedImage,
  };
};

export default ProfileHook;
