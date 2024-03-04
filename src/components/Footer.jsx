import logo from '../assets/logo_prime_video_foto_reproducao.jpg'
function Footer() {
  return (
    <footer>
        <hr />
     <img src={logo} className='logo' alt="prime video logo" />
     
     &copy; CopyRight
      { new Date().getFullYear()}
    </footer>
  )
}

export default Footer
