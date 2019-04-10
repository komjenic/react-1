import React, { Component } from 'react';
import superagent from 'superagent';
//import axios from 'axios';

//https://www.reddit.com/r/space.json
class Apicall extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      subr: 'space'
    };
    this.getReddit = this.getReddit.bind(this);
  }

  componentWillMount() {
    this.getReddit();
  }

  getReddit(){
    superagent.get(`https://www.reddit.com/r/${this.state.subr}.json`)
    .then(res => {
      const posts = res.body.data.children.map(obj => obj.data);
      console.log(posts)
      this.setState({posts});
    })
  }



  render() {
    return (
      <div>
        <h1>{`/r/${this.state.subr}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }

}

export default Apicall;
