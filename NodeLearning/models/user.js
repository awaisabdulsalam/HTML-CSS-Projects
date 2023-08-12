const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const jsonFilePath = path.join(process.cwd(), "data", "users.json");

const readData = () => {

  //?  readFile ma callback hy iss liye jb is ko createUser ma call krein gy
  //?  tuo thora time lagy ga data get krne ma iss liye Promise use krte hain

  return new Promise((resolve, reject) => {
    fs.readFile(jsonFilePath, (err, data) => {
        if (err) {
            return reject(err)
        }
        //!  1. data binary ma milte isse pehle STRING ma krein gy
        //!  2. phir data ko object ma convert kre gy
        resolve(JSON.parse(data.toString()));
    });
  });
}


const writeData = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(jsonFilePath, JSON.stringify(data), (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};


//?   Uper hum ne Promise return kiye tuo hum await lga skte hain
exports.createUser = async (email, password, userId) => {
  try {
    const users = await readData();
    const matched = users.find(user => user.email === email);
    if (!!matched) {
      return "User already exist";
    } else {
        // const encPassword = await bcrypt.hash(password, 12);
        await writeData([...users, { email, password, userId }]);
        return "User Successfully Created";
    }
  } catch (err) {
    throw err;
  }
};


exports.findUser = async (email) => {
  try {
    const users = await readData();
    const matched = users.find((user) => user.email === email);
    return matched;
  } catch (err) {
    throw err;
  }
};
