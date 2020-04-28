const request=require('request');

const geocode=(url,cb)=>{

    request({url,json:true},(error,resp)=>{
        console.log(resp.body);
        if(error){
            console.log("Test1")
            cb("There is error,Please check internet",undefined)
        }
        else if(resp.body.cod==="404"){
            console.log("Test2")
            cb("Please enter correct location",undefined)
        }else{
            console.log("Test45")
            cb(undefined,
                {
                    location:resp.body.name,
                    main:resp.body.weather[0].main,
                    description:resp.body.weather[0].description,
                    country:resp.body.sys.country}
            )
        }
        
    })
}

module.exports=geocode;