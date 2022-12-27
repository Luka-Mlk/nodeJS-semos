const { count } = require("console");
const fs = require("fs");
(async () => {
  try {
    let blogRes = await fetch("https://jsonplaceholder.typicode.com/posts");
    let blogData = await blogRes.json();
    printPostNum(blogData);
    postPosts(blogData);
    postPostsLeast(blogData);
  } catch (err) {
    console.log(err);
  }
})();
// Spremi se da citas 🔻
const printPostNum = async (posts) => {
  let idArr = [];
  posts.forEach((post) => {
    idArr.push(post.userId);
  });
  /*   
  index = 0;
  const newArr = idArr.filter((c, index) => {
  console.log(index);
  return idArr.indexOf(c) === index;
  });
    OVA 👆 I 👇 GO PRAVAT ISTOTO
    dolnoto e samo skolski
  */
  const usersArray = []; // Array od site useri
  const numOfUserPostsArray = []; // Array od brojot na postovi od useri
  let postCounter = 0;
  for (let i = 0; i < idArr.length; i++) {
    if (usersArray[i] !== idArr[i] && idArr[i] !== idArr[i + 1]) {
      usersArray.push(idArr[i]);
    }
    if (usersArray[i] === usersArray[i + 1]) {
      postCounter++;
    }
    if (idArr[i] !== idArr[i + 1]) {
      numOfUserPostsArray.push(postCounter);
      postCounter = 0;
    }
  }
  // Ako ne postoi dokumentot go sozdava
  if (!fs.existsSync("./documents")) {
    fs.mkdir("./documents", (err) => {
      if (err) {
        console.log(err);
      }
      console.log("Documents folder created");
    });
  }
  let container = [];
  for (let i = 0; i < usersArray.length; i++) {
    container[i] = {
      korisnik: usersArray[i],
      postovi: numOfUserPostsArray[i],
    };
    // finalArr.push(`{Korisnik: ${usersArray[i]} | Broj na postovi ${numOfUserPostsArray[i]}`);
    // 👆 Prviot obid koi shto pisuvase direktno vo .txt file i licese po ubavo ama momentalniot nacin mislam deka e po prakticen
  }
  fs.writeFile("./documents/statistika.json", JSON.stringify(container), () => {
    console.log("Written in statistika.json");
  });
  //   console.log(idArr, usersArray, numOfUserPostsArray, container);
};
const postPosts = async (posts) => {
  /* for (let i = 0; i < posts.length; i++) {
    //   maxLengthPerUser = posts[i].body.length;
    //   allUserPosts[i] = {
      //     korisnik: posts[i].userId,
      //     dolzina: posts[i].body.length,
      //   };
      👆 Skolski primer */
  const arrOfUsers = [];
  let number = 1;
  posts.forEach((post) => {
    if (post.userId === number && !arrOfUsers.includes(post.userId)) {
      arrOfUsers.push(post.userId);
    } else if (post.userId !== number) {
      number++;
    }
  });
  let longestArr = 0;
  let num2 = 1;
  const arrOfLongestPost = [];
  posts.forEach((post) => {
    if (post.userId === num2 && longestArr < post.body.length) {
      longestArr = post.body.length;
    }
    if (post.userId !== num2) {
      arrOfLongestPost.push(longestArr);
      longestArr = 0;
      num2++;
    }
  });
  const containter2 = [];
  for (i = 0; i < arrOfUsers.length; i++) {
    containter2.push({
      korisnik: arrOfUsers[i],
      najdolg: arrOfLongestPost[i],
    });
  }
  fs.writeFile("./documents/najdolgi.json", JSON.stringify(containter2), () => {
    console.log("Written in najdolgi.json");
  });
  // console.log(arrOfUsers, arrOfLongestPost);
};
const postPostsLeast = async (posts) => {
  const arrOfUsers = [];
  let number = 1;
  posts.forEach((post) => {
    if (post.userId === number && !arrOfUsers.includes(post.userId)) {
      arrOfUsers.push(post.userId);
    } else if (post.userId !== number) {
      number++;
    }
  });
  let shortestArr = 255;
  let num2 = 1;
  const arrOfShortestPost = [];
  posts.forEach((post) => {
    if (post.userId === num2 && shortestArr > post.body.length) {
      shortestArr = post.body.length;
    }
    if (post.userId !== num2) {
      arrOfShortestPost.push(shortestArr);
      shortestArr = 255;
      num2++;
    }
  });
  const containter3 = [];
  for (i = 0; i < arrOfUsers.length; i++) {
    containter3.push({
      korisnik: arrOfUsers[i],
      najkratok: arrOfShortestPost[i],
    });
  }
  fs.writeFile(
    "./documents/najkratki.json",
    JSON.stringify(containter3),
    () => {
      console.log("Written in najkratki.json");
    }
  );
  // console.log(arrOfUsers, arrOfLongestPost);
};
