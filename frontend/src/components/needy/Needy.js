import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { API_ROOT, HEADERS } from '../../constants';
import { loadItems } from '../../redux/actions'

function Needy(props) {

    const [needyList, setNeedyList] = useState([]) 
    
    useEffect(() => {
        fetch(`${API_ROOT}/users`)
          .then(resp => resp.json())
          .then(data => setNeedyList(data))
    },[])

    const itemArr = needyList.map( needy => 
      <li className='items__ul-li'> 
        <img className='items__ul__img' />
        <h3>needy: {needy.name}</h3>
       
        <p>category: {needy.bio}
        <a href='#' >click here to add</a>
        </p>

      </li>)

    return (
        <div id='content' className='items space-above'>
          <h2>All the Needy that are looking for help</h2>
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

export default connect(mapStateToProps)(Needy)