type TestCase = {
  id: number;
  title: string;
  priority: string;
  automated: boolean;
};

const loginTest: TestCase = {
  id: 101,
  title: "Verify valid user login",
  priority: "High",
  automated: true,
};

const checkoutTest: TestCase = {
  id: 102,
  title: "Verify successful checkout",
  priority: "High",
  automated: false,
};

function displayTestCase(testCase: TestCase): void {
  console.log(`ID: ${testCase.id}`);
  console.log(`Title: ${testCase.title}`);
  console.log(`Priority: ${testCase.priority}`);
  console.log(`Automated: ${testCase.automated}`);
}

displayTestCase(loginTest);
console.log("");
displayTestCase(checkoutTest);
