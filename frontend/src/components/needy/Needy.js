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
      <li key={needy.name} className='items__ul-li'> 
        <img className='items__ul__img' />
        <h3>needy: {needy.name}</h3>
       
        <p>category: {needy.bio}
        <a href='#' >click here to add</a>
        </p>

      </li>)

    return (
        <div id='content' className='items space-above'>
            <h1>All the Needy that are looking for help</h1>
            <p className='needy__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque ante ut elit semper lacinia. Duis mollis at nisl vel pretium. Ut vitae condimentum ipsum, a efficitur lorem. Quisque lectus diam, dictum at egestas at, tempor eu turpis. Cras congue risus sit amet pulvinar lacinia. Etiam eu tortor tellus. Vivamus eu dolor eget mi gravida sodales in ut leo. Nulla lobortis porttitor tempus.</p>

            <p className='needy__p'>Nullam mattis semper metus, eget consectetur ipsum. Proin rutrum ipsum id volutpat venenatis. Cras orci velit, tempor sit amet tempus blandit, porttitor vel augue. In egestas odio vitae arcu blandit auctor. Sed fermentum odio eu nibh dapibus, sit amet dignissim est porta. Sed ante justo, consequat a molestie et, dapibus eget nulla. Fusce in faucibus orci. Nam nisl justo, rhoncus id cursus sit amet, malesuada sit amet tellus. Aliquam pellentesque ac magna hendrerit accumsan. Donec eget volutpat magna. Morbi sem turpis, tincidunt ac pellentesque eget, vehicula at purus. Nulla non leo purus.</p>
            
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