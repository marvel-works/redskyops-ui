import React from 'react'
import {shallow} from 'enzyme'

import {Header} from './Header.component'
import ExperimentsList from '../Experiments/ExperimentsList.component'

describe('Component: Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('should render Header component', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should render <header> tag', () => {
    expect(wrapper.find('header')).toHaveLength(1)
  })

  it('should render Header and ExperimentsList components', () => {
    expect(wrapper.find(ExperimentsList)).toHaveLength(1)
  })

  it('should render logo', () => {
    expect(wrapper.find('img')).toHaveLength(1)
    expect(wrapper.find('img').props()).toHaveProperty('alt', 'Carbon Relay')
  })
})