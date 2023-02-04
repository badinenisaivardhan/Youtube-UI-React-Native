import { View, Text, Dimensions, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default function MenuBarTab({navigation,selection}) {

 if(selection == "home"){
  return (
    <View style={{alignSelf:'center'}}>
      <View>
        <View style={{width:width,height:70,backgroundColor:'#272727',justifyContent:'center'}}>
          <View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:10,marginRight:10}}>
              <View style={{alignItems:'center'}}>
              <TouchableOpacity style={{alignItems:'center'}} onPress={()=>navigation.navigate('Home')}>
                <FontAwesome5 name="home" size={25} color="white" />
                <Text style={{color:'white',marginTop:5,fontSize:12,fontWeight:'700'}}>Home</Text>
                </TouchableOpacity>
              </View>
              <View style={{alignItems:'center'}}>
                <FontAwesome5 name="compass" size={25} color="grey" />
                <Text style={{color:'grey',marginTop:5,fontSize:12,fontWeight:'700'}}>Explore</Text>
              </View>
              <View style={{alignItems:'center',alignSelf:'flex-start',marginTop:-35,marginLeft:10}}>
                  <View style={{backgroundColor:'#d71d1d',width:50,height:50,borderRadius:50/2,justifyContent:'center',borderColor:'white',borderWidth:1}}>
                      <Text style={{color:'white',alignSelf:'center',fontSize:25,fontWeight:'600'}}>+</Text>
                  </View>
              </View>
              <View style={{alignItems:'center'}}>
                  <TouchableOpacity style={{alignItems:'center'}} onPress={()=>navigation.navigate('Channels')}>
                    <FontAwesome5 name="users" size={25} color="grey" />
                    <Text style={{color:'grey',marginTop:5,fontSize:12,fontWeight:'700'}}>Channels</Text>
                  </TouchableOpacity>
              </View>
              <View style={{alignItems:'center'}}>
              <MaterialCommunityIcons name="youtube-subscription" size={25} color="grey" />
                <Text style={{color:'grey',marginTop:5,fontSize:12,fontWeight:'700'}}>Library</Text>
              </View>
          </View>
        </View>
      </View>
    </View>
  )
 }
 else if( selection == "channels"){
  return (
    <View style={{alignSelf:'center'}}>
      <View>
        <View style={{width:width,height:70,backgroundColor:'#272727',justifyContent:'center'}}>
          <View style={{flexDirection:'row',justifyContent:'space-around',marginLeft:10,marginRight:10}}>
              <View style={{alignItems:'center'}}>
              <TouchableOpacity style={{alignItems:'center'}} onPress={()=>navigation.navigate('Home')}>
                <FontAwesome5 name="home" size={25} color="grey" />
                <Text style={{color:'grey',marginTop:5,fontSize:12,fontWeight:'700'}}>Home</Text>
                </TouchableOpacity>
              </View>
              <View style={{alignItems:'center'}}>
                <FontAwesome5 name="compass" size={25} color="grey" />
                <Text style={{color:'grey',marginTop:5,fontSize:12,fontWeight:'700'}}>Explore</Text>
              </View>
              <View style={{alignItems:'center',alignSelf:'flex-start',marginTop:-35,marginLeft:10}}>
                  <View style={{backgroundColor:'#d71d1d',width:50,height:50,borderRadius:50/2,justifyContent:'center',borderColor:'white',borderWidth:1}}>
                      <Text style={{color:'white',alignSelf:'center',fontSize:25,fontWeight:'600'}}>+</Text>
                  </View>
              </View>
              <View style={{alignItems:'center'}}>
              <TouchableOpacity style={{alignItems:'center'}} onPress={()=>navigation.navigate('Channels')}>
                    <FontAwesome5 name="users" size={25} color="white" />
                    <Text style={{color:'white',marginTop:5,fontSize:12,fontWeight:'700'}}>Channels</Text>
                  </TouchableOpacity>
              </View>
              <View style={{alignItems:'center'}}>
              <MaterialCommunityIcons name="youtube-subscription" size={25} color="grey" />
                <Text style={{color:'grey',marginTop:5,fontSize:12,fontWeight:'700'}}>Library</Text>
              </View>
          </View>
        </View>
      </View>
    </View>
  )
 }
}