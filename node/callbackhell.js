//4. Callback Hell
// This happens when you nest multiple asynchronous functions,
//  making the code look like a "pyramid of doom" and making
//   it impossible to debug.
// Solution: Use Promises or Async/Await to flatten the 
// structure.

getUser(id, (user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log(comments);
    });
  });
});