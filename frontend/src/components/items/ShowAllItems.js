import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { loadItems } from '../../redux/actions'

function ShowAllItems(props) {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(props.items)
    },[])

    const itemList = items.map( item => <p>{item.name}</p>)

    return (
        <div>
            { itemList }
        </div>
    )
}

const mapStateToProps = state => {
    return {state}
}

export default connect(mapStateToProps)(ShowAllItems)