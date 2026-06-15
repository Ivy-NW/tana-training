const wait = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function processUser(user) {
  await wait(1000);
  console.log(`Processed user: ${user}`);
}

const users = ["Ivy", "Julia", "John"];

async function incorrectExample() {
  console.log("Incorrect forEach example started");

  users.forEach(async (user) => {
    await processUser(user);
  });

  console.log("Incorrect forEach example finished");
}

async function sequentialExample() {
  console.log("\nSequential for...of example started");

  for (const user of users) {
    await processUser(user);
  }

  console.log("Sequential example finished");
}

async function parallelExample() {
  console.log("\nParallel Promise.all example started");

  await Promise.all(users.map((user) => processUser(user)));

  console.log("Parallel example finished");
}

async function main() {
  await incorrectExample();
  await wait(3500);

  await sequentialExample();
  await parallelExample();
}

main().catch((error) => {
  console.error("Execution failed:", error);
});
