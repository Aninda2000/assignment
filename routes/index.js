const express = require("express");
const fs=require('fs');

const router = express.Router();
router.get('/', (req,res)=>{
    return res.render('home');
})

router.post('/create', (req,res)=>{
    let data=req.body;
    data = JSON.stringify(data);
    const jsonString = fs.writeFileSync("./newCustomer.json", data);

})

module.exports = router;
