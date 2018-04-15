import React from 'react'
import Link from 'gatsby-link'

// todo Links, make nav actually work

const Nav = () => (
  <nav id="menu">
    <ul class="links">
      <li><a href="index.html">Home</a></li>
      <li><a href="generic.html">Generic</a></li>
      <li><a href="elements.html">Elements</a></li>
    </ul>
    <ul class="actions vertical">
      <li><a href="#" class="button special fit">Log In</a></li>
      <li><a href="#" class="button fit">Sign Up</a></li>
    </ul>
  </nav>
)

export default Nav
