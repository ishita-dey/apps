/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import PropTypes from 'prop-types'
import styles from './footer.css'

const CSS_HANDLES = [
  'footerContainer',
  'headerContainer',
  'header',
  'subheader',
  'links',
  'icons',
  'socialImage',
  'disclamer',
  'copyright',
  'copyrightContainer',
]

function Footer(props) {
  const handles = useCssHandles(CSS_HANDLES)
  const headers = props.title
  const { column1, column2, column3, column4 } = props
  const columns = [column1, column2, column3, column4]
  const images = props.imagesURL
  const { disclamer } = props
  const { socailLinks } = props
  const { copyright } = props
  // const storeLink = 'https://ishita--echidna.myvtex.com/'

  // console.log(socailLinks)

  const propTypes = {
    header: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    disclamer: PropTypes.array.isRequired,
    socailLinks: PropTypes.array.isRequired,
    copyright: PropTypes.array.isRequired,
  }

  const footerContent = headers && headers.map((x, i) => [x, columns[i]])
  const footerSocialLinks = images && images.map((y, j) => [y, socailLinks[j]])

  // console.log(footerContent)

  // console.log(link)

  return (
    <div className={styles.footerContainer}>
      {footerContent &&
        footerContent.map((data, i) => {
          return (
            <div key={i} className={handles.headerContainer}>
              <h4 className={handles.header}>{data[0]}</h4>
              <div key={i}>
                {data[1].map((final) => {
                  return (
                    <a key={i} href={final[1]} className={handles.links}>
                      <li key={i} className={handles.subheader}>
                        {final[0]}
                      </li>
                    </a>
                  )
                })}
              </div>
            </div>
          )
        })}
      <div className={handles.icons}>
        <div>
          {footerSocialLinks &&
            footerSocialLinks.map((x, i) => {
              return (
                <a href={x[1]} key={i}>
                  <img
                    src={x[0]}
                    alt="socialIcons"
                    key={i}
                    className={handles.socialImage}
                  />
                </a>
              )
            })}
        </div>
        <div className={handles.disclamer}>{disclamer}</div>
      </div>
      <div className={handles.copyrightContainer}>
        <p className={handles.copyright}>{copyright}</p>
      </div>
    </div>
  )
}

export default Footer
