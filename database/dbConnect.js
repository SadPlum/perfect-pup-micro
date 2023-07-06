const { createClient } = require("@supabase/supabase-js");
const dotenv = require("dotenv").config().parsed;

const supabaseUrl = dotenv.SUPABASE_URL;
const supabaseKey = dotenv.SUPABASE_KEY;

// console.log(supabaseKey);
// console.log("parsed", process.env.parsed);

// console.log(process.env);

// console.log(require("dotenv").config());
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
