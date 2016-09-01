import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from '../jsdom'
import PkgDetails from '../../components/PkgDetails'

test('PkgDetails component', (t) => {
  setupJsdom()

  let pkg = { name: 'deku-search', author: { name: 'Steven Iseki'} }

  const wrapper = mount( <PkgDetails pkg={pkg} /> )
  const component = shallow(<PkgDetails pkg={pkg} />)
  /*
    console.log(component)
    console.log(wrapper.props())
  */

  t.equal(
    component.find('h1').length, 1, 'the PkgDetails component has 1 h1 element for name'
  )

  t.equal(
    component.find('h2').length, 1, 'the PkgDetails component has 1 h2 element for author name'
  )

  t.pass(
    expect(wrapper.props().pkg).toEqual(pkg)
  )

  t.end()
});
