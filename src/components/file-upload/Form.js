export default class Form {
  constructor() {
    this.formdata = new FormData();
    this.request = {};
    this.uploaded = 0;
    this.totalFiles = 0;
    this.percentage = 0;
  }

  postDocuments(docs) {
    this.totalFiles = docs.length;
    this.uploaded += 3;
    this.calculateProgress();
    docs.map(doc => {
      this.formdata.append('documents', doc);

      this.makeRequest().post(this.request);
      // TODO: remove image preview one by one

      this.formdata = new FormData();
    });
  }
  //TODO: A promise
  makeRequest() {
    this.request = new Request('post.php', {
      method: 'POST',
      body: this.formdata,
    });
    return this;
  }

  post(req) {
    fetch(req)
      .then(res => {
        this.uploaded++;
        this.calculateProgress();
        return res.text();
      })
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  calculateProgress() {
    this.percentage = (this.uploaded / this.totalFiles) * 100;
    const progress = document.querySelector('.progress-bar');

    progress.style.width = `${this.percentage}%`;

    if (this.percentage >= 100) {
      this.reset(progress);
    }
  }

  reset(progress) {
    // documents.length = 0;
    this.percentage = 0;
    this.uploaded = 0;
    this.totalFiles = 0;
    this.request = {};

    setTimeout(() => {
      document.querySelector('form').dispatchEvent(new CustomEvent('reset'));
      progress.style.width = `${this.percentage}%`;
    }, 3000);
  }
}
