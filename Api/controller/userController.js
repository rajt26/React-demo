const User = require("../model/user");

module.exports = {
  create(req, res) {
    return new Promise(function (resolve, reject) {
      let params = req.body;
      return User.create(params).then((result) => {
        if (result) {
          return resolve(res.send(result));
        } else {
          reject(new Error({ msg: "It does not work" }));
        }
      });
    });
  },

  //   async create(req, res) {
  //     let params = req.body;
  //     if (params.dateOfJoining) {
  //       params.dateOfJoining = moment().format();
  //     }
  //     let create = await User.create(params);
  //     return res.send(create);
  //   },

  async getUsers(req, res) {
    try {
      let params = req.body;
      let filter = {
        isActive: true,
        dateOfJoining: {
          $gte: new Date(params.from),
          $lte: new Date(params.to),
        },
        updatedAt: {
          $gte: new Date(params.to),
        },
      };
      let users = await User.find(filter);
      return res.send(users);
    } catch (error) {
      console.log("error", error);
      return res.status(401).json({ error: error });
    }
  },
};
