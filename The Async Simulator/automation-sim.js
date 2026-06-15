class ShoppingCart {
  async scanItem(id) {
    console.log(`Scanning item ${id}...`);

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    console.log(`Item ${id} scanned successfully.`);

    return {
      id,
      scanned: true,
    };
  }
}

async function processItems() {
  const cart = new ShoppingCart();
  const items = [101, 102, 103];

  const startTime = performance.now();

  for (const itemId of items) {
    await cart.scanItem(itemId);
  }

  const endTime = performance.now();
  const totalTime = (endTime - startTime) / 1000;

  console.log(`Total Execution Time: ${totalTime.toFixed(2)} seconds`);
}

processItems().catch((error) => {
  console.error("Failed to process shopping cart items:", error);
});
