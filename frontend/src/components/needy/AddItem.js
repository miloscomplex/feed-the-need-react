import React, { useState } from 'react';
import { API_ROOT, HEADERS } from '../../constants';

function AddItem() {
  const [name, setName] = useState('')
  const [category, setCateegory] = useState('')
  const [ additionalInfo, setAdditionalInfo] = useState('')

  const userId = 0;

  function handleOnSubmit(event) {
    event.preventDefault()
    alert(`you have submited ${item.name}, ${item.category}`)
    fetch(`${API_ROOT}/items`, {
      method: 'POST',
      heaaders: HEADERS,
      body: JSON.stringify({ item })
    }).then(resp => resp.json())
    .then(data => {
      console.log('Here is the item log: ', data)
    })
  }

  return (
    <div id='content' className='add-item'>
      <div className='add-item__wrapper'>
        <h2>Upload your donation</h2>
        <form name='add-item__boxForm' onSubmit={event => handleOnSubmit(event)} >
          <label for='name'>Description</label>
          <p>{item}</p>
          <input type='text' name='name' onChange={e => setItem(e.target.value) } />

          <label for='category'>Category</label>
          <input type='text' name='category' onChange={e => setItem(e.target.value)} />

          <label for='additional-info'>Additional Information</label>
          <textarea name='additional-info' onChange={e => setItem(e.target.value)} />
          
          <h3 className='space-above'>Upload an image of your item</h3>
          <input type='button' value='upload' />
          
          <div className='space-above'>
            <input type='submit' value='submit' />
          </div>
        
        </form>
      </div>
    </div>

  )
}

export default AddItem;
