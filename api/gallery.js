const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("갤러리 페이지 잘 뜨나요?")
})

module.exports = router;
