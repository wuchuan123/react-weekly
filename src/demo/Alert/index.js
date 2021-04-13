import React from 'react'
import './index.css'

const Alert = ({ isDefaultShown = false, timeout = 250, type, message }) => {
    const [isShown, setIsShown] = React.useState(isDefaultShown);
    const [isLeaving, setIsLeaving] = React.useState(false);
  
    let timeoutId = null;
  
    React.useEffect(() => {
      setIsShown(true);
      return () => {
        clearTimeout(timeoutId);
      };
    }, [isDefaultShown, timeout, timeoutId]);
  
    const closeAlert = () => {
      setIsLeaving(true);
      timeoutId = setTimeout(() => {
        setIsLeaving(false);
        setIsShown(false);
      }, timeout);
    };
  
    return (
      isShown && (
        <div
          className={`alert ${type} ${isLeaving ? 'leaving' : ''}`}
          role="alert"
        >
          <button className="close" onClick={closeAlert} />
          {message}
        </div>
      )
    );
  };
//   Examples
//   ReactDOM.render(
//     <Alert type="info" message="This is info" />,
//     document.getElementById('root')
//   );
export default Alert