// export const usernameController = (req, res) => {
//   const username = req.params.username;
//   res.send(`Welcome ${username}`);
// };

// export const searchController = (req, res) => {
//   const keyword = req.query.keyword;
//   res.send(`You searched for ${keyword}`);
// };

export const userLoginController = (req, res) => {
  res.send("You are on user Logedin Route ");
};

export const userSignupController = (req, res) => {
  res.send("You are user on User Signup Route ");
};
