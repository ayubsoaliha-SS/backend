const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { id: 1 },
  "secretkey",
  { expiresIn: "15m" }
);

console.log(token);

// Flow:

// Login
// Generate JWT
// Send to client
// Client stores token
// Client sends token in headers

//Middleware Examples

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "No token"
    });
  }

  next();
};

// Where to Store JWT?

// Storage	            Pros	     Cons
// localStorage	        Easy     	XSS risk
// memory	              Secure    	Lost on refresh
// httpOnlycookie      Safest     	CSRF concerns