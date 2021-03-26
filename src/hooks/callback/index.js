import React from "react";
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [user, setUser] = React.useState([
    {id: 'a', name: 'Robin'}, {id: 'b', name: 'Dennis'}
  ])
  const [text, setText] = React.useState('')
  const clear = React.useRef()
  const clearInput = () => {
    clear.current.value = ''
  }
  const handleText = event => {
    setText(event.target.value)
  }
  const handleAdduser = () => {
    setUser(user.concat({id: uuidv4(), name: text}))

  }
  const handleRemove = React.useCallback(id => {
    setUser(user.filter(item => item.id !== id))
  },[user])
  console.log('Render: App');
  return (
    <div>
      <input type="text" onChange={handleText} ref={clear}/>
      <button onClick={handleAdduser}>
        Add User
      </button>
      <button onClick={clearInput}>clear</button>
      <List list={user} onRemove={handleRemove}/>
    </div>
  )
}
const List = React.memo( ({list, onRemove}) => {
  console.log('Render: List');
  return (
    <ul>
      {list.map(item => (
        <ListItem item={item} key={item.id} onRemove={onRemove}/>
      ))}
    </ul>
  )
})
const ListItem =React.memo(({item, onRemove}) => {
  console.log('Render: ListItem');
  return (
    <li>
      {item.name}
      <button type='button' onClick={() => onRemove(item.id)}>Remove</button>
    </li>
  )
})
export default App;