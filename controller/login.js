const db = require("../routes/db-config");
const checklogin = require("bcryptjs");

const login = async(req, res) => {
    const { email, password } = req.body;
    if(!email || !password)
    {
        return res.json({ status: "error", error: "Please Enter Valid Email and Password" });
    }else{
        db.query("select * from registered_user where email = ? AND password = ?", [email, password], async(err, result) => {
            if(err)
            {
                throw err;
            }
            if(!result[0])
            {
                return res.json({status: "error", error: "Incorrect Credentials!!"});
            }else{
                return res.json({ status: "success", success: "Login Successfully" });
            }
        })
    }
}

module.exports = login;
