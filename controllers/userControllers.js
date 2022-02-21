const User = require("../models/userModels");

async function showUser(req, res) {
  /* const allUsers = await User.find();
  res.json(allUsers); */
  const newUser = new User({
    firstName: "Juanasdasd",
    lastName: "juanasdasda",
    age: 122323,
    jojo: "el mejor",
  });
  await newUser.save();
  res.end("ad user");
}
async function addUser(req, res) {
  const newUser = new User({
    firstName: "Juan",
    lastName: "juan",
    age: 12,
    jojo: "el mejor",
  });
  await newUser.save();
  res.end("ad user");
}

module.exports = { showUser, addUser };
