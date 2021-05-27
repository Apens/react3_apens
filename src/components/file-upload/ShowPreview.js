export default class ShowPreview {
  constructor(file, fileType) {
    this.file = file;
    this.fileType = fileType;
    this.reader = new FileReader();
    this.src = '';
  }

  showPreview() {
    if (this.fileType === 'image') {
      return this.showImagePreview();
    }

    return this.showPdfPreview();
  }

  showImagePreview() {
    this.createObjectUrl(this.file);
    this.reader.onload = e => {
      this.src = this.reader.result;
      let img = document.createElement('img');
      img.src = this.src;
      img.classList.add('img-responsive');
      document.querySelector('.images').appendChild(img);
      //URL.revokeObjectURL(this.target.result);
      URL.revokeObjectURL(this.src);
    };
  }

  showPdfPreview() {
    this.createObjectUrl(this.file);
    this.reader.onload = () => {
      let json = JSON.stringify({ dataURL: this.reader.result });
      // // View the file
      let fileURL = JSON.parse(json);

      const div = document.querySelector('#display-pdf');
      div.innerHTML = '';
      const obj = this.createPdfObject(fileURL.dataURL);
      div.appendChild(obj);
      // // View the original file
      // let originalFileURL = URL.createObjectURL(originalFile);
      // const obj2 = createObject(originalFileURL);
      // div.appendChild(obj2);
      // URL.revokeObjectURL(originalFileURL);
    };
  }

  createPdfObject(data) {
    const object = document.createElement('object');
    object.setAttribute('data', data);
    object.setAttribute('width', '400px');
    object.setAttribute('height', '200px');
    object.setAttribute('type', 'application/pdf');

    return object;
  }

  createObjectUrl(file) {
    return this.reader.readAsDataURL(file);
  }

  deleteDoc() {
    document.querySelector('#display-pdf').innerHTML = '';
    document.querySelector('.images').innerHTML = '';
  }
}
