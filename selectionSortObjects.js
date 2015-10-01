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
    var min = [i].age;
    for(var j = i+1; j < length; j++) {
      if(arr [j].age > arr[min]){
        min = [j].age;
      }
    }
    if (min != i.age) {
      var k = arr[i].age;
      arr[i].age = arr[min];
      arr[min] = k;
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