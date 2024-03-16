/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developer = arr.map((employee) => {
    if(employee.profession === "developer"){
      return employee;
    }
  });
  console.log(developer);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee) => {
    if(employee.profession === "developer"){
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let newEmp = {id: 4, name: "Uzer", age: "25", profession: "intern"}
  arr.push(newEmp);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let updateArr = arr.filter((employee) => employee.profession !== "admin");
  console.log(updateArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    {id: 5, name: "Elon", age: "45", profession: "ceo"},
    {id: 6, name: "Mark", age: "40", profession: "manager"},
    {id: 7, name: "Mike", age: "22", profession: "UI/UX developer"}
  ];
  let combineArr = arr.concat(newArr);
  console.log(combineArr);
}

// PrintDeveloperbyMap();
// PrintDeveloperbyForEach();
// addData();
// removeAdmin();
// concatenateArray();