// import Vue from 'vue'
// import App from './one/one.vue'
//
// new Vue({
// 	el:'#app',
// 	template: '<App/>',
//  	components: { App }
// })

import {
    formatDate
} from '../src/util/index'
import '../src/assets/css/main.scss';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = (e) => {
        import('../src/assets/js/print.js').then(module => {
            var print = module.default;
            print();
        });
    }

    element.innerHTML = 'hello';
    element.classList.add('hello');
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());
