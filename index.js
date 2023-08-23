const app = require('express')();
const port = 8002;
const review = require('./api/review')
const navi = require('./api/navi')
const gallery = require('./api/gallery')

app.listen(port,()=>{
    console.log("우리 서버 영업합니다.")
})

app.get('/',(req,res)=>{
    res.send("인덱스 페이지입니다.")
})

app.get('/sub',(req,res)=>{
    res.send("서브 페이지입니다.")
})

app.use('/gallery', gallery);
app.use('/review', review);
app.use('/navi', navi);
