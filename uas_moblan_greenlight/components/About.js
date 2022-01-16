import React from 'react'
import{ Icon } from 'react-native-elements'

const About = props =>{
  return (
    <Icon 
      color="#fff"
      name="info"
      onPress={() => props.navigation.toggleDrawer()}
    />
  )
}
export default About