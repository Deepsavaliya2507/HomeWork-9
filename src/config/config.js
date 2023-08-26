const Joi = require("joi");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const envVarsSchema = Joi.object({
    PORT : Joi.number().default(3000),
    MONGODB_URL: Joi.string().trim().description("Mongodb url"),
}).unknown();


const {value: envVars, error} = envVarsSchema
.prefs({ errors: {label: "key"} })
.validate(process.env);

if (error) {
    console.log("Config error", error);
}

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        option: {
        userNewUrlParser: true,
        useUnifiedTopology: true,
        }
    }
}