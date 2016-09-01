import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from '../jsdom'
import Loader from '../../components/Loader'

test('Loader component', (t) => {
  setupJsdom()
  const wrapper = mount( <Loader /> )
  const component = shallow(<Loader />)
  /*
    console.log(component)
    console.log(wrapper.props())
  */

  t.equal(
    component.find('span').length, 9, 'the Loader component has 9 empty span elements'
  )

  t.end()
});
