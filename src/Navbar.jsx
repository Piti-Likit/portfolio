import React from 'react'

function Navbar() {
  return (
    <div >
      <div className="navbar bg-base-100 bg-black h-30">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-white">Piti Likitwattanapaisarn</a>
        </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-white text-2xl">
        <li><a href="#home">Home</a></li>
        <li><a href='#skills'>Technical Skills</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#contact'>Contact</a></li>
      {/* <li> */}
        {/* <details>
          <summary>
            Parent
          </summary> */}
          {/* <ul className="p-2 bg-base-100">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details> */}
      {/* </li> */}
    </ul>
  </div>
</div></div>
  )
}

export default Navbar
