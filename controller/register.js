const db = require("../routes/db-config");

const register = async (req, res) => {
    const { email, password, uname, contact } = req.body;

    if (!email || !password || !uname || !contact) {
        return res.json({ status: "error", error: "Please Enter Valid Data" });
    } else {
        db.query("select email from registered_user where email = ?", [email], async (err, result) => {
            if (err) {
                throw err;
            }
            if (result[0]) {
                return res.json({ status: "error", error: "Email is already registered" });
            } else {
                db.query("insert into registered_user set ?", { uname: uname, email: email, password: password, contact: contact }, (error, results) => {
                    if (error) {
                        throw error;
                    }else{
                        return res.json({ status: "success", success: "Registration Done Successfully" });
                    }
                })
            }
        })
    }
}
module.exports = register;