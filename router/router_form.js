const express = require('express')
const router =express.Router();
const bodyParser =require('body-parser');
 const { body , validationResult}=require("express-validator"); 



router.get("/",(req,res)=>{
    res.render("../views/formulaire" ,{alert:{}})
})

router.post("/",[

    body('nom')
    .not()
    .isEmpty()
    .trim()
    .escape()
    .bail()
    .withMessage('Nom ne peut pas être vide')
    .isLength({min:5 , max:20})
    .withMessage('Minimun 5 caractères obligatoires')
        ,
        
    body('prenom')
    .not()
    .isEmpty()
    .trim()
    .escape()
    .bail()
    .withMessage('Nom ne peut pas être vide')
    .isLength({min:5 , max:10})
    .withMessage('Minimun 5 caractères obligatoires')
    ,
    body('email')
    .isEmail()
    .isEmpty()
    .trim()
    .escape()
    .bail()
    .withMessage('Nom ne peut pas être vide'),
    body('contact')
    .not()
    .isEmpty()
    .trim()
    .escape()
    .bail()
    .withMessage('Nom ne peut pas être vide')
    .isLength({min:5 , max:10})
    .withMessage('Minimun 5 caractères obligatoires')
],
     (req, res) => {
     
   // Finds the validation errors in this request and wraps them in an object with handy functions
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
    //  return res.status(400).json({ alert: errors.array() });
     const boom =errors.mapped();
     console.log(boom)
     res.render('formulaire',{alert:boom})
   //   res.render('inscription',{errors:errors})
   }

   // formulaire.create({
   //   nom: req.body.username,
   //   password: req.body.password,
   // }).then(formulaire_user => res.json(formulaire_user));
        
     }
        
     
   
 
)

module.exports =router;