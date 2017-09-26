import React from 'react';

class Preview extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <ul>
        <li>
          <img src={this.props.img} />
        </li>
      </ul>
    )
  }

}

export default Preview;
