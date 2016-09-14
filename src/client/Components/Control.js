import React from 'react';
import uid from 'uid';
import Show from './Show';

export default class Control extends React.Component {

  handleClick( item ){
    console.log(item)
    localStorage.setItem('item', JSON.stringify( item ));
  }
  render() {

    let items = this.props.datos;

    return <div className="container-videos">
      {
        items.map( (el) => {

          let id = uid()

          return <Show
            key={id}
            data={el}
            handleClick={this.handleClick}/>
        })
      }
    </div>
  }
}
