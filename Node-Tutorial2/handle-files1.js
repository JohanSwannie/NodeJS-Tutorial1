const fs = require("fs");
const path = require("path");

// Read File

fs.readFile("./Files/file1.txt", (error, data) => {
  if (error) {
    throw error;
  }
  console.log(data.toString());
});

process.on("uncaughtException", (error) => {
  console.error(`There was an uncaught error in "file1.txt": ${error}`);
  process.exit(1);
});

// OR

fs.readFile(
  path.join(__dirname, "Files", "file2.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      throw error;
    }
    console.log(data);
  }
);

fileAsyncRead();

// Write File

fs.writeFile(
  path.join(__dirname, "Files", "file3.txt"),
  "We aim to complete the job by Friday",
  "utf8",
  (error) => {
    if (error) {
      throw error;
    }
    console.log("Write successful");
  }
);

// Append File (new file)

fs.appendFile(
  path.join(__dirname, "Files", "file4.txt"),
  "This is a new request from the users",
  "utf8",
  (error) => {
    if (error) {
      throw error;
    }
    console.log("Append 1 successful");
  }
);

fs.appendFile(
  path.join(__dirname, "Files", "file4.txt"),
  "\n\nThe user will have to wait at least 4 hours for this problem to be resolved",
  "utf8",
  (error) => {
    if (error) {
      throw error;
    }
    console.log("Append 2 successful");
  }
);

// Delete File

// fs.unlink(path.join(__dirname, "Files", "tenthfile.txt"), (error) => {
//   if (error) {
//     throw error;
//   }
//   console.log("File deleted successfully");
// });
