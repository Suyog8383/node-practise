const fs = require("fs");
//fs.writeFileSync("apple.txt", "this is a fruit");

const path = require("path");
const dirPath = path.join(__dirname, "files");
// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(dirPath + `/hello${i}.txt`, `this is hello${i} file`);
// }
// console.log(dirPath);

fs.readdir(dirPath, (arr, files) => {
  files.forEach((item) => console.log("@SN ", item));
});
