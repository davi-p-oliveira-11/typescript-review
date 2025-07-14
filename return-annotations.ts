//Regular Function
function double1(x: number): number {
   return x * x;
}

const res4 = double1(2)
console.log(res4);

// Using Arrow Functions

const double2 = (x: number): number => x * x;
const res5 = double2(2);
console.log(res5);