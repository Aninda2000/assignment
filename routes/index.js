const express = require("express");
const fs=require('fs');

const router = express.Router();
router.get('/', (req,res)=>{
    return res.render('home');
})

router.post('/create', (req,res)=>{
    let data=req.body;
    data=JSON.parse(data);

})

module.exports = router;
