import React from 'react';
import { View, ImageBackground, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import Carousel from '../components/Carousel'
import { dummyData } from '../data/Data'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Accordion, List, Left, Thumbnail, Body, Right, Button, ListItem } from "native-base";

const Home = (props) => {
  return (
    <ImageBackground source={require('../assets/Home.jpg')} style={styles.image} >
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <MyHeader navigation={props.navigation} title="Home"/>
      <Carousel data = {dummyData}/>
      <Text style={{color:'Black'}}><Ionicons name='newspaper' size='10' color='Black' />Berita</Text>
        <Content>
          <List style={{backgroundColor:'white'}}>
            <ListItem>
              <Left>
                <Thumbnail square source={require('../assets/snack-icon.png')} />
              </Left>
              <Body>
                <Text>Judul home1</Text>
                <Text note>3:43 pm</Text>
                <Text note>Isi home1</Text>
              </Body>
            </ListItem>
          </List>
          <List style={{backgroundColor:'white'}}>
            <ListItem>
              <Left>
                <Thumbnail square source={require('../assets/snack-icon.png')} />
              </Left>
              <Body>
                <Text>Judul home2</Text>
                <Text note>3:43 pm</Text>
                <Text note>Isi home2</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      <Text style={{color:'Black'}}><Ionicons name='sunny' size='10' color='black' />Tips</Text>
      <Carousel data = {dummyData}/>
      <Text style={{color:'Black'}}><Ionicons name='heart' size='10' color='Black' />Donasi</Text>
      <Carousel data = {dummyData}/>
    </View>
    </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  )
}
export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    width:'100%',
    height:'100%'
  },
})
