const fs = require("fs");
const path = require("path");

const businessData =
  "\nWe need to pay close attention to this matter, in order to succeed the bussiness.";

if (!fs.existsSync("./directory")) {
  fs.mkdir("./directory", (error) => {
    if (error) {
      throw error;
    } else {
      fs.mkdir("./directory/sub-directory", (error) => {
        if (error) {
          throw error;
        }
      });
    }
    console.log(`Directory and Sub-Directory Created`);
  });
}

if (fs.existsSync("./directory/sub-directory")) {
  fs.appendFile(
    path.join(__dirname, "directory/sub-directory", "business-file.txt"),
    businessData,
    "utf8",
    (error) => {
      if (error) {
        throw error;
      } else {
        console.log(`File "business-file.txt" Written`);
      }
    }
  );
}

if (!fs.existsSync("./directory2")) {
  fs.mkdir("./directory2", (error) => {
    if (error) {
      throw error;
    } else {
      fs.mkdir("./directory2/sub-directory2", (error) => {
        if (error) {
          throw error;
        }
      });
    }
    console.log(`Directory2 and Sub-Directory2 Created`);
  });
}

if (fs.existsSync("./directory2/sub-directory2")) {
  fs.rmdir("./directory2/sub-directory2", (error) => {
    if (error) {
      throw error;
    }
    console.log("sub-directory2 Removed");
  });
}
