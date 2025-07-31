const arrOfNums = [10, 20, 30, 40, 50]
// forEach | ES6 --- cannot break the loop, takes callback fxn and for each callback gets executed with that item value and index
arrOfNums.forEach(item => {
    console.log(item)
    if (item > 20) {
        break;
    }
})
