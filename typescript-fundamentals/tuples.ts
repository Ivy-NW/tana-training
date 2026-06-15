type TestResult = [string, string, number];

const loginResult: TestResult = [
  "Valid login test",
  "Passed",
  2.5,
];

const checkoutResult: TestResult = [
  "Checkout test",
  "Failed",
  4.2,
];

console.log("Login result:", loginResult);
console.log("Test name:", loginResult[0]);
console.log("Status:", loginResult[1]);
console.log("Duration:", `${loginResult[2]} seconds`);

console.log("\nCheckout result:", checkoutResult);
