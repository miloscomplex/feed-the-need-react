import React, { useState } from 'react';
import { API_ROOT, HEADERS } from '../../constants';
import Uploady from '@rpldy/uploady';
import UploadButton from '@rpldy/upload-button';
import Upload from '../../UI/Upload';
import { FETCH } from '../API'

function AddItem(props) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [ additionalInfo, setAdditionalInfo] = useState('')
  const [image, setImage] = useState('')
  const user_id = props.match.params.id

  function handleOnSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')
    const reader = new FileReader();



    reader.addEventListener('load', () => {
      const uploaded_image = reader.result
      document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
    })
    // reader.readAsDataURL(this.files[0]);

    alert(`you have submited ${name}, ${category}, ${reader.result}`)
    fetch(`${API_ROOT}/users/${user_id}/items`, {
      method: 'POST',
      headers: HEADERS,
      "Authorization": `Bearer ${token}`,
      body: JSON.stringify({items: { name, category, user_id }})
    }).then(resp => resp.json())
    .then(data => {
      console.log('Here is the item log: ', data)

    })
    setName('')
    setCategory('')
    setImage('')
  }

  const uploader = () => { <Uploady destination={{ url: `${API_ROOT}/images`}}><UploadButton/></Uploady> }

  return (
    <div id='content' className='add-item'>
      <div className='add-item__wrapper'>
        <h2>Upload your donation</h2>
        <form name='add-item__boxForm' onSubmit={event => handleOnSubmit(event)} >
          <label for='name'>Description</label>
          <p>{ name }</p>
          <input type='text' name='name' onChange={e => setName(e.target.value) } />

          <label for='category'>Category</label>
          <input type='text' name='category' onChange={e => setCategory(e.target.value)} />

          <label for='additional-info'>Additional Information</label>
          <textarea name='additional-info' onChange={e => setAdditionalInfo(e.target.value)} />
          
          <h3 className='space-above'>Upload an image of your item</h3>
          <input type='file' id='image-input' accept='image/jpeg, image/png, image/jpg' />

          <div id='display-image'>

          </div>
          <div className='space-above'>
            <input type='submit' value='submit' />
          </div>
        
        </form>
      </div>
    </div>

  )
}

export default AddItem;
