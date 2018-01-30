let fs = require('fs');
let session = require('express-session');
let md5 = require('md5');
let axios = require('axios');
let path = require('path');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json()); // 解析请求体的中间件 req.body上为解析后的结果
// cors是一个第三方模块 专门解决跨域
app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: 'zfpx'
})); // req.session进行设置内容了
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    if (req.method == "OPTIONS") res.send();/*让options请求快速返回*/
    else next();
});

let returnData = function (res, path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            res.end("出错了,等会儿再发送一次");
            return
        }
        res.end(data)
    });
};

app.listen(10086, () => {
    console.log("success");
});

app.use(express.static('dist'));//静态资源地址

app.get(`/home`, (req, res) => {
    let Zepto1517235725075 = function (val) {
        fs.writeFile('./dist/home.json', JSON.stringify(val.data))
    };

    fs.exists('./dist/home.json', exists => {
        if (!exists) {
            fs.createWriteStream('./dist/home.json');
            axios({
                url: 'http://api.21cake.com/?method=Advertisement.showV2&v=1.0&cityId=1&position=home_top%2Ctips%2Cclassification%2Chome_floor_v2%2Cactivity%2Cmagazine&channel=wap&_=1517235725130&callback=Zepto1517235725075',
                method: 'GET'
            }).then((res) => {
                eval(res.data);
            }).catch(err => {
            });
        }
        let timer = setTimeout(() => {
            returnData(res, './dist/home.json');
            clearTimeout(timer);
        }, 100);
    });

});

app.get(`/list/cake`, (req, res) => {
    let Zepto1517239793363 = function (val) {
        console.log(val.data);
        fs.writeFile('./dist/list/cake.json', JSON.stringify(val.data))
    };
    fs.exists('./dist/list/cake.json', exists => {
        if (!exists) {
            fs.createWriteStream('./dist/list/cake.json');
            axios({
                url: 'http://api.21cake.com/?method=Gallery.goodsList&v=1.0&catId=6&cityId=1&channel=wap&_=1517239793415&callback=Zepto1517239793363',
                method: 'GET'
            }).then((res) => {
                eval(res.data);
            }).catch(err => {
            });
        }
        let timer = setTimeout(() => {
            returnData(res, './dist/list/cake.json');
            clearTimeout(timer);
        }, 200);
    });
});

app.get(`/list/ice`, (req, res) => {
    let Zepto1517239793365 = function (val) {
        fs.writeFile('./dist/list/ice.json', JSON.stringify(val.data))
    };
    fs.exists('./dist/list/ice.json', exists => {
        if (!exists) {
            fs.createWriteStream('./dist/list/ice.json');
            axios({
                url: 'http://api.21cake.com/?method=Gallery.goodsList&v=1.0&catId=23&cityId=1&channel=wap&_=1517241710162&callback=Zepto1517239793365',
                method: 'GET'
            }).then((res) => {
                eval(res.data);
            }).catch(err => {
            });
        }
        let timer = setTimeout(() => {
            returnData(res, './dist/list/ice.json');
            clearTimeout(timer);
        }, 200);
    });
});

