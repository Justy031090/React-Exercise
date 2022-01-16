import React from 'react';
import Button from './components/Button.js';
import CardImage from './components/CardImage.js';
import Header from './components/Header.js';

const btnStyle = {
    backgroundColor: 'white', 
    color: 'orange',
    border:'none', 
    fontSize:'1.5rem', 
    marginRight:'0.7rem'
}
const cardStyle = {
  margin: '1rem',
  display:'flex',
  width:'100%',
  textAlign:'center'
}
const eachCard = {
  margin:'1rem'
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {text: ''}
    this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({text: 'newtext'}) //
  }
  render() {
    return(
    <div style={cardStyle} className="Card" >
      <div className="first-card" style={eachCard}>
      <CardImage source='https://picsum.photos/200/300'></CardImage>
      <Header text='Some Text' description='Some Description'></Header>
      <Button style={btnStyle} text='Share' site="http://google.com"> </Button>
      <Button style={btnStyle} text='Explore' site="Http://youtube.com"> </Button>
      </div>
      <div className="second-card" style={eachCard}>
      <CardImage source='https://picsum.photos/200/300?grayscale'></CardImage>
      <Header text='We wish you a great day' description='The first link is to Appleseeds btw' onClick={this.handleClick}></Header>
      <Button style={btnStyle} text='Lorem' site="https://mdl.appleseeds.org.il/"> </Button>
      <Button style={btnStyle} text='Ipsum' site="Http://youtube.com"> </Button>
      </div>
      <div className="third-card" style={eachCard}>
      <CardImage source='https://picsum.photos/id/237/200/300'></CardImage>
      <Header text='How to use lorem ?' description='I wish i knew...'></Header>
      <Button style={btnStyle} text='Learn Now' site="http://amazon.com"> </Button>
      <Button style={btnStyle} text='But from where ?' site="Http://apple.com"> </Button>
      </div>
    </div>
    )};
}

export default App;

