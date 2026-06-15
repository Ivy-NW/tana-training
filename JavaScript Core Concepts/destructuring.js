const tester = {
  name: "Ivy Njoroge",
  role: "QA Engineer",
  tools: ["Azure DevOps", "Postman", "Playwright"],
  location: {
    city: "Nairobi",
    country: "Kenya",
  },
};

const { name, role, tools } = tester;
const { city, country } = tester.location;
const [firstTool, secondTool, thirdTool] = tools;

console.log("Name:", name);
console.log("Role:", role);
console.log("Location:", city, country);
console.log("First tool:", firstTool);
console.log("Second tool:", secondTool);
console.log("Third tool:", thirdTool);

const testResult = ["Login test", "Passed", 2.5];

const [testName, status, duration] = testResult;

console.log("\nTest result:");
console.log(`${testName} - ${status} - ${duration} seconds`);
