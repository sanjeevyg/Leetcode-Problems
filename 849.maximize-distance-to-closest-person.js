/**
 * @param {number[]} seats
 * @return {number}
 */
 var maxDistToClosest = function(seats) {

    let maxDistance = 1;
    let leftBoundary = 0;

    while(seats[leftBoundary] === 0) {
        leftBoundary += 1;
    }

    maxDistance = Math.max(maxDistance, leftBoundary)

    if(leftBoundary === seats.length) {
        return maxDistance
    }

    let left = leftBoundary;
    let right = left + 1;

    while(right < seats.length) {
        if(seats[right] === 1) {
            maxDistance = Math.max(Math.floor((right - left)/2), maxDistance)
            left = right;
        }
        right += 1
    }

    maxDistance = Math.max(maxDistance, seats.length - left - 1)

    return maxDistance
};

console.log(maxDistToClosest([1,0,0,0,1,0,1])) //2
console.log(maxDistToClosest([1,0,0,1,0,1])) //1
console.log(maxDistToClosest([1,0,0,0])) //3
console.log(maxDistToClosest([0,1])) //1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
console.log(maxDistToClosest([0,0,0,0,1]))  //4
console.log(maxDistToClosest([0,1,0,0,0,0])) //4
console.log(maxDistToClosest([1,0,0,0])) //3
console.log(maxDistToClosest([0,1,1,1,0,0,1,0,0])) //2
console.log(maxDistToClosest([1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0])) //5
console.log(maxDistToClosest([0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0])) //3
console.log(maxDistToClosest([1,0,0,1])) //3
