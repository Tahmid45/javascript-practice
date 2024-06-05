var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

function myArrayMax(friends) {
    let len = friends.length;
    let max = -Infinity;
    while (len--) {
      if (friends[len].length > max) {
        max = friends[len];
      }
    }
    return max;
  }

console.log(myArrayMax(friends));