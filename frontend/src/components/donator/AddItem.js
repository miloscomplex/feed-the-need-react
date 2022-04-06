import React, { useState } from 'react';
import { API_ROOT, HEADERS } from '../../constants';

function AddItem() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [ additionalInfo, setAdditionalInfo] = useState('')

  const user_id = { user_id: 1};

  function handleOnSubmit(event) {
    event.preventDefault()
    alert(`you have submited ${name}, ${category}`)
    fetch(`${API_ROOT}/items`, {
      method: 'POST',
      heaaders: HEADERS,
      body: JSON.stringify({items: { name, category, user_id }})
    }).then(resp => resp.json())
    .then(data => {
      console.log('Here is the item log: ', data)

    })
    setName('')
    setCategory('')
  }

  return (
    <div id='content' className='add-item'>
      <div className='add-item__wrapper'>
        <h2>Upload your donation</h2>
        <form name='add-item__boxForm' onSubmit={event => handleOnSubmit(event)} >
          <label htmlFor='name'>Description</label>
          <p>{ name }</p>
          <input type='text' name='name' onChange={e => setName(e.target.value) } />

          <label htmlFor='category'>Category</label>
          <input type='text' name='category' onChange={e => setCategory(e.target.value)} />

          <label htmlFor='additional-info'>Additional Information</label>
          <textarea name='additional-info' onChange={e => setAdditionalInfo(e.target.value)} />
          
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
