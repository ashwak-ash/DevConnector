const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {

    res.status(500).json({ msg: 'Server Error' });
  }
};

// const jwt =require('jsonwebtoken');
// const config=require('config');


// module.exports=function(req,res,next){
    
//     const token=req.header('x-auth-token');
//     // console.log("token",token);
    
//     // console.log("gg");
//     if(!token){
//         return res.status(401).json({msg : 'No token '});
//     }
//     try{
//         const decode=jwt.verify(token,config.get('jwtSecret'));

//         req.user=decode.user;
//         next();

//     }catch(err){
//         return res.status(401).json({msg : 'not a valid token '});
//     }

// }



