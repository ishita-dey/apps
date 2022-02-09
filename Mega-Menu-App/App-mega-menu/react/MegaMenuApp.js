/* eslint-disable react/jsx-filename-extension */
import React from 'react'
//import { navItems } from './MenuItems'

import Navbar from './Navbar'

function MegaMenuApp(props) {
  const navitems = props.navItems
  // console.log(navitems)
  const data = [...props.children]
  //console.log(data)
  const menu = data.map((mitem) => mitem.props.blockProps)
  const subArray = menu[0].items
  //console.log(menu)

  return (
    <div>
      <Navbar navItems={navitems} dropdown={menu} />
    </div>
  )
}

export default MegaMenuApp
