// the below array is used to hold a possible "friend"

var friendArray = [
    {
      firstName: "Bruce",
      lastName: "Wayne",
      scores: [5,5,5,4,1,1,5,3,3,1]
    },
    {
      firstName: "Clark",
      lastName: "Kent",
      scores: [1,3,2,4,5,2,2,1,1,5]
    },
    {
      firstName: "Peter",
      lastName: "Parker",
      scores: [3,4,3,1,2,4,5,5,2,1]
    },
    {
      firstName: "Tony",
      lastName: "Stark",
      scores: [1,2,3,4,5,1,2,3,4,5]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;
  