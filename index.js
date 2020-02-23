const filterDuplicate = (array) => {
  const repeats = array.filter((item, index) => {
    return array.indexOf(item) !== index;
  })
  return repeats.length > 0 ? repeats[0] : -1;
}
let a = [2, 1, 4, 5, 3, 2];
let duplicate = filterDuplicate(a);
console.log(duplicate);
