import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { API_ROOT, HEADERS } from '../../constants';
import { loadItems } from '../../redux/actions'

function Items(props) {

    const [itemsList, setItemsList] = useState([]) 
    useEffect(() => {
        fetch(`${API_ROOT}/items`)
          .then(resp => resp.json())
          .then(data => setItemsList(data))
    },[])

    const itemArr = itemsList.map( item => <li className='items__ul-li'>item needed: {item.name}</li>)

    return (
        <div id='content' className='items space-above'>
          <h2>All the items to choose from</h2>
          <ul className='items__ul'>
            { itemArr }
          </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {state}
}

export default connect(mapStateToProps)(Items)