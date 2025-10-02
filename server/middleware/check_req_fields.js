import { validateFields } from "../utils/validateFields.js"
import { supplierSchema } from "../models/supplierModel.js"
import { check_req_fields_from_schema } from "../utils/checkReqFields.js";


// console.log(check_req_fields_from_schema(supplierSchema))

function check_for_req_fields(req, res, next) {
  console.log("req.body",req.body)
  let req_fields = check_req_fields_from_schema(supplierSchema)
  let response = validateFields(req.body, req_fields);

  if(response.valid == true){
    next();
  }else{
    res.status(400).json({...response});
  }

}

export {check_for_req_fields};