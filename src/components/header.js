import React, { useState } from 'react'
import Link from 'gatsby-link'
import './header.css'
import logo from '../images/logo-designcode.svg'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div
        className={`${
          this.state.hasScrolled ? 'header headerScrolled' : 'header'
        }`}
      >
        <div className="headerGroup">
          <Link to="/">
            <img src={logo} width="30px" />
          </Link>
          <Link to="/4ir">4IR</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/instructor">Instructor</Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>
      </div>
    )
  }
}

// const Header = ({ siteTitle }) => {
//   const [scrolled, setScrolled] = useState(false);

//   componentDidMount() {
//     window.addEventListener('scroll', handleScroll);
//   }
//   // componentDidMount() {
//   //   window.addEventListener('scroll', handleScroll);
//   // }

//   const handleScroll = event => {
//     const scrollTop = window.pageYOffset

//     if (scrollTop > 50) {
//       setScrolled(true)
//     } else {
//       setScrolled(false)
//     }
//   }

//   return (
//     <div className={`${scrolled ? 'header headerScrolled' : 'header'}`}>
//       <div className="headerGroup">
//         <Link to="/">
//           <img src={logo} width="30px" />
//         </Link>
//         <Link to="/4ir">4IR</Link>
//         <Link to="/courses">Courses</Link>
//         <Link to="/instructor">Instructor</Link>
//         <Link to="/contact">
//           <button>Contact</button>
//         </Link>
//       </div>
//     </div>
//   )
// }

export default Header
