import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from '../jsdom'
import Menu from '../../components/Menu'

test('Menu component', (t) => {
  setupJsdom()

  const testToggle = () => {
    console.log('toggle...')
  }
  let open = false

  const wrapper = mount( <Menu toggleMenu={testToggle} open={false} /> )
  const component = shallow(<Menu toggleMenu={testToggle} open={false} />)
  /*
    console.log(component)
    console.log(wrapper.props())
  */

  t.equal(
    component.find('svg').length, 1, 'the Menu component has 1 svg icon open at once'
  )

  t.pass(
    expect(wrapper.props().toggleMenu).toEqual(testToggle)
  )

  t.pass(
    expect(wrapper.props().open).toEqual(open)
  )

  t.end()
});
