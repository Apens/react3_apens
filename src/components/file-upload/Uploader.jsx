import React, { Fragment, useEffect, useState, useRef } from 'react';
// import Form from './Form';
// import ShowPreview from './ShowPreview';

const Uploader = () => {
  const [images, setImages] = useState([]);
  const [totalFiles, setTotalFiles] = useState(0);
  const [progressWidth, setProgressWidth] = useState({ width: '0%' });
  const [, setUploading] = useState(false);

  const formRef = useRef();

  const loadImage = e => {
    if (!e.target.files.length) return; // Guard

    let files = e.target.files;

    Array.prototype.forEach.call(files, image => {
      let reader = new FileReader();

      reader.readAsDataURL(image);

      reader.onload = e => {
        image.preview = e.target.result;
      };
    });

    setTimeout(() => {
      setImages(prev => [...prev, ...files]);

      // setImages([nouveauTrucs])
      // setImages( elementsPrecedents => // ? un truc calculé)
    }, 100);
  };

  useEffect(() => {
    setTotalFiles(images.length);
  }, [images]);

  const calculateProgress = nbrUploaded => {
    const width = {
      width: `${(nbrUploaded / totalFiles) * 100}%`,
    };

    setProgressWidth(width);
  };

  const uploadFile = e => {
    e.preventDefault();

    const config = { headers: { 'Content-Type': 'multipart/form-data' } };

    setTotalFiles(images.length);

    setUploading(true);

    Array.prototype.map.call(images, (image, index) => {
      let formData = new FormData();
      formData.append('documents', image);

      calculateProgress(++index);

      // fetch('http://localhost/file-upload/post.php', {
      //   method: 'POST',
      //   body: formData,
      // }).then(res => console.log(res));
      //
      // Installer et Importer axios si besoin
      // axios
      //   .post('http://localhost/file-upload/post.php', formData, config)
      //   .then(res => {
      //     if (res.data) {
      //       // this.removeDroppedFile(image.preview);
      //       console.log(res.data);
      //       // return this.calculateProgress(total_files, ++uploaded);
      //     }
      //   })
      //   .catch(e => {
      //     // this.removeDroppedFile(image.preview);
      //     console.log(e.message);
      //   });
    });

    setTimeout(() => {
      setImages([]);
      setTotalFiles(0);
      setProgressWidth({ width: '0%' });
      setUploading(false);
      formRef.current.reset();
    }, 3000);
  };

  return (
    <Fragment>
      <form ref={formRef} className={`mb-5`} onSubmit={uploadFile}>
        <input
          type="file"
          name={'images'}
          onChange={loadImage}
          multiple="multiple"
        />
        <br />
        <button type={'submit'} className={`btn btn-success`}>
          Upload file
        </button>
      </form>

      <div className="progress mb-5">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={progressWidth}
        />
      </div>

      <p>
        {totalFiles} {totalFiles > 1 ? 'Images' : 'Image'} en attente...
      </p>
      <div className="row images">
        {Array.prototype.map.call(images, (image, index) => {
          return (
            <img key={index} src={image.preview} alt={`Image to upload`} />
          );
        })}
      </div>
    </Fragment>
  );
};

export default Uploader;
