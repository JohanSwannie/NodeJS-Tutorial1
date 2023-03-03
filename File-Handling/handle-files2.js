const fsPromises = require("fs").promises;
const path = require("path");

// Asynchronous File Operations

const fileAsyncRead = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "Files", "asyncfile1.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "Files", "asyncfile1b.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "Files", "asyncfile1b.txt"),
      "\n\nFile has been read and appended asynchronously"
    );
    await fsPromises.rename(
      path.join(__dirname, "Files", "asyncfile1b.txt"),
      path.join(__dirname, "Files", "asyncfile2.txt")
    );
    await fsPromises.unlink(path.join(__dirname, "Files", "dummyfile2.txt"));
  } catch (error) {
    console.error(error);
  }
};

fileAsyncRead();
