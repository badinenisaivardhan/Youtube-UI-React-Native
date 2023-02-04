import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function VideoComponent() {
  return (
    <View style={{width:width,alignSelf:'center',marginTop:-30}}>
        <View>
            <View style={{flexDirection:'row'}}>
            <Image source={require('../assets/videos/black-adam.jpg')} style={{width:width,height:300,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center'}} />
                <View style={{width:40,height:40,borderRadius:40/2,marginTop:225,marginLeft:-80,backgroundColor:'white',alignContent:'center',alignItems:'center',justifyContent:'center'}}>
                     <Ionicons name="md-play" size={25} color="#d71d1d" style={{marginLeft:2}} />
                </View>
            </View>
            <View style={{marginTop:-40 ,flexDirection:'row',width:width-40,alignSelf:'center',marginRight:15,justifyContent:'space-between',alignContent:'center',alignItems:'center',marginLeft:15}}>
                <Image source={require('../assets/users/6.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:50/2,borderWidth:0.5,borderColor:'white'}} />
                    <View style={{marginLeft:-60,width:width/2,flexDirection:'column',marginTop:10}}>
                        <Text style={{color:'white',fontWeight:'700',fontSize:16,marginLeft:4}} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                        <View style={{flexDirection:'row',marginLeft:4,marginTop:5,justifyContent:'space-evenly',}}>
                            <Text style={{color:'grey',fontWeight:'500',fontSize:15}}>Adel</Text>
                            <Text style={{color:'grey',fontWeight:'500',fontSize:15}}>8.2 M views</Text>
                            <Text style={{color:'grey',fontWeight:'500',fontSize:15}}>5 min ago</Text>
                        </View>
                    </View>
                <Entypo name="dots-three-vertical" size={24} color="white" style={{justifyContent:'center',alignSelf:'center',alignContent:'center'}}/>
            </View>
        </View>
    </View>
  )
}