// we want to create a post
// lastactivitytime=the time the post was created


const posts = [];
let lastActivityTime;

function createPost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = { id: Date.now(), title: `Post ${posts.length + 1}` };
      posts.push(post);
      resolve(post);
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const deletedPost = posts.pop();
      resolve(deletedPost);
    }, 1000);
  });
}

createPost()
  .then((post) => {
    updateLastUserActivityTime().then((activityTime) => {
      console.log("All posts:", posts);
      console.log("Last activity time:", activityTime);
      deletePost().then((deletedPost) => {
        console.log("Deleted post:", deletedPost);
        console.log("Remaining posts:", posts);
      });
    });
  });
