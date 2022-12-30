import React from 'react'

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="https://thumbs.dreamstime.com/b/amazon-logo-amazon-logo-white-background-vector-format-avaliable-124289859.jpg" alt="" />
      <div className="header__searchbar">
        <input className='search__input' type="text" />
      </div>
      <div className="header__nav">

        <div className="header__option">
          <span className='header__optionline1'>
            hello guest
          </span>
          <span className='header__optionline2'>
            sign in
          </span>
        </div>
        <div className="header__option">
          <span className='header__optionline1'>
            Returns
          </span>
          <span className='header__optionline2'>
            & Orders
          </span>
        </div>
        <div className="header__option">
          <span className='header__optionline1'>
            Your
          </span>
          <span className='header__optionline2'>
            Prime
          </span>
        </div>

      </div>
    </div>
  )
}

export default Header
