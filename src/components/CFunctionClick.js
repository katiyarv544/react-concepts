import React, { Component } from 'react';

 class CFunctionClick extends Component {

    constructor(){
        super();
        //this.changeEvent=this.changeEvent.bind(this);
        this.state={
            course:"MCA"
        }
    }

    changeEvent=()=>{
        this.setState({
            course:"BCA"
        })
        console.log("hello Ajay",this.state.course);
    }

  render() {
    return (
      <div>
              
              <button onClick={this.changeEvent}>HitMe</button>
              {this.state.course}

      </div>
    );
  }
}

export default CFunctionClick;
