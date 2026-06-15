type TestStatus = "Passed" | "Failed" | "Blocked";
type Identifier = number | string;

function printTestResult(
  testId: Identifier,
  status: TestStatus,
): void {
  console.log(`Test ${testId}: ${status}`);
}

function formatValue(value: string | number): string {
  if (typeof value === "number") {
    return value.toFixed(2);
  }

  return value.toUpperCase();
}

printTestResult(101, "Passed");
printTestResult("TC-102", "Failed");
printTestResult("TC-103", "Blocked");

console.log(formatValue(12.456));
console.log(formatValue("playwright"));
