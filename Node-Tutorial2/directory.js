const fs = require("fs");

if (!fs.existsSync("./directory")) {
  fs.mkdir("./directory", (error) => {
    if (error) {
      throw error;
    }
    console.log("Directory Created");
  });
}

if (fs.existsSync("./directory")) {
  fs.rmdir("./directory", (error) => {
    if (error) {
      throw error;
    }
    console.log("Directory Removed");
  });
}
