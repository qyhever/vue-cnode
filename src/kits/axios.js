import axios from 'axios'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'

// export default {
//     install:function(Vue){
//         // 将$axios 绑定到Vue.prototype上 并且该属性为只读
//         Object.defineProperty(Vue.prototype, '$axios', { value: axios })
//     }
// }
export default axios