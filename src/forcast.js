const request=require('request');

const forcast=(url,cb1)=>{
    request({url,json:true},(error,resp)=>{
        if(error){
            console.log("Test99")
            cb1("There is error,Please check internet",undefined)
        }
        else if(resp.body.cod==="404"){
            console.log("Test2")
            cb1("Please enter correct location",undefined)
        }else{
            cb1(undefined,{
                forcast:resp.body.main.humidity
            })
        }
    })
}

module.exports=forcast;