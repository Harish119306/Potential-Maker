// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors());

// mongoose
//   .connect("mongodb+srv://harish1234:AuI07e6lZGl0j2PL@cluster0.dftl6th.mongodb.net/?retryWrites=true&w=majority")
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
 
// });
// const User = mongoose.model("User", userSchema);


// app.post("/login", (req, res)=> {
//   const { email, password} = req.body
//   User.findOne({ email: email}, (err, user) => {
//       if(user){
//           if(password === user.password ) {
//               res.send({message: "Login Successfull", user: user})
//           } else {
//               res.send({ message: "Password didn't match"})
//           }
//       } else {
//           res.send({message: "User not registered"})
//       }
//   })
// }) 

// app.post("/register", (req, res)=> {
//   const { name, email, password} = req.body
//   User.findOne({email: email}, (err, user) => {
//       if(user){
//           res.send({message: "User already registerd"})
//       } else {
//           const user = new User({
//               name,
//               email,
//               password
//           })
//           user.save(err => {
//               if(err) {
//                   res.send(err)
//               } else {
//                   res.send( { message: "Successfully Registered, Please login now." })
//               }
//           })
//       }
//   })
  
// }) 

// app.listen(9002,() => {
//   console.log("BE started at port 9002")
// })
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose
  .connect("mongodb+srv://harish1234:AuI07e6lZGl0j2PL@cluster0.dftl6th.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      if (password === existingUser.password) {
        res.send({ message: "Login Successful", user: existingUser });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" }); // Handle errors gracefully
  }
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.send({ message: "User already exists" });
    } else {
      const user = new User({ name, email, password });
      await user.save();
      res.send({ message: "Successfully Registered, Please login now." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" }); // Handle errors gracefully
  }
});

app.listen(9002, () => {
  console.log("BE started at port 9002");
});
