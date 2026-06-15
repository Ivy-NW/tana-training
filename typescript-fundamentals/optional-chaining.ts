type TestEnvironment = {
  browser?: {
    name?: string;
    version?: string;
  };
  operatingSystem?: string;
};

type TestExecution = {
  testName: string;
  environment?: TestEnvironment;
};

const executionOne: TestExecution = {
  testName: "Login test",
  environment: {
    browser: {
      name: "Chrome",
      version: "148",
    },
    operatingSystem: "Windows 10",
  },
};

const executionTwo: TestExecution = {
  testName: "Checkout test",
};

function displayEnvironment(execution: TestExecution): void {
  const browserName =
    execution.environment?.browser?.name ?? "Browser not provided";

  const browserVersion =
    execution.environment?.browser?.version ?? "Version not provided";

  const operatingSystem =
    execution.environment?.operatingSystem ?? "OS not provided";

  console.log(`Test: ${execution.testName}`);
  console.log(`Browser: ${browserName}`);
  console.log(`Version: ${browserVersion}`);
  console.log(`Operating system: ${operatingSystem}`);
}

displayEnvironment(executionOne);
console.log("");
displayEnvironment(executionTwo);
