/* eslint-disable prettier/prettier */
import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
const {Button} = require('../Pages/Users/UserStyles')

describe("test Button props", () => {
  test('check props Button', () => {
    const button = renderer.create(<Button />).toJSON()
    expect(button).toHaveStyleRule("color: #FFFFFF")
    expect(button).not.toHaveStyleRule("color: #800080")
    expect(button).toHaveStyleRule("background-color: #135846")
  })
});