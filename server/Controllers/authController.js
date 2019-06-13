
const db = require('../DB/index.js')

const authController = {};

authController.createUser = (req, res, next) => {
  // write code here
  // validating the request body (username and password)
  if (typeof req.body.username !== 'string' || req.body.username.match(/^\s*$/) 
  || typeof req.body.password !== 'string' || req.body.password.match(/^\s*$/)){
    return next('Invalid Username or Password');
  } 
  
  const target = 'Insert INTO users("username", "password") VALUES($1, $2)'
  const values = [req.body.username, req.body.password]

  // save that user to the collection
  db.query(target, values, (err, user) => {
    if (err) {
      return next(err)
    }

    res.locals.id = user.id;
    // call next
    return next();
  });
};