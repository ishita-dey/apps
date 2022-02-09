import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure, render, mount } from 'enzyme'
import Footer from '../Footer'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('Component: Footer', () => {
  const props = {
    header: ['Products', 'Owner'],
    images: [],
    disclamer: [],
    socailLinks: [],
    copyright: [],
  }
  const footerSocialLinks = { footerSocialLinks }

  test('component rendered properly', () => {
    const wrapper = render(<Footer debug />)
    expect(toJson(wrapper, { noKey: true, mode: 'deep' })).toMatchSnapshot()
  })

  it('check prop-types', () => {
    let wrapper = shallow(<Footer {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('check childAt & type', () => {
    let wrapper = shallow(<Footer />)
    // console.log(wrapper.find('.footerContainer').childAt(0).type())
    expect(wrapper.find('.footerContainer').childAt(0).type()).toBe('div')
  })

  // it('check props at correct position', () => {
  //   let wrapper = shallow(<Footer disclamer={props.disclamer} />)
  //   expect(toJson(wrapper.find('div div div')))
  // })

  // it('check props vlaue', () => {
  //   let wrapper = mount(<Footer footerSocialLinks={footerSocialLinks} />)
  //   console.log(toJson(wrapper.find('div')))
  // })

  it('check parent class exists', () => {
    let wrapper = shallow(<Footer />)
    expect(wrapper.find('.footerContainer').length).toBe(1)
  })

  it('check first child class exists out of 4', () => {
    let wrapper = shallow(<Footer />)
    expect(wrapper.find('.icons').length).toBe(1)
  })

  it('check second child class exists out of 4', () => {
    let wrapper = shallow(<Footer />)
    expect(wrapper.find('.disclamer').length).toBe(1)
  })
  it('check third child class exists out of 4', () => {
    let wrapper = shallow(<Footer />)
    expect(wrapper.find('.copyrightContainer').length).toBe(1)
  })
  it('check fourth child class exists out of 4', () => {
    let wrapper = shallow(<Footer />)
    expect(wrapper.find('.copyright').length).toBe(1)
  })
})
