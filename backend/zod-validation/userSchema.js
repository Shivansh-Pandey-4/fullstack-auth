const zod = require("zod");

const userSignupSchema = zod.object({
     email : zod.string().email(),
     name : zod.string().max(50),
     password : zod.string().max(30)
});

const userLoginSchema = zod.object({
     email : zod.string().email(),
     password : zod.string().max(30)
});

module.exports = {userLoginSchema, userSignupSchema};