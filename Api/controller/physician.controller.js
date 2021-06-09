const Physician = require("../model/physician");
const Cities = require('../model/cities')
const jwt = require("jsonwebtoken");
const Bcrypt = require("bcryptjs");
const { db } = require("../model/physician");
module.exports = {
  async create(req, res) {
    try {
      let params = req.body;
      const emailRegx = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
      const pwdRegx = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      );

      if (params && params.password) {
        let passwordMatched = params.password.match(pwdRegx);
        if (!passwordMatched) {
          return res
            .status(401)
            .json({
              error:
                "The password must contain at least 1 lowercase,1 uppercase, 1 number,1 special character",
            });
        }
      }
      if (
        params.password &&
        params.confirmPassword &&
        params.password != params.confirmPassword
      ) {
        return res.status(401).json({
          error: "password and confirm password should not be different!!",
        });
      }
      params.password = Bcrypt.hashSync(params.password, 10);
      let emailMatched = params.email.match(emailRegx);
      if (!emailMatched) {
        return res.status(401).json({ error: "please enter valid email" });
      }

      let userEmail = await Physician.findOne({ email: params.email });
      if (userEmail) {
        return res.status(401).json({ error: "user already exists!!!" });
      }

      let create = await Physician.create(params);
      return res.send(create);
    } catch (error) {
      console.log(error);
      return res.status(401).json({ error: error });
    }
  },
  async update(req, res) {
    try {
      let params = req.body;
      let update = await Physician.findOneAndUpdate({_id: params.id }, params);
      return res.send(update);
    } catch (error) {
      console.log(error);
      return res.status(401).json({ error: error });
    }
  },
  async delete(req, res) {
    try {
      let params = req.body;
      let deletedata = await Physician.deleteOne({ _id: params.id });
      return res.send(deletedata);
    } catch (error) {
      console.log(error);
      return res.status(401).json({ error: error });
    }
  },

  async getData(req, res) {
    try {
      let data = await Physician.find();
      return res.send(data);
    } catch (error) {
      console.log(error);
      return res.status(401).json({ error: "data not found" });
    }
  },

  async login(req, res) {
    let physician = await Physician.findOne({ email: req.body.email });
    console.log('physician',req.body);
    let valid = await Bcrypt.compare(req.body.password, physician.password);
    if (!valid) return res.status(401).json({ error: "user not found" });
    const createToken = jwt.sign(
      {
        id: physician.id,
      },
      process.env.SECERET_TOKEN
    );
    res.header("Authorization", createToken).json({
      error: null,
      data: { createToken,physician },
    });
  },


  async check(req,res){


  let duplicateCities = await Cities.aggregate([
    {
        '$match': {
          'State_id': 11
        }
      },
     {
         "$group": {
             _id: {Cityname: "$Cityname"},
             dups: { $addToSet: "$_id" } ,
             count: { $sum : 1 }
         }
     }])

     console.log('duplicateCities',duplicateCities);
     for(let data of duplicateCities[0].dups ){
      await Cities.updateOne({_id:data},{$set:{State_id:12}})
      console.log('data',data);
      return;
     }

     return true;
}
};
