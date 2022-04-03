import React, { useState, useEffect } from 'react';
import water from '../../images/water.jpg'
import { FETCH } from '../API'

function Item(props) {

    const [item, setItem] = useState([]) 

    const token = localStorage.getItem('token')

    const itemId = props.match.params.id

    useEffect(() => {
      FETCH(`/items/${itemId}`, setItem)
    },[])

    console.log('props= ', props.match.params.id)

    const itemArr = item => {
        return (
        <li key={item.name} className='items__ul-li'>
            <h3>item: {item.name}</h3>
            <p>category: {item.category}</p>
            <a href='#' >click here to add</a>
        </li>
        )
    }

    const error = "Something went wrong :-/"


    return (
        <div id='content' className='items space-above'>
          <h1>Would you like to select this item?</h1>
            <p className='item__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque ante ut elit semper lacinia. Duis mollis at nisl vel pretium. Ut vitae condimentum ipsum, a efficitur lorem. Quisque lectus diam, dictum at egestas at.</p>

          <ul className='item__ul'>
            {itemArr(item)}
          </ul>
        </div>
    )
}


export default Item