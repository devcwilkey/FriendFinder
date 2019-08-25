// the below array is used to hold a possible "friend"

var friendArray = [
    {
      firstName: "Test",
      lastName: "Profile",
      photo: "https://pbs.twimg.com/profile_banners/29397000/1531072924/1080x360",
      scores: [0,0,0,0,0,0,0,0,0,0]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;
  