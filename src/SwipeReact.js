let SwipeReact = {};

SwipeReact.xDown = null;
SwipeReact.yDown = null;

SwipeReact.configuration = {};

SwipeReact.config = (config)=>{
  const options = ['right', 'left', 'up', 'down'];
  for (let option of options) {
    if (config.hasOwnProperty(option)) {
      SwipeReact.configuration[option] = config[option];
    }
  }
};

SwipeReact.events = {
  onTouchStart: (e) => {
    SwipeReact.xDown = e.touches[0].clientX;
    SwipeReact.yDown = e.touches[0].clientY;
  },
  onTouchMove: (e) => {

    if (SwipeReact.xDown === null || SwipeReact.yDown === null) {
        return;
    }

    let xUp = e.touches[0].clientX;
    let yUp = e.touches[0].clientY;

    let xDiff = SwipeReact.xDown - xUp;
    let yDiff = SwipeReact.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0){
          if(SwipeReact.configuration.hasOwnProperty('left')){
            SwipeReact.configuration.left();
          }
        } else{
          if(SwipeReact.configuration.hasOwnProperty('right')){
            SwipeReact.configuration.right();
          }
        }
    } else {
        if (yDiff > 0) {
          if(SwipeReact.configuration.hasOwnProperty('up')){
            SwipeReact.configuration.up();
          }
        } else {
          if(SwipeReact.configuration.hasOwnProperty('down')){
            SwipeReact.configuration.down();
          }
        }
    }
    SwipeReact.xDown = null;
    SwipeReact.yDown = null;
  }
};

export default SwipeReact;