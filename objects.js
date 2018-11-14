function updateObjectWithKeyAndValue (obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

const nuts = {peanuts: 10}

updateObjectWithKeyAndValue(nuts, cashews, 15)

console.log(nuts)