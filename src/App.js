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
        <NotificationElement name={'Gianni Pintus'} image={'images/me.jpg'} text={'Created this project'} date={'1m ago'}/>
        <NotificationElement name={'Mark Webber'} image={'images/mark.webp'} text={'reacted to your recent post: My first tournament today!'} date={'3m ago'}/>
        <NotificationElement name={'Angela Gray'} image={'images/angela.webp'} text={'followed you'} date={'5m ago'}/>
        <NotificationElement name={'Jacob Thompson'} image={'images/jacob.webp'} text={'has joined your group: Chess Club'} date={'1 day ago'}/>
        <NotificationElement name={'Rizky Hasanuddin'} image={'images/rizky.webp'} text={'sent you a private message'} date={'5 days ago'}inbox=
        {`Hello, thanks for setting up the Chess Club. 
        I've been a member for a few weeks now and 
        I'm already having lots of fun and improving my game.`}/>
        <NotificationElement name={'Nathan Peterson'} image={'images/nathan.webp'} text={'reacted to your recent post: 5 end-game strategies to increase your win rate'} date={'2 weeks ago'}/>
        <NotificationElement name={'Anna Kim'} image={'images/anna.webp'} text={'left the group Chess Club'} date={'3 weeks ago'}/>
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
        <p>{props.inbox}</p>
      </div>
    </div>
  )
} 

export default App;