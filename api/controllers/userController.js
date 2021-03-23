import passport from "passport";
import User from "../models/User";

export const postLogin = (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send({ status: 400, msg: info.message });
    }
    req.logIn(user, function (err) {
      const { name, email, favlist, _id } = user;
      const u = { name, email, favlist, id: _id };
      if (err) {
        return next(err);
      }
      return res.send({ status: 200, user: u });
    });
  })(req, res, next);
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password },
  } = req;
  try {
    const user = await User({
      name,
      email,
    });
    await User.register(user, password);
    const u = { name, email, favlist: [], id: user._id };
    console.log(u);
    res.send({ status: 200, user: u });
  } catch (error) {
    res.send({ status: 400, msg: error.message });
  }
};

export const postEditUser = async (req, res, next) => {
  const {
    body: { email, favlist },
  } = req;
  try {
    const user = await User.findOne({ email });
    user.favlist = favlist;
    await user.save();
    return res.send({ status: 200 });
  } catch (error) {
    res.send({ status: 400, msg: error.message });
  }
};
