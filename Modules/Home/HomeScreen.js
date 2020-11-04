import React from 'react';

import { View,Text, SectionList, Button, Image, Alert } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';


const DATA = [
    {
      title: "Main dishes",
      data: [
        {"name":"Biriyani", "url":"https://unsplash.com/photos/0j4bisyPo3M/download?force=true&w=350", "price":"₹ 200"}, 
        {"name":"Pizza", "url":"https://unsplash.com/photos/MQUqbmszGGM/download?force=true&w=350", "price":"₹ 180"}, 
        {"name":"Burger", "url":"https://unsplash.com/photos/_qxbJUr9RqI/download?force=true&w=350", "price":"₹ 100"}, 
      ]
    },
    {
      title: "Sides",
      data: [
        {"name":"Avocado and Egg Toast", "url":"https://unsplash.com/photos/fdlZBWIP0aM/download?force=true&w=350", "price":"₹ 85"}, 
        {"name":"Fruit waffles and coffee", "url":"https://unsplash.com/photos/Wns3U-oVoLA/download?force=true&w=350", "price":"₹ 150"}, 
        {"name":"Oranges", "url":"https://unsplash.com/photos/7r1HxvVC7AY/download?force=true&w=350", "price":"₹ 30"}, 
      ]
    },
    {
      title: "Drinks",
      data: [
        {"name":"Strawberry cocktail drinks", "url":"https://unsplash.com/photos/TgQkxQc-t_U/download?force=true&w=350", "price":"₹ 70"}, 
        {"name":"Mojito", "url":"https://unsplash.com/photos/gtDYwUIr9Vg/download?force=true&w=350", "price":"₹ 70"}, 
        {"name":"Iced tea with rose syrup", "url":"https://unsplash.com/photos/sSnCZlEWN5E/download?force=true&w=350", "price":"₹ 70"}, 
      ]
    },
    {
      title: "Desserts",
      data: [
        {"name":"Strawberry Ice cream", "url":"https://unsplash.com/photos/rUGiNjP4OX4/download?force=true&w=350", "price":"₹ 50"}, 
        {"name":"Chocolate cake", "url":"https://unsplash.com/photos/kPxsqUGneXQ/download?force=true&w=350", "price":"₹ 470"}, 
        {"name":"Choclate Ice cream", "url":"https://unsplash.com/photos/NEab1U1FfKM/download?force=true&w=350", "price":"₹ 70"}, 
      ]
    }
  ];

const Item = ({data}) => {
    return (
    <View>
         <Text 
            style={{fontSize:18, marginLeft:24,fontWeight:'bold'}}
         >
            {data.title}
         </Text>
         <FlatList 
         showsHorizontalScrollIndicator = {false}
         showsVerticalScrollIndicator = {false}
         style={{marginVertical:20}}
         data={data.data}
         horizontal={true}
         keyExtractor = {(data,index) => (data + index) }
          renderItem={item =>  (<HItem data={item}></HItem>) }
         />
    </View>
    )
}

const HItem = ({data}) => {
  return (
    <TouchableOpacity 
    onPress={()=>{Alert.alert(data.item.name, data.item.price)}}
    >
      <View style={{
      borderRadius:5,
      width: 210, 
      height: 350, 
      backgroundColor: '#0000', 
      shadowColor:'black', 
      shadowOffset: {
        width: 0, 
        height:0
      }, 
      shadowRadius:16, 
      shadowOpacity: 0.1,
      elevation:5,
      marginLeft:24,
      marginBottom: 30,
      marginRight:20, 
      }}>
      
      <View style={{flex:4.5, backgroundColor:'#0000', borderRadius:10, overflow: 'hidden',}}>
      <Image
        style={{backgroundColor: '#0000', width:'100%', height:'100%'}}
        source={{
          uri: data.item.url
        }}
      />
      </View>
      <View style={{flex:1, justifyContent:'center', alignItems:'flex-start'}}> 
      <Text 
      style={{fontSize:18, fontWeight:'600', marginHorizontal:4, backgroundColor:"transparent", marginTop:8}}
      >
        {data.item.name}
      </Text>
      <Text 
      style={{fontSize:16, fontWeight:'400', marginHorizontal:4, backgroundColor:"transparent", marginTop:4}}
      >
        {data.item.price}
      </Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}

const HomeScreen = () => {

    return (
        <>
        <View style={{flex:0.5}}/>
        <View style={{flex:5}}>
            <Text 
            style={{fontSize:28, fontWeight:'bold', marginLeft:24}}
            >
              Hey, Waseem 👋
            </Text>
            <Text
            style={{fontSize:18, fontWeight:'600', marginTop: 8, color:'gray', marginLeft:24}}
            >
                Enjoy the best picks
            </Text>
            <FlatList 
              showsHorizontalScrollIndicator = {false}
              showsVerticalScrollIndicator = {false}
              style={{marginTop:24}}
              data={DATA}
              renderItem = {(item)=>{ return(<Item data={item.item}/>)}}
              keyExtractor = {(item, index) => (item.title + index)}
            >

            </FlatList>
        </View> 
        </>
    )
    
}

export default HomeScreen