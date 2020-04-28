const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const geocode=require("./src/geocode");
const forcast=require("./src/forcast");

app.set('view engine','hbs');
app.set('views','./views')

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/weather',(req,res)=>{
    const location=req.query.location;
    if(!req.query.location){
        console.log('Test4')
        return res.send({error:"Please add a location to search"})
    }
    url="http://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=a76e3ad2e95fd86359bb7d2274166c48";
    
    geocode(url,(error,{location,main,description,country}={cb})=>{
        if(error){
            return res.send({error})
        }
        forcast(url,(error,cb1)=>{
            console.log(error);
            if(error){
                return res.send({error})
            }else{
                return res.send({
                location:location,
                main:main,
                description:description,
                country:country,
                forcast:cb1.forcast
            })
            }
        })
    })
})


app.listen(3000,()=>{
    console.log("Port is redriected to port 3000");
})