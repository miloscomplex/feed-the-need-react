import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { API_ROOT, HEADERS } from '../../constants';
import { loadItems } from '../../redux/actions'
import { FETCH } from '../API'

function Donators(props) {

    const [donatorsList, setDonatorsList] = useState([]) 

    console.log(props.userProps)

    useEffect( () => {
      console.log(props.user);
      FETCH('users', setDonatorsList);
    }, []) 

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
          <h2>{props.userProps.name}, here are all the Donators of items</h2>
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