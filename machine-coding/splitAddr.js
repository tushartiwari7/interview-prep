const str = "red/green/blue";
const obj = {};
let ref = obj;

for (let index = 0; index < str.length; index++) {
  const char = str[index];
  if (char === "/") {
    ref.child = {};
    ref = ref.child;
  } else ref.value = (ref.value ?? "") + char;
}
console.log(obj);
