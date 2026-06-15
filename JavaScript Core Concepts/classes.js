class TestCase {
  constructor(id, title, priority) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.status = "Not Run";
  }

  execute(actualResult, expectedResult) {
    this.status =
      actualResult === expectedResult ? "Passed" : "Failed";

    return this.status;
  }

  displayResult() {
    console.log(`Test ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Priority: ${this.priority}`);
    console.log(`Status: ${this.status}`);
  }
}

class AutomatedTestCase extends TestCase {
  constructor(id, title, priority, framework) {
    super(id, title, priority);
    this.framework = framework;
  }

  displayResult() {
    super.displayResult();
    console.log(`Framework: ${this.framework}`);
  }
}

const loginTest = new AutomatedTestCase(
  "TC-001",
  "Verify user can log in with valid credentials",
  "High",
  "Playwright"
);

loginTest.execute("Products page displayed", "Products page displayed");
loginTest.displayResult();

console.log("");

const sortingTest = new AutomatedTestCase(
  "TC-002",
  "Verify products sort from low to high",
  "Medium",
  "Playwright"
);

sortingTest.execute("Products remained unsorted", "Products sorted correctly");
sortingTest.displayResult();
