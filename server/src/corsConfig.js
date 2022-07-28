const cors = require('cors');

if (process.env.NODE_ENV !== "production") {
  // Load environment variables from .env file in non prod environments
  require("dotenv").config()
}

const whitelist = process.env.WHITELISTED_DOMAINS
? process.env.WHITELISTED_DOMAINS.split(",")
: [];

const corsConfig = (app) => {
    const corsOptions = {
        origin: function (origin, callback) {
          if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
          } else {
            callback(new Error("Not allowed by CORS"));
          }
        },
      
        credentials: true,
    };
    app.use(cors(corsOptions));
};

module.exports = corsConfig;