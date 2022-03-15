import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { API_ROOT, HEADERS } from '../../constants';
import { loadItems } from '../../redux/actions'

function Donators(props) {

    const [donatorsList, setDonatorsList] = useState([]) 
    
    useEffect(() => {
        fetch(`${API_ROOT}/users`)
          .then(resp => resp.json())
          .then(data => setDonatorsList(data))
    },[])

    const itemArr = donatorsList.map( donator => 
      <li key={donator.name} className='items__ul-li'> 
        <img className='items__ul__img' />
        <h3>donator: {donator.name}</h3>
       
        <p>category: {donator.bio}
        <a href='#' >click here to add</a>
        </p>

      </li>)

    return (
        <div id='content' className='items space-above'>
          <h2>All the Donators of items</h2>
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

export default connect(mapStateToProps)(Donators)