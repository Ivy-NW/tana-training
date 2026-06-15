function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

function createTestMessage(
  testName: string,
  status: string,
): string {
  return `${testName} completed with status: ${status}`;
}

function displayTester(name: string, role: string = "QA Engineer"): void {
  console.log(`${name} works as a ${role}`);
}

const total: number = calculateTotal(25.5, 3);

console.log(`Cart total: $${total}`);
console.log(createTestMessage("Login test", "Passed"));

displayTester("Ivy");
