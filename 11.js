let axios=require('axios');
axios({
   url:'localhost:10086/home',
    method:'GET'
}).then(res=>{
    console.log(res);
});