import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
//import { dropdownItems, navItems } from './MenuItems'
import Dropdown from './Dropdown'
import styles from './Navbar.css'

const CSS_HANDLES = ['link', 'menuLinks', 'navbar', 'navItems']

const Navbar = (props) => {
  const handles = useCssHandles(CSS_HANDLES)
  const [submenu, setSubmenu] = useState(null)
  const navItems = props.navItems
  const dropdownData = [...props.dropdown]
  //console.log(dropdownData)

  let navbarItems
  navbarItems = navItems.map((menu) => {
    return (
      <div>
        <a href={menu.path} className={handles.link}>
          <div
            onMouseOver={() => showSubItems(menu.id)}
            className={handles.menuLinks}
          >
            {menu.title}
          </div>
        </a>
      </div>
    )
  })

  const showSubItems = (id) => {
    setSubmenu(null)
    const subitems = navItems
      .filter((x) => x.id == id)
      .map((item) => {
        return <div>{<Dropdown dropdownData={dropdownData} />}</div>
      })

    setSubmenu(subitems)
  }

  return (
    <div className={handles.navbar}>
      <div>
        <div className={handles.navItems}>{navbarItems}</div>
        <div onMouseLeave={() => setSubmenu(null)}>{submenu}</div>
      </div>
      <div className={styles.noShow}>
        <Dropdown dropdownData={dropdownData} />
      </div>
    </div>
  )
}

export default Navbar
