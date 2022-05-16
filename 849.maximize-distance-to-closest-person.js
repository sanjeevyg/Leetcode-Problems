/**
 * @param {number[]} seats
 * @return {number}
 */
 var maxDistToClosest = function(seats) {
     //Find smallest and largest index of zero in longest sequence of zero
     //Count the total number of zeroes in longest sequence of zero.
     //If largest index of zero is equal to length of seats, max distance equates largest index.
     //If smallest index of zero in largest sequence is equal to zero, max distance equest to number of zeroes. 
     //If the edges condition do not apply, find the max distance based on if the length of largest sequence is odd or even.

    let max = 0;
    let maxSoFar = 0;
    let maxIndex = 0;
    let minIndex = seats.indexOf(0);
    let maxDistance = 1;

    for(let i = 0; i < seats.length; i++) {
        max = seats[i] === 0 ? max + 1 : 0;
        if(max < maxSoFar) {
            maxIndex = maxIndex
        } else if(seats[i] === 0) {
            maxIndex = i;
        }

        maxSoFar = Math.max(max, maxSoFar);

        minIndex = maxIndex - maxSoFar + 1
    }


    if(seats[seats.length - 1] === 0) {
        let count = 0;
        for(let i = seats.length - 1; i >= 0 ; i--) {
            if(seats[i] != 0) break;
            count++
        }
        maxDistance = count;
    }

    if(seats[0] === 0) {
        let countF = 0;
        for(let i = 0; i < seats.length - 1; i++) {
            if(seats[i] != 0) break;
            countF++
        }
        maxDistance = Math.max(countF, maxDistance)
     }
    
    let maxD = maxSoFar % 2 === 0 ? maxSoFar/2 : Math.ceil(maxSoFar/2)
    
    maxDistance = Math.max(maxDistance, maxD)

    return maxDistance
};

console.log(maxDistToClosest([1,0,0,0,1,0,1]))  //2
console.log(maxDistToClosest([1,0,0,1,0,1])) //1
console.log(maxDistToClosest([1,0,0,0])) //3
console.log(maxDistToClosest([0,1])) //1
console.log(maxDistToClosest([0,0,0,0,1]))  //4
console.log(maxDistToClosest([0,1,0,0,0,0])) //4
console.log(maxDistToClosest([1,0,0,0])) //3
console.log(maxDistToClosest([0,1,1,1,0,0,1,0,0])) //2
console.log(maxDistToClosest([1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0])) //5
console.log(maxDistToClosest([0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0])) //3
