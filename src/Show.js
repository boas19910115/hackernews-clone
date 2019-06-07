import React, { Component } from 'react';
import 'tachyons';
import './Stories.css'
import Footer from './Footer';
var storiesArr = [];
var mutableStoriesArr = [];


class Show extends Component {
  // constructor()
  state = {
    stories: []
  }
  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/showstories.json')
      .then(res => res.json())
      .then((data) => {
        data = data.slice(0, 30);
        data.forEach(data => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${data}.json`)
            .then(res => res.json())
            .then((story) => {
              story = JSON.stringify(story)
              storiesArr.push(story)
              mutableStoriesArr.push(story)
              this.setState({ stories: storiesArr })
              console.log(mutableStoriesArr)
              // this.setState({stories: JSON.parse(this.storiesArr)})
            })
        })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div>
        <div class="pa4">
          <div class="overflow-auto">
            <table class="f6 w-100 mw8 center wrapper" cellspacing="0">
              <tbody class="lh-copy">
                {mutableStoriesArr.map((data = JSON.parse(data), i) =>
                  <tr class="stripe-dark">
                    <td key={data.id} className='pa3'>
                      <span><b>{i + 1}.</b></span>
                      <p className='para'><b>{JSON.parse(data).title} </b></p>
                      <span><i>{JSON.parse(data).url ? JSON.parse(data).url.split('/')[2] : 'Error : Link Not Found'} </i></span>

                      <div>
                        <span class='score'>
                          {JSON.parse(data).score} points by {JSON.parse(data).by} |
                        <span> </span>
                          {JSON.parse(data).kids ? JSON.parse(data).kids.length + ' comments' : 'No Comments'}
                          <div className='link'>
                            <a target='_blank' href={JSON.parse(data).url} class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue">Check Story</a>
                          </div>
                        </span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default Show;