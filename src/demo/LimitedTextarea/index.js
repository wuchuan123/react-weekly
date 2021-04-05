import React from 'react'

const LimitedTextarea = ({cols, rows, value, limit}) => {
  const [content, setContent] = React.useState(value.slice(0, limit))
  const setFormattedContent = React.useCallback(
    text => {
      setContent(text.slice(0, limit))
    }, [limit, setContent]
  )

  return (
    <>
      <textarea cols={cols} rows={rows} value={content} onChange={({target: {value}}) => setFormattedContent(value)}/>
      <p>
        {content.length}/{limit}
      </p>
    </>
  )
}

export default LimitedTextarea


// 例子
// ReactDOM.render(
//   <LimitedTextarea limit={32} value="Hello!" />,
//   document.getElementById('root')
// );