import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;


app.get('/',(req,res)=> {
    res.send('Hi from get method default route');
});
app.get('/users',(req,res)=> {
    res.json({name:'guru',age:19});
});


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});