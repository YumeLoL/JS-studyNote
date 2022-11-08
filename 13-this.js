// using this inside an object
// the object has functions created three different
// what will be the result of the three log statements


const circle = {
  radius: 10,
  circumference: function () {
    return this.radius; // this is 10
  },
  diameter() {
    console.log(this)
    return this.radius * 2; // this is 10
  },
  area: () => {
    // console.log(this)
    return this.radius; // this is undefined (it is looking for something called radius on the global scope)
  },
};

console.log(circle.area())
