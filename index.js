// Code your solution in this file!
const distanceFromHqInBlocks = (blocks) => {
  if (blocks > 42) {
    return blocks - 42;
  } else {
    return 42 - blocks;
  }
};
console.log(distanceFromHqInBlocks(30));

const distanceFromHqInFeet = (blocks) => distanceFromHqInBlocks(blocks) * 264;

distanceFromHqInFeet(30);

const distanceTravelledInFeet = (start, destination) => {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
};
console.log(distanceFromHqInFeet);
const calculatesFarePrice = (start, destination) => {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
};
