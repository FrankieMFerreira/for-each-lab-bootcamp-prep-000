function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var arrayhere = ["testing1", "testing2", "testing3"]
  arrayhere.forEach(callback)
  return arrayhere
}

function doToArray(array, callback) {
  array.forEach(callback)
}
