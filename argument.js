//console.log(process.argv[2]); //argumnet from commond line

//create file from command line
const fs = require("fs");
const input = process.argv;
if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("@SN invalid output");
}

//1.add
// node argument.js add baba.txt 'this is a man'
//2.remove
// node argument.js remove baba.txt

// node argument.js removed baba.txt
// @SN invalid output
