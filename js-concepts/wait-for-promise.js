console.log("START");
function a() {
  return new Promise((res, rej) =>
    setTimeout(() => {
      res("RESOLVEd");
    }, 2000)
  );
}

async function b() {
  console.log("des");
  await a();
  console.log("Afer");
}
b();
console.log("END");
