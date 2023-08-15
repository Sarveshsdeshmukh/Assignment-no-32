// const fs = require("fs");

// const data =
//   "Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.";

// fs.writeFileSync("nodejs_architecture.txt", data);

// const readFile = fs.readFileSync("nodejs_architecture.txt");

// console.log(readFile.toString());

// const newData ="Popularity often comes with misconception and rumours. Due to the fact that Node.js became very popular, there are a lot of false beliefs about this technology.";

// fs.appendFileSync("nodejs_architecture.txt", newData);

// const data = fs.readFileSync("nodejs_architecture.txt");

// console.log(data.toString());


const fs = require("fs");

fs.unlink("./nodejs_architecture.txt", () =>
  console.log("File Deleted SuccessFully")
);