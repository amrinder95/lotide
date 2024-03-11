const middle = function(array) {
  let newArray = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      let evenIndex2 = array.length / 2
      let evenIndex1 = evenIndex2 - 1
      newArray.push(array[evenIndex1], array[evenIndex2]) 
    } if (array.length % 2 === 1) {
      let oddIndex = Math.floor(array.length / 2)
      newArray.push(array[oddIndex])
    }
  }
  return newArray;
}


module.exports = middle;