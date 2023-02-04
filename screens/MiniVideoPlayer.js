import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default function MiniVideoPlayer() {
  return (
    <View style={{backgroundColor:'#272727',width:width,height:135}}>
      <View style={{flexDirection:'row',marginTop:10,width:width,alignSelf:'center',justifyContent:'space-around'}}>
         <Image source={require('../assets/videos/black-adam.jpg')} style={{width:140,height:90,resizeMode:'contain'}} />
         <View style={{width:width/2.5,justifyContent:'center'}}>
          <Text style={{color:'white',textAlign:'left',fontWeight:'700'}} numberOfLines={2} >Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Text style={{color:'grey',textAlign:'left',fontWeight:'500',marginTop:10}} >Amazon prime</Text>
          </View>
         </View>
        <View style={{flexDirection:'column',marginTop:-15}}>
           <View style={{width:24,height:24,borderRadius:24/2,backgroundColor:'white',justifyContent:'center',marginTop:25,marginLeft:0}}>
               <Ionicons name="md-play" size={18} color="#d71d1d" style={{alignItems:'center',alignSelf:'center',alignContent:'center'}} />
          </View>
          <View style={{width:24,height:24,borderRadius:24/2,backgroundColor:'white',justifyContent:'center',marginTop:15,marginLeft:0}}>
               <Ionicons name="close" size={18} color="#d71d1d" style={{alignItems:'center',alignSelf:'center',alignContent:'center'}} />
          </View>
        </View>
      </View>
      <View style={{width:width,borderWidth:1,borderColor:'grey',marginTop:5}}>
      </View>
    </View>
  )
}