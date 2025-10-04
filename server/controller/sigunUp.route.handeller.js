import { Suppliers } from "../models/supplierModel.js";
import { supplierSchema } from "../models/supplierModel.js";
import { userSchema } from "../models/userModel.js";
import { Users } from "../models/userModel.js";
import { signup } from "../utils/signup.js";

async function signUpHandeller(req, res) {
    if (req.body.role == "supplier") {
        signup(req, res, Suppliers, supplierSchema);
    }else if(req.body.role == "user") {
        signup(req, res, Users, userSchema);
    }else{
        res.json(false)
    }
}
// https://www.youtube.com/watch?v=LkmBgjy_vEc

export { signUpSupplierHandeller, signUpHandeller }