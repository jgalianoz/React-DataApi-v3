import React from 'react';
import uid from 'uid';
import Show from './Show';

export default function Control (props) {

  let items = props.datos;

  function handleClick( item ) {
    //console.log(item)
    localStorage.setItem('item', JSON.stringify( item ));
  }

  return <div className="container-videos">
    {
      items.map( (el) => {

        let id = uid()

        return <Show
          key={id}
          data={el}
          handleClick={handleClick}/>
      })
    }
  </div>

}
