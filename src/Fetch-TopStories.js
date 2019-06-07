import React, {Component} from 'react';
export var storiesArr = [];

class Stories extends Component {
  state = {
    stories: []
  }
  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(res => res.json())
    .then((data) => {
      storiesArr = data;
      this.setState({stories: data})
      console.log(this.state.stories)
    })
    .catch(console.log)
  }
  render(){
    return(
      <div>{this.state.stories}</div>
    );
  }
}

export default Stories;