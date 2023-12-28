import React, { Component } from 'react';

 class CFunctionClick extends Component {

    changeEvent(){
        console.log("hello Ajay");
    }

  render() {
    return (
      <div>
              <button onClick={this.changeEvent}>ClickMe</button>

      </div>
    );
  }
}

export default CFunctionClick;
