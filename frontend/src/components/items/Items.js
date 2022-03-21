import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { API_ROOT, HEADERS } from '../../constants';
import { loadItems } from '../../redux/actions'

function Items(props) {

    const [itemsList, setItemsList] = useState([]) 

    const token = localStorage.getItem('token')

    useEffect(() => {
        fetch(`${API_ROOT}/items`, {
          method: 'GET',
          headers: {
            "Authorization": `Bearer ${token}`
          } 
        })
          .then(resp => resp.json())
          .then(data => 
            setItemsList(data)
          )
    },[])

    const itemArr = itemsList.map( item => 
      <li key={item.name} className='items__ul-li'>
        <img className='items__ul__img' src='../../images/water.jpg' />
        <h3>item: {item.name}</h3>
        <p>category: {item.category}</p>
        <a href='#' >click here to add</a>

      </li>)

    return (
        <div id='content' className='items space-above'>
          <img className='items__ul__img' src='../../images/water.jpg' />
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

const mapStateToProps = state => {
    return {state}
}

export default connect(mapStateToProps)(Items)