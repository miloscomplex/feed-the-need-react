import React, { useState, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Link } from 'react-router-dom'
import water from '../../images/water.jpg'
import { FETCH } from '../API'

function Items(props) {
  

    const [itemsList, setItemsList] = useState([]) 

    const token = localStorage.getItem('token')
    console.log('props= ', props.userProps)

    const userProps = props.userProps;

    useEffect(() => {
      FETCH('/items', setItemsList)
    },[])

    console.log(itemsList)

    const itemArr = itemsList.map( item =>
      <li key={item.name} className='items__ul-li'>
        <p>{userProps.name}</p>
        {/* <img className='items__ul__img' src={water} /> */}
        <h3>item: {item.name}</h3>
        <p>category: {item.category}</p>
        <Link className='item__ul-li__link' to={`/items/${item.id}`}>click here to view</Link>
      </li>)

    

    const error = () => "Something went wrong :-/"


    return (
        <div id='content' className='items space-above'>
          <h1>All the items to choose from</h1>
            <p className='items__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque ante ut elit semper lacinia. Duis mollis at nisl vel pretium. Ut vitae condimentum ipsum, a efficitur lorem. Quisque lectus diam, dictum at egestas at, tempor eu turpis. Cras congue risus sit amet pulvinar lacinia. Etiam eu tortor tellus. Vivamus eu dolor eget mi gravida sodales in ut leo. Nulla lobortis porttitor tempus.</p>

          <ul className='items__ul'>
            { itemArr }
          </ul>

          <div className='items__div space-above'>
            <h3>HERE IS SOME ADDITIONAL TEXT</h3>
            <button>submit</button>
          </div>
        </div>
    )
}


export default Items