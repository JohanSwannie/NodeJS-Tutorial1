const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(
  path.join(__dirname, "Files", "lorem1.txt"),
  "utf8"
);

const ws = fs.createWriteStream(path.join(__dirname, "Files", "lorem2.txt"));

rs.pipe(ws);

// OR

rs.on("data", (dataPortion) => {
  ws.write(dataPortion);
});
