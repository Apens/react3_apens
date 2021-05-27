import React, { Fragment, useState } from 'react';
import Form from './Form';
import ShowPreview from './ShowPreview';
const Uploader = () => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(0);
  const [totalFiles, setTotalFiles] = useState(0);

  const loadImage = e => {
    e.preventDefault();

    if (!e.target.files.length) return; // Guard

    let files = e.target.files;

    Array.prototype.forEach.call(files, file => {
      const reader = new ShowPreview(file, 'image');

      /**
       * data = []
       * TODO: Modifier pour povoir faire setImages(data) avec un tableau en argument.
       */
      // documents.push(file);

      reader.showPreview();
    });
  };

  const uploadFile = e => {
    e.preventDefault();
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    setTotalFiles(images.length);

    setUploading(true);

    images.map(image => {
      let formData = new FormData();
      formData.append('file', image);

      /**
       * TODO: Remplacer axios par fetch (in installer axios :/)
       */
      // axios
      //   .post('./create.php', formData, config)
      //   .then(res => {
      //     if (res.data) {
      //       this.removeDroppedFile(image.preview);
      //       return this.calculateProgress(total_files, ++uploaded);
      //     }
      //   })
      //   .catch(e => {
      //     this.removeDroppedFile(image.preview);
      //     return toastr.error(
      //       'You must create an album first',
      //       'Invalid Request'
      //     );
      //   });
    });
  };

  return (
    <Fragment>
      <form className={`mb-5`} onSubmit={uploadFile}>
        <input type="file" name={'images'} />
        <br />
        <button className={`btn btn-success`}>Upload file</button>
      </form>

      <div className="progress mb-5">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={style}
        />
      </div>
    </Fragment>
  );
};

const style = { width: '50%' };

export default Uploader;
