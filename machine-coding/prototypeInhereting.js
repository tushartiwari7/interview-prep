const person = {
  alive: true,
  student: true,
  familyMembers: 5,
  name: "mariya",
  get info() {
    console.log("this", this);
    return this.name + this.familyMembers;
  },
};

const tushar = {
  name: "Tushar",
  __proto__: person,
};

console.log(tushar.info);
