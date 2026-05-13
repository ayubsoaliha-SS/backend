//  Input validation is the first line of defense 
// in API development, ensuring that data is safe, 
// valid, and properly formatted before processing.


const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email().required()
});