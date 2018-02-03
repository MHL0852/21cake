import React, {Component} from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
class App extends Component {
    componentWillMount(){
        (function () {
            let computed = function () {
                let desW = 640,
                    devW = document.documentElement.clientWidth;
                if (devW >= 640) {
                    document.documentElement.style.fontSize = '100px';
                    return;
                }
                document.documentElement.style.fontSize = devW / desW * 100 + 'px';
            };
            computed();
            window.addEventListener('resize', computed, false);
        })();
    }
    render() {
        let user=JSON.parse(localStorage.getItem('user'));
        if(!user){
            localStorage.setItem('user',"{username:'',isLogin:false}");
        }

        return (
            <div className="App">
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}
export default App;
