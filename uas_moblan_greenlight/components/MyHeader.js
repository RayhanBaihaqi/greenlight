import React from 'react'
import { Header, Image } from 'react-native-elements'

import About from './About'

const MyHeader = (props) => {
  return (
      <Header
        leftComponent={<Image source={require('../assets/snack-icon.png')} style={{ width: 20, height: 20 }}/>}
        centerComponent={{ text: props.title, style: { color: '#fff' } }}
        rightComponent={<About navigation={props.navigation} />}
      />
  )
}
export default MyHeader
