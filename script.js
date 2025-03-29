//LAB 7 - COMMENT OUT SECTIONS AS NECESSARY TO TEST FUNCTIONALITY

//Part 1 - Simulate Data Fetching Using Promises
let fetchProfiles = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        setTimeout(function() { 
            resolve("Profile Loaded");
        }, 7000);
    } else {
        reject("Error : Could not fetch User Profiles");
    }
});

let fetchPosts = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        setTimeout(function() { 
            resolve("Post Loaded");
        }, 5000);
    } else {
        reject("Error : Could not fetch Posts");
    }
});

let fetchComments = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        setTimeout(function() { 
            resolve("Comment Loaded");
        }, 3000);
    } else {
        reject("Error : Could not fetch Comments");
    }
});

//Part 2 - Sequential Fetching vs Parallel Fetching

//2.1 - Sequential Fetching
fetchProfiles.then(message => {
    console.log(message);
});

fetchPosts.then(message => {
    console.log(message);
});

fetchComments.then(message => {
    console.log(message);
});

//2.2 - Parallel Fetching
fetchProfiles.then((message) => {
    console.log(message);
    fetchPosts.then((message) => {
        console.log(message);
        fetchComments.then((message) => {
            console.log(message);
        })
    })
})

//Part 3 - Refactor with Async/Await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

let fetchProfilesAsync = async() => {
    try {
        console.log("Fetching User Profile...");
        await delay(7000);
        console.log("Profile Fetched!");
    } catch(error) {
        console.error("Profile failed to load")
    }
};

let fetchPostsAsync = async() => {
    try {
        console.log("Fetching Post...");
        await delay(5000);
        console.log("Post Fetched!");
    } catch(error) {
        console.error("Post failed to load")
    }
};

let fetchCommentsAsync = async() => {
    try {
        console.log("Fetching Comment...");
        await delay(3000);
        console.log("Comment Fetched!");
    } catch(error) {
        console.error("Comment failed to load")
    }
};

fetchProfilesAsync();
fetchPostsAsync();
fetchCommentsAsync();

//Error Handling Simulation
let failedFetchCommentsAsync = async() => {
    try {
        console.log("Fetching Comment...");
        await dela(3000); //Typo for failure simulation
        console.log("Comment Fetched!");
    } catch(error) {
        console.error("Comment failed to load")
    }
};

fetchProfilesAsync();
fetchPostsAsync();
failedFetchCommentsAsync();

//Chaining Async Function
let getUserContent = async() => {
    try {
        await fetchProfilesAsync();
        await fetchPostsAsync();
        await fetchCommentsAsync();
    } catch(error) {
        console.error("User Content Failed to Load");
    }
};

getUserContent();