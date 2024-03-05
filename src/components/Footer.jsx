import logo from "../assets/Logo-min.png";

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
