class Contents {
    constructor() {
      this.list = []
    }

    add(content) {
      this.list.push(content);
    }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  const contents = new Contents();

  fetch('db.json')
  .then(res => res.json())
  .then(body => load(body, contents))
  .then(show);
});

const load = (body, contents) => {
  for (const rec of body.records) {
    contents.add(rec)
  }
  return contents;
};

const show = (contents) => {
  const stage = document.getElementById('main-stage');
  console.log(contents)
};
