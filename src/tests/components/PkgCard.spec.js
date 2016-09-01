import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from '../jsdom'
import PkgCard from '../../components/PkgCard'

test('PkgCard component', (t) => {
  setupJsdom()

  let pkg = { name: 'deku-search', keyword: 'deku', description: 'A Search component'}

  const wrapper = mount( <PkgCard pkg={pkg} /> )
  const component = shallow(<PkgCard pkg={pkg} />)
  /*
    console.log(component)
    console.log(wrapper.props())
  */

  t.equal(
    component.find('p').length, 1, 'the PkgCard component has 1 p element'
  )

  t.pass(
    expect(wrapper.props().pkg).toEqual(pkg)
  )

  t.end()
});
