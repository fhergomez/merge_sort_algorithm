var persons = [
  {
  "name": "john",
  "age": "23"
  },
  {
  "name": "harry",
  "age": "21"
  },
  {
  "name": "jack",
  "age": "25"
  }
];

function selectionSortObjects (arr){
  var length = arr.length;
  for(var i = 0; i < length; i++){
    var min = {
      value: arr[i],
      index: [i]
    }
    for(var j = i+1; j < length; j++) {
      if(arr[j].age < min.value.age){
        min.value = arr[j];
        min.index = j;
      }
    }
    if (min.value != arr[i]) {
      var k = arr[i];
      arr[i].age = min.value;
      arr[min.index] = k;
    }
  }
  return arr;
}

console.log(selectionSortObjects(persons));
console.log(persons[0].age);
// persons.sort(function(a,b){
//   return a.age-b.age;
// })
// console.log(persons);