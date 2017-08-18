# swipe-react
[![npm version](https://badge.fury.io/js/swipe-react.svg)](http://badge.fury.io/js/swipe-react)

[![NPM](https://nodei.co/npm/swipe-react.png)](https://nodei.co/npm/swipe-react/)


Easy integration!!! Easily add touch devices support (smartphones, tablets) to your react components, with swipe direction detection.

# Usage
1. Install the npm package:
```bash
    npm install --save swipe-react
```
2. Import it:
```javascript
    import SwipeReact from 'swipe-react';
```
3. Config swipe events ('left', 'right', 'up', 'down'), at least one of them, in your component constructor, or in render function:
```javascript
    SwipeReact.config({
      left: () => {
        console.log('Swipe left detected.');
      },
      right: () => {
        console.log('Swipe right detected.');
      },
      up: () => {
        console.log('Swipe up detected.');
      },
      down: () => {
        console.log('Swipe down detected.');
      }
    });
```

4. Integrate with your React component:
```javascript
  <YourComponent {...SwipeReact.events} />
```

# Example
```javascript
import React, { Component } from 'react';
import SwipeReact from 'swipe-react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: 'Swipe here!'
    };
    SwipeReact.config({
      left: () => {
        this.setState({
          content: 'left direction detected.'
        });
      },
      right: () => {
        this.setState({
          content: 'right direction detected.'
        });
      },
      up: () => {
        this.setState({
          content: 'up direction detected.'
        });
      },
      down: () => {
        this.setState({
          content: 'down direction detected.'
        });
      }
    });
  }
  render() {
    let styles = {
      height: '400px',
      fontSize: '34px',
      textAlign: 'center'
    };
    return (
      <div {...SwipeReact.events} tabIndex="1" style={styles}>
        {this.state.content}
      </div>
    );
  }
}

export default App;
```

### Remarks
* You need to test it on a touch screen device, or open Smartphone/Tablet mode on Chrome Developer Tools.
