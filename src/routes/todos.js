const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    console.log('handling');
    res.send('<h1>This is todos pages</h1>');
});

router.post('/',(req,res) =>{
    console.log('handling');
    res.end();
});
router.get('/about',(req,res) =>{
    console.log('handling');
    res.send('<h1>This is todos about pages</h1>');
});
module.exports = router;