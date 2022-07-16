const fs = require("fs");
const chalk = require("chalk");

//import fsPromises from 'fs/promises';
const fsPromises = require("fs/promises");

function manejarDatos(err, data) {
  if (err) {
    if (err.code === "ENOENT") {
      console.log(chalk.red.bold("Error: Oye, ese archivo no existe"));
    }
  } else {
    console.log(data.split("\n"));
  }
}

//Callback
fs.readFile("./ejemplo.txt", "utf-8", function (err, data) {
  if (err) {
    if (err.code === "ENOENT") {
      console.log(chalk.red.bold("Error: Oye, ese archivo no existe"));
    }
  } else {
    console.log(data.split("\n"));
  }
});
fs.readFile("./ejemplo.txt", "utf-8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.log(chalk.red.bold("Error: Oye, ese archivo no existe"));
    }
  } else {
    console.log(data.split("\n"));
  }
});
fs.readFile("./ejemplo.txt", "utf-8", manejarDatos);
//Promise
fsPromises
  .readFile("./ejemplos.txt", "utf-8")
  .then((data) => {
    console.log(data.split("\n"));
  })
  .catch((err) => {
    if (err.code === "ENOENT") {
      console.log(chalk.red.bold("Error: Oye, ese archivo no existe"));
    }
  });
//Async/Await

const manejarArchivoAsync = async () => {
  try {
    const data = await fsPromises.readFile("./ejemplo.txt", "utf-8");
    console.log("async");
    console.log(data.split("\n"));
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(chalk.red.bold("Error: Oye, ese archivo no existe"));
    }
  }
};

manejarArchivoAsync();
