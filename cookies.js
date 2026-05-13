// Attribute	  Purpose
// HttpOnly 	Prevent JS access
// Secure	    HTTPS only
// SameSite  	Prevent CSRF


res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "strict"
});