import Nav from './Nav'

function Footer(props) {
  return (
    <div className='footer'>
      <Nav userProps={props.userProps} />
    </div>
  )
}

export default Footer
