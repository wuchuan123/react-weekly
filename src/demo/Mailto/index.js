import React from 'react'

const Mailto = ({email, subject = '', body = '', children}) => {
 let params=subject||body?'?':''
 if(subject) params+=`subject=${encodeURIComponent(subject)}`
 if(body) params+=`${subject?'&':''}body=${encodeURIComponent(body)}`

 console.log(params)
  return <a href={`mailto:${email}${params}`}>{children}</a>
}
export default Mailto
// 例子
// ReactDOM.render(
//   <Mailto email="foo@bar.baz" subject="Hello & Welcome" body="Hello world!">
//     Mail me!
//   </Mailto>,
//   document.getElementById('root')
// );