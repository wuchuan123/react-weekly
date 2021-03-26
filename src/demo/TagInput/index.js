import React, {useState} from "react";
import './index.css'

const TagInput = ({tags}) => {
  const [tagData, setTagData] = useState(tags)
  const removeTagData = indexToRemove => {
    setTagData([...tagData.filter((_, index) => index !== indexToRemove)])
  }
  const addTagData = event => {
    if (event.target.value !== null) {
      setTagData([...tagData, event.target.value])
      event.target.value = null
    }
  }

  return (
    <div className='tag-input'>
      <ul className='tags'>
        {tagData.map((tag, index) => (
          <li className='tag' key={index}>
            <span className='tag-title'>{tag}</span>
            <span onClick={()=>removeTagData(index)} className='tag-close-icon'>x</span>
          </li>
        ))}
      </ul>
      <input type="text" placeholder='Press enter to add a tag'
             onKeyUp={event => event.key === 'Enter' ? addTagData(event) : null}/>
    </div>
  )
}

export default TagInput