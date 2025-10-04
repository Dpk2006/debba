import { Router } from "express";
import { check_for_req_fields } from "../middleware/check_req_fields.js";
import { signUpHandeller } from "../controller/sigunUp.route.handeller.js";


const routerLogin = Router(); // Define route for login only

const routerSignup = Router(); // Define route for signup only

//Login AUTH


//Signup AUTH

// routerSignup.get('/user');
// Middlware : check 
routerSignup.post('/supplier', check_for_req_fields, signUpHandeller);
routerSignup.post('/user', check_for_req_fields, signUpHandeller);

export { routerSignup };