import { View, Text, SafeAreaView, Dimensions, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import MenuBarTab from './MenuBarTab';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function MainVideo({navigation}) {
    const imagepath = require('../assets/videos/harry-potter.jpg')
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#141313'}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{flex:1,width:width,height:height,backgroundColor:'#141313',marginTop:0}} >
              <View style={{alignItems:'center'}}>
                <Image source={imagepath} style={{width:width,height:height/3,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',marginTop:-20}} />
                <View style={{flexDirection:'row',justifyContent:'space-between',width:width-40,marginTop:-height/3.5}}>
                     <Ionicons name="chevron-down" size={24} color="white" />
                     <Ionicons name="settings-outline" size={24} color="white" />
                </View>
                <View style={{flexDirection:'row',width:width/2,justifyContent:'space-between',alignSelf:'center',marginTop:height/12}}>
                    <Image source={require('../icons/previous.png')} style={{width:30,height:30,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',marginTop:-20}} />
                    <Image source={require('../icons/Play.png')} style={{width:30,height:30,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',marginTop:-20}} />
                    <Image source={require('../icons/next.png')} style={{width:30,height:30,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',marginTop:-20}} />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:width-40,marginTop:height/13}}>
                     <Text style={{color:'white',fontWeight:'600',alignSelf:'center'}}>2:24</Text>
                     <View style={{flexDirection:'row',justifyContent:'center'}}>
                         <Text style={{color:'white',fontWeight:'600',textAlign:'center',alignSelf:'center',marginRight:10}}>5:24</Text>
                         <Image source={require('../icons/full.png')} style={{width:25,height:25,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center'}} />
                     </View>
                </View>
                <View style={{marginTop:10,flexDirection:'row',alignSelf:'flex-start'}}>
                    <View style={{backgroundColor:'#d71d1d',width:width/3,height:2,marginTop:10}}>
                    </View>
                    <View style={{backgroundColor:'grey',width:width,height:2,marginTop:10}}>
                    </View>
                </View>
              </View>
             <View style={{backgroundColor:'#1f1f1f',width:width,borderBottomLeftRadius:80,borderBottomRightRadius:80}}>
             <View style={{marginTop:- 0,flexDirection:'row',width:width-40,alignSelf:'center',marginRight:15,justifyContent:'space-between',alignContent:'center',alignItems:'center',marginLeft:15}}>
                <Image source={require('../assets/users/6.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:50/2,borderWidth:0.5,borderColor:'white'}} />
                    <View style={{marginLeft:-60,width:width/2,flexDirection:'column',marginTop:10}}>
                        <Text style={{color:'white',fontWeight:'800',fontSize:16,marginLeft:4}} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                        <View style={{flexDirection:'row',marginLeft:-4,marginTop:5,justifyContent:'space-evenly',}}>
                            <Text style={{color:'grey',fontWeight:'500',fontSize:15}}>Adel</Text>
                            <Text style={{color:'grey',fontWeight:'500',fontSize:15}}>8.2 M views</Text>
                            <Text style={{color:'grey',fontWeight:'500',fontSize:15}}>5 min ago</Text>
                        </View>
                    </View>
                    <AntDesign name="down" size={20} color="white" style={{marginTop:20,marginRight:10}} />
            </View>
            <View style={{marginTop:12}}>
              <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'space-around',width:width-50}}>
                  <View style={{flexDirection:'column',alignItems:'center',alignSelf:'center'}}>
                  <AntDesign name="like2" size={26} color="#b6b6b6" />
                  <Text style={{color:'#b6b6b6',marginTop:5}}>1.4k</Text>
                  </View>
                  <View style={{flexDirection:'column',alignItems:'center'}}>
                  <AntDesign name="dislike2" size={26} color="#b6b6b6" />
                  <Text style={{color:'#b6b6b6',marginTop:5}}>258</Text>
                  </View>
                  <View style={{flexDirection:'column',alignItems:'center'}}>
                  <FontAwesome name="send-o" size={24} color="#b6b6b6" />
                  <Text style={{color:'#b6b6b6',marginTop:5}}>Share</Text>
                  </View>
                  <View style={{flexDirection:'column',alignItems:'center'}}>
                  <Feather name="download" size={24} color="#b6b6b6" />
                  <Text style={{color:'#b6b6b6',marginTop:5}}>Download</Text>
                  </View>
                  <View style={{flexDirection:'column',alignItems:'center'}}>
                  <MaterialCommunityIcons name="bookmark-multiple-outline" size={24} color="#b6b6b6" />
                  <Text style={{color:'#b6b6b6',marginTop:5}}>Save</Text>
                  </View>
              </View>
              <View style={{alignSelf:'center',marginTop:15,flexDirection:'row',alignItems:'center',marginBottom:20}}>
                  <View style={{backgroundColor:'#3d3b3b',width:40,height:40,borderRadius:40/2,alignItems:'center',justifyContent:'center',marginRight:10}}>
                    <FontAwesome name="bell-o" size={24} color="white" />
                  </View>
                  <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
                  <View style={{backgroundColor:'#d71d1d',width:130,height:55,borderRadius:20,justifyContent:'center',marginLeft:10}}>
                      <Text style={{color:'white',alignSelf:'center',fontWeight:'700'}}>Subscribe</Text>
                  </View>
                  </TouchableOpacity>
              </View>
            </View>
             </View>
                <Text style={{color:'white',marginLeft:20,width:width-40,textAlign:'left',alignSelf:'center',fontWeight:'700',marginTop:10}}>Maybe you Like that</Text>
            <View style={{flex:1,width:width,alignContent:'flex-start',marginTop:10,marginLeft:5}}>
                <ScrollView style={{}}>
                      <View style={{flexDirection:'row'}}>
                          <View>
                            <Image source={require('../assets/videos/y1.jpg')} style={{width:200,height:100,resizeMode:'contain'}} />
                             <View style={{width:18,height:18,borderRadius:18/2,backgroundColor:'white',alignContent:'center',alignItems:'center',marginTop:-10,marginLeft:150}}>
                              <Ionicons name="md-play" size={15} color="#d71d1d" style={{marginLeft:2}} />
                            </View>
                          </View>
                          <View style={{flexDirection:'column',marginTop:0,width:width/2.5}}>
                            <Text style={{color:'white',fontWeight:'800',fontSize:16,marginLeft:0}} numberOfLines={3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                                <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-evenly',alignItems:'center',marginTop:5,marginLeft:-20}}>
                                   <Image source={require('../assets/users/6.jpg')} style={{width:25,height:25,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:25/2,borderWidth:0.5,borderColor:'white'}} />
                                   <Text style={{color:'grey',textAlign:'center'}}>Amazon prime</Text>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:0,marginTop:5,justifyContent:'space-around',alignContent:'center',alignItems:'center',width:width/2.5}}>
                                  <Text style={{color:'grey',fontWeight:'500',fontSize:15}}>8.2 M views</Text>
                                  <Text style={{color:'grey',fontWeight:'500',fontSize:15,marginLeft:20}}>5 min ago</Text>
                                  <Entypo name="dots-three-vertical" size={15} color="white" style={{justifyContent:'center',alignSelf:'center',alignContent:'center',marginTop:-40}}/>
                                </View> 
                          </View>
                      </View>
                      <View style={{flexDirection:'row',marginTop:20}}>
                          <View>
                            <Image source={require('../assets/videos/y2.jpg')} style={{width:200,height:100,resizeMode:'contain'}} />
                             <View style={{width:18,height:18,borderRadius:18/2,backgroundColor:'white',alignContent:'center',alignItems:'center',marginTop:-10,marginLeft:150}}>
                              <Ionicons name="md-play" size={15} color="#d71d1d" style={{marginLeft:2}} />
                            </View>
                          </View>
                          <View style={{flexDirection:'column',marginTop:0,width:width/2.5}}>
                            <Text style={{color:'white',fontWeight:'800',fontSize:16,marginLeft:0}} numberOfLines={3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                                <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-evenly',alignItems:'center',marginTop:5,marginLeft:-20}}>
                                   <Image source={require('../assets/users/6.jpg')} style={{width:25,height:25,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:25/2,borderWidth:0.5,borderColor:'white'}} />
                                   <Text style={{color:'grey',textAlign:'center'}}>Amazon prime</Text>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:0,marginTop:5,justifyContent:'space-around',alignContent:'center',alignItems:'center',width:width/2.5}}>
                                  <Text style={{color:'grey',fontWeight:'500',fontSize:15}}>8.2 M views</Text>
                                  <Text style={{color:'grey',fontWeight:'500',fontSize:15,marginLeft:20}}>5 min ago</Text>
                                  <Entypo name="dots-three-vertical" size={15} color="white" style={{justifyContent:'center',alignSelf:'center',alignContent:'center',marginTop:-40}}/>
                                </View> 
                          </View>
                      </View>
                      <View style={{flexDirection:'row',marginTop:20,marginBottom:180}}>
                          <View>
                            <Image source={require('../assets/videos/y3.jpg')} style={{width:200,height:100,resizeMode:'contain'}} />
                             <View style={{width:18,height:18,borderRadius:18/2,backgroundColor:'white',alignContent:'center',alignItems:'center',marginTop:-10,marginLeft:150}}>
                              <Ionicons name="md-play" size={15} color="#d71d1d" style={{marginLeft:2}} />
                            </View>
                          </View>
                          <View style={{flexDirection:'column',marginTop:0,width:width/2.5}}>
                            <Text style={{color:'white',fontWeight:'800',fontSize:16,marginLeft:0}} numberOfLines={3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                                <View style={{flexDirection:'row',alignContent:'center',justifyContent:'space-evenly',alignItems:'center',marginTop:5,marginLeft:-20}}>
                                   <Image source={require('../assets/users/6.jpg')} style={{width:25,height:25,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:25/2,borderWidth:0.5,borderColor:'white'}} />
                                   <Text style={{color:'grey',textAlign:'center'}}>Amazon prime</Text>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:0,marginTop:5,justifyContent:'space-around',alignContent:'center',alignItems:'center',width:width/2.5}}>
                                  <Text style={{color:'grey',fontWeight:'500',fontSize:15}}>8.2 M views</Text>
                                  <Text style={{color:'grey',fontWeight:'500',fontSize:15,marginLeft:20}}>5 min ago</Text>
                                  <Entypo name="dots-three-vertical" size={15} color="white" style={{justifyContent:'center',alignSelf:'center',alignContent:'center',marginTop:-40}}/>
                                </View> 
                          </View>
                      </View>
                </ScrollView>  
            </View>
            </View>
         </ScrollView>
            <View style={{position:'absolute',bottom:0,alignSelf:'center'}}>
                <MenuBarTab selection={"home"} navigation={navigation}/>
            </View>
            
    </SafeAreaView>
  )
}