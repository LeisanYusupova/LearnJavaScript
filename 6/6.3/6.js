let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  //по имени (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(users);

//по возрасту (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);

function byField(item) {
    return (a,b) => a[item] > b[item] ? 1 : -1;
}

