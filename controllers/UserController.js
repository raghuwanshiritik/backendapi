const UserModel = require('../model/user')
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')


class UserController {

  static userregister = async (req, res) => {
    try {
      const { name, email, password, confirmpassword } = req.body;
      const user = await UserModel.findOne({ email: email });

      if (user) {
        res.status(401).json({
          message: 'email already exists',
        })
      } else {
        if (name && email && password && confirmpassword) {
          if (password == confirmpassword) {

            const hashpassword = await bcrypt.hash(password, 10)
            const register = await new UserModel({
              name: name,
              email: email,
              password: hashpassword,

            });

            await register.save();
            res.status(201).json({
              message: 'registration sussesfully',
              register,
            })
          } else {
            res.status(401).json({
              message: 'password and confirmpassword does not match',
            })
          }
        } else {
          res.status(401).json({
            message: 'all field are required',
          })
        }
      }
    } catch (error) {
      console.log(error);
    }
  }



  // static verifylogin = async (req, res) => {
  //   try {
  //     // console.log(req.body)
  //     const { email, password } = req.body
  //     if (email && password) {
  //       const user = await UserModel.findOne({ email: email });
  //       if (user != null) {
  //         const ismatched = await bcrypt.compare(password, user.password);
  //         if (ismatched) {
  //           // generat jwt token
  //           const token = jwt.sign({ id: user._id }, "ritikraghuwanshi123");
  //           // console.log(token)
  //           res.cookie("token", token);
  //         res.status(201).json({
  //           status: "success",
  //           message: "login successfully with web token",
  //           // token:token,
  //           user,
  //         });
  //         } else {
  //           res.status(401).json({
  //             message: 'email or password is incorrect',
  //           });
  //         }

  //       } else {
  //         res.status(401).json({
  //           message: 'you are not a register user',
  //         });
  //       }
  //     } else {
  //       res.status(401).json({
  //         message: 'All fields are required',
  //       });
  //     }
  //   }
  //   catch (error) {
  //     res.send()
  //   }
  // }

  static verifylogin = async (req, res) => {
    try {
      // console.log(req.body)
      const { email, password } = req.body
      if (email && password) {
        const user = await UserModel.findOne({ email: email })
        if (user != null) {
          const ismatched = await bcrypt.compare(password, user.password);
          if (ismatched) {
            // generat jwt token
            const token = jwt.sign({ id: user._id }, "ritikraghuwanshi123");
            // console.log(token)
          //   res.cookie("token", token);
          // res.status(201).json({
          //   status: "success",
          //   message: "login successfully with web token",
            // token:token,
            res.cookie('token',token)
            res
            .status(201)
            .json({
              status:"success",
              message:"email or password not matched",
              user,
            });

          }
          } else {
            res.status(401).json({
              message: 'you are not registered',
            });
          }

        } else {
          res.status(401).json({
            message: 'All Field are required',
          });
        }
    }
    catch (error) {
      res.send()
    }
  }


}

module.exports = UserController