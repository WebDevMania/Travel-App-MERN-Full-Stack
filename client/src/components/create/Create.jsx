import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {AiOutlineCloseCircle} from 'react-icons/ai'
import classes from "./create.module.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [country, setCountry] = useState("")
  const [type, setType] = useState("")
  const [price, setPrice] = useState(0);
  const [stars, setStars] = useState(0);
  const [typeError, setTypeError] = useState(false)
  const navigate = useNavigate();

  const onChangeFileFirst = (e) => {
    setImg(e.target.files[0]);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    const acceptableTypes = ['apartment', 'penthouse', 'bungalow', 'villa']

    if(!acceptableTypes.includes(type)){
      setTypeError(true)
      setTimeout(() => {
        setTypeError(false)
      }, 1000 * 10)
      return
    }

    try {
      const formData = new FormData();

      let filename = null;
      if (img) {
        filename = Date.now() + img.name;
        // for first img
        formData.append("filename", filename);
        formData.append("image", img);

        await fetch(`http://localhost:5000/upload/image`, {
          method: "POST",
          body: formData,
        });

      // upload product and navigate to product
      const res = await fetch("http://localhost:5000/room", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          country,
          type,
          photo: filename,
          price,
          stars,
        }),
      });
      const room = await res.json();
      navigate(`/typeDetail/${room?._id}`);
    }

    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseImg = () => {
    setImg(prev => null)
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Create product</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className={classes.inputWrapper}>
            <label >Title: </label>
            <input
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              className={classes.input}
              type="text"
              placeholder="title..."
            />
          </div>
          <div className={classes.inputWrapper}>
            <label >Description: </label>
            <input
              name="desc"
              onChange={(e) => setDesc(e.target.value)}
              className={classes.input}
              type="text"
              placeholder="description..."
            />
          </div>
          <div className={classes.inputWrapper}>
            <label >Country: </label>
            <input
              name="country"
              onChange={(e) => setCountry(e.target.value)}
              className={classes.input}
              type="text"
              placeholder="Country..."
            />
          </div>
          <div className={classes.inputWrapper}>
            <label >Type: </label>
            <input
              name="type"
              onChange={(e) => setType(e.target.value)}
              className={classes.input}
              type="text"
              placeholder="type..."
            />
          </div>
          <div className={classes.inputWrapperImgFirst}>
            <label className={classes.labelFileInput} htmlFor="firstImg" >
              First image: <span>Upload here</span>
            </label>
            <input
              className={classes.input}
              type="file"
              filename="firstImg"
              id="firstImg"
              onChange={onChangeFileFirst}
              placeholder="image..."
              style={{ display: "none" }}
            />
            {img && <p className={classes.imageName}>{img.name} <AiOutlineCloseCircle onClick={() => handleCloseImg()} className={classes.closeIcon}/></p>}
          </div>
          <div className={classes.inputWrapper}>
            <label >Price: </label>
            <input
              step={0.01}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              className={classes.input}
              type="number"
              placeholder="price..."
            />
          </div>
          <div className={classes.inputWrapper}>
            <label >Stars: </label>
            <input
              min={1}
              max={5}
              step={1}
              name="stars"
              onChange={(e) => setStars(e.target.value)}
              className={classes.input}
              type="number"
              placeholder="stars..."
            />
          </div>
          <div className={classes.buttonWrapper}>
            <button className={classes.submitBtn} type="submit">
              Create Product
            </button>
          </div>
        </form>
        {typeError &&
        <div className={classes.successMessage}>
          Wrong Type! Acceptable types are - apartment, villa, penthouse and bungalow
        </div>}
      </div>
    </div>
  );
};

export default Create;