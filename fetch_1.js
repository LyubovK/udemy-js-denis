// fetch(`https://jsonplaceholder.typicode.com/posts`)
//   .then((res) => {
//     return res.json();
//   })
//   .then((posts) => console.log(posts));

function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((post) => resolve(post))
      .catch((err) => reject(err));
  });
}

getPost(1).then((post) => console.log(post));

const getPost2 = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
    (res) => {
      return res.json();
    }
  );
};

getPost2(1)
  .then((post) => console.log(post))
  .then((err) => console.log(err));

const getPost3 = (id) => {
  return Promise.resolve().then(() => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      (res) => {
        return res.json();
      }
    );
  });
};
