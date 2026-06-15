console.log("1. Synchronous start");

setTimeout(() => {
  console.log("4. setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise callback");
});

console.log("2. Synchronous end");