app.get(`/list/patch`, (req, res) => {
    let Zepto1517241941959 = function (val) {
        fs.writeFile('./dist/list/patch.json', JSON.stringify(val.data))
    };
    fs.exists('./dist/list/patch.json', exists => {
        if (!exists) {
            fs.createWriteStream('./dist/list/patch.json');
            axios({
                url: 'http://api.21cake.com/?method=Gallery.goodsList&v=1.0&catId=7&cityId=1&channel=wap&_=1517241945391&callback=Zepto1517241941959',
                method: 'GET'
            }).then((res) => {
                console.log(res.data);
                eval(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
        let timer = setTimeout(() => {
            returnData(res, './dist/list/patch.json');
            clearTimeout(timer);
        }, 200);
    });
});

app.get(`/list/coffee`, (req, res) => {
    let Zepto1517242495820 = function (val) {
        fs.writeFile('./dist/list/coffee.json', JSON.stringify(val.data))
    };
    fs.exists('./dist/list/coffee.json', exists => {
        if (!exists) {
            fs.createWriteStream('./dist/list/coffee.json');
            axios({
                url: 'http://api.21cake.com/?method=Gallery.goodsList&v=1.0&catId=8&cityId=1&channel=wap&_=1517242807054&callback=Zepto1517242495820',
                method: 'GET'
            }).then((res) => {
                console.log(res.data);
                eval(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
        let timer = setTimeout(() => {
            returnData(res, './dist/list/coffee.json');
            clearTimeout(timer);
        }, 200);
    });
});

app.get(`/list/normal`, (req, res) => {
    let Zepto1517242495821 = function (val) {
        fs.writeFile('./dist/list/normal.json', JSON.stringify(val.data))
    };
    fs.exists('./dist/list/normal.json', exists => {
        if (!exists) {
            fs.createWriteStream('./dist/list/normal.json');
            axios({
                url: 'http://api.21cake.com/?method=Gallery.goodsList&v=1.0&catId=24&cityId=1&channel=wap&_=1517242994447&callback=Zepto1517242495821',
                method: 'GET'
            }).then((res) => {
                console.log(res.data);
                eval(res.data);
            }).catch(err => {
                console.log(err);
            });
        }
        let timer = setTimeout(() => {
            returnData(res, './dist/list/normal.json');
            clearTimeout(timer);
        }, 200);
    });
});

app.get(`/list/gift`, (req, res) => {
    let Zepto1517243264054 = function (val) {
        fs.writeFile('./dist/list/gift.json', JSON.stringify(val.data))
    };
    fs.exists('./dist/list/gift.json', exists => {
        if (!exists) {
            fs.createWriteStream('./dist/list/gift.json');
            axios({
                url: 'http://api.21cake.com/?method=Gallery.goodsList&v=1.0&catId=21&cityId=1&channel=wap&_=1517243277911&callback=Zepto1517243264054',
                method: 'GET'
            }).then((res) => {
                eval(res.data);
            }).catch(err => {
                res.state("404");
                res.end("数据未找到")
            });
        }
        let timer = setTimeout(() => {
            returnData(res, './dist/list/gift.json');
            clearTimeout(timer);
        }, 200);
    });
});

app.post('/register', (req, res) => {
    let {username, password} = req.body;
    let userList = JSON.parse(fs.readFileSync('./dist/user/user.json'));
    let user=userList.find(item => item.username === username);
    if(user){
        res.json({msg:'用户已存在',err:1});
    }else{
        password=md5(password);
        userList.push({username,password});
        fs.writeFile('./dist/user/user.json',JSON.stringify(userList),err=>{
            console.log(err);
        });
        res.json({msg:'注册成功',err:0});
    }

});

app.post('/login',(req,res)=>{
    let {username, password} = req.body;
    let userList = JSON.parse(fs.readFileSync('./dist/user/user.json'));
    let user=userList.find(item => item.username === username);
    if(user){
        password=md5(password);
        if(user.password===password){
            res.json({msg:'登陆成功',err:0})
        }else{
            res.json({msg:'密码错误',err:1});
        }
    }else{
        res.json({msg:'用户不存在',err:1});
    }
});

app.post('/shoppingCart/UpData',(req,res)=>{
    let {username, goods} = req.body;
    let userList = JSON.parse(fs.readFileSync('./dist/user/user.json'));
    let user=userList.find(item => item.username === username);
    if(!Object.prototype.toString.call(goods)==='[object Array]'){
        res.json({err:1,msg:"参数类型错误"})
    }else if(user){
        userList.forEach(item=>{
            if(item.username=username){
                item.goods=[...goods];
            }
        });
        fs.writeFileSync('./dist/user/user.json',JSON.stringify(userList));
        res.json({err:0,msg:"加入购物车成功"})
    }else{
        res.json({err:1,msg:"请先登陆"})
    }

});

app.post('/shoppingCart/download',(req,res)=>{
    let {username,password} = req.body;
    let userList = JSON.parse(fs.readFileSync('./dist/user/user.json'));
    let user=userList.find(item => item.username === username);
    if(user){
        res.json({msg:'数据拉取成功',err:0,goods:user.goods||[]});
    }else{
        res.json({msg:'未知错误',err:1})
    }

});

