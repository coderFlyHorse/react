// // 浏览器兼容
// import 'react-app-polyfill/ie9'
// import 'react-app-polyfill/ie11'
// import 'react-app-polyfill/stable'

import React from 'react'; // React语法核心
import ReactDOM from 'react-dom/client';  //渲染视图
import '@/index.less'
// 根容器
const root = ReactDOM.createRoot(document.getElementById('root'));

// class Count extends React.Component {
//   state = { num: 0 }
//   render() {
//     let { num } = this.state
//     return <>
//       <h1>{num}</h1>

//       <button onClick={() => { num++; this.setState({ num }) }}>Add</button>
//     </>

//   }
// }

let text = 'Hello World'
root.render(
  <div>{text}</div>

  // < Count />

);


