import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import { Container, Header, Content, Accordion, List, Left, Thumbnail, Body, Right, Button, ListItem } from "native-base";

const Berita = (props) => {
  return (
    <ImageBackground source={require('../assets/Berita.jpg')} style={styles.image} >
    <View>
      <MyHeader navigation={props.navigation} title="Berita"/>
      <Content>
          <List style={{backgroundColor:'white'}}>
            <ListItem>
              <Left>
                <Thumbnail square source={require('../assets/snack-icon.png')} />
              </Left>
              <Body>
                <Text>Judul berita 1</Text>
                <Text note>3:43 pm</Text>
                <Text note>Isi berita 1</Text>
              </Body>
            </ListItem>
          </List>
          <List style={{backgroundColor:'white'}}>
            <ListItem>
              <Left>
                <Thumbnail square source={require('../assets/snack-icon.png')} />
              </Left>
              <Body>
                <Text>Judul berita 2</Text>
                <Text note>3:43 pm</Text>
                <Text note>Isi berita 2</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
    </View>
    </ImageBackground>
  )
}
export default Berita

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width:'100%',
    height:'100%'
  },
})