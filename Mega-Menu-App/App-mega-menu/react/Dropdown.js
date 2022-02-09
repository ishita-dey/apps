import React, { useState } from 'react'
// import { dropdownItems, navItems } from './MenuItems'
import styles from './Dropdown.css'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'dropdownitems',
  'dropdownContainer',
  'dropdownList',
  'links',
  'listItem',
]

function Dropdown(props) {
  const handles = useCssHandles(CSS_HANDLES)
  // const [dropdown, setDropdown] = useState(false)
  const dropdownData = props.dropdownData
  // console.log(dropdownData[0])

  return (
    <div>
      <ul className={handles.dropdownitems}>
        {dropdownData.map((item) => {
          return (
            <div className={handles.dropdownContainer}>
              {item.items.map((subitem) => {
                return (
                  <div className={handles.dropdownList}>
                    <h3>{subitem.title}</h3>
                    {subitem.content.map((option) => {
                      console.log(option.name)
                      return (
                        <a className={handles.links} href={option.link}>
                          <li className={handles.listItem}>{option.name}</li>
                        </a>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          )
        })}
      </ul>
    </div>
  )

  // return (
  //   <ul
  //     className={styles.dropdownitems}
  //     onMouseOver={() => setDropdown(dropdown)}
  //   >
  //     {navItems.map((item) => {
  //       // console.log('test' + item)
  //       return (
  //         <div>
  //           {item.dropdownItems.map((subitems) => {
  //             return (
  //               <li key={subitems.id} className={styles.list}>
  //                 <a
  //                   href={subitems.path}
  //                   className={styles.dropdownItems}
  //                   //onClick={() => setDropdown(!dropdown)}
  //                 >
  //                   {subitems.title}
  //                 </a>
  //               </li>
  //             )
  //           })}
  //         </div>

  // <li key={item.id} className={styles.list}>
  //   <a
  //     href={item.path}
  //     className={styles.dropdownItems}
  //     onClick={() => setDropdown(!dropdown)}
  //   >
  //     {item.title}
  //   </a>
  // </li>
  //       )
  //     })}
  //   </ul>
  // )
}

export default Dropdown
