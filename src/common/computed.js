let fn=function(data){
    let arr=[];
    let min=1000;
    let max=0;
    let obj=data.productsArr;
    for (let key in obj) {
        if (!obj.hasOwnProperty(key)||key==='more') continue;
        arr.push(obj[key]);
       let price= obj[key].price;
       if(price>max){
           max=price
       }
       if(price<min){
           min=price
       }
    }
    return {
        data:arr,
        max,
        min
    }
};
export default fn