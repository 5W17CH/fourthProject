import './App.css';
import React from 'react'

class App extends React.Component{
  render() {
    return(
      <div className='container'>
        <div className='notification-bar'>
          <h3>Notifications</h3>
          <div className='noti-box'>3</div>
          <div className='mark-box'>Mark all as read</div>
        </div>
        <NotificationElement name={'Gianni Pintus'} image={'images/me.jpg'} text={'Created this project'} date={'2m ago'}/>
        <NotificationElement name={'Mark Webber'} image={'images/mark.webp'} text={'reacted to your recent post My first tournament today!'} date={'1m ago'}/>
      </div>
    );
  };
};

const NotificationElement = (props) => {
  return(
    <div className='infobox'>
      <div className='picbox'><img src={props.image} alt="proPic"/></div>
      <div className='textbox'>
        <p><span className='Name'>{props.name} </span>{props.text}</p>
        <p>{props.date}</p>
      </div>
    </div>
  )
}

export default App;