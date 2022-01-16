import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import { Container, Header, Content, Accordion, List, Left, Thumbnail, Body, Right, Button, ListItem } from "native-base";

const Tips = (props) => {
  return (
    <ImageBackground source={require('../assets/Tips.jpg')} style={styles.image} >
    <View>
      <MyHeader navigation={props.navigation} title="Tips"/>
      <Content>
          <List style={{backgroundColor:'white'}}>
            <ListItem>
              <Left>
                <Thumbnail square source={require('../assets/snack-icon.png')} />
              </Left>
              <Body>
                <Text>Judul tips1</Text>
                <Text note>3:43 pm</Text>
                <Text note>Isi tips 1</Text>
              </Body>
            </ListItem>
          </List>
          <List style={{backgroundColor:'white'}}>
            <ListItem>
              <Left>
                <Thumbnail square source={require('../assets/snack-icon.png')} />
              </Left>
              <Body>
                <Text>Judul tips2</Text>
                <Text note>3:43 pm</Text>
                <Text note>Isi tips2</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
    </View>
    </ImageBackground>
  )
}
export default Tips

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width:'100%',
    height:'100%'
  },
})