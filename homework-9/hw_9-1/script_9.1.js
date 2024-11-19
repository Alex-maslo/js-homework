let block = document.createElement("div");
let classList = ["wrap", "collapse", "alpha", "beta"];

classList.forEach((className) => {
  block.classList.add(className);
});

let blockClone = block.cloneNode(true);
document.body.append(block, blockClone);
