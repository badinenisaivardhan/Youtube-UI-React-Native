import { View, Text, SafeAreaView, Dimensions, Image, TouchableOpacity, TextInput, ScrollView, ViewComponent } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import MenuBarTab from './MenuBarTab';
import { Feather } from '@expo/vector-icons';
import MiniVideoPlayer from './MiniVideoPlayer';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Profile({navigation}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#141313'}}>
     <ScrollView style={{flex:1}} scrollEnabled={true} >
            <View style={{width:width-40,height:height,backgroundColor:'#141313',marginTop:-20,alignSelf:'center'}} >
            <Image source={require('../assets/videos/profile-banner.jpg')} style={{width:width,height:height/3.5,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:10}} />
            <View style={{flexDirection:'row',marginTop:-height/18,justifyContent:'space-between',width:width-40,}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{backgroundColor:'#3d3b3b',width:40,height:40,borderRadius:40/2,alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                        <FontAwesome name="bell-o" size={24} color="white" />
                  </View>
                  <View style={{backgroundColor:'#d71d1d',width:120,height:50,borderRadius:20,justifyContent:'center',marginLeft:10,alignSelf:'center',alignItems:'center'}}>
                          <Text style={{color:'white',alignSelf:'center',fontWeight:'700'}}>Subscribe</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <Image source={require('../assets/user.png')} style={{width:70,height:70,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:70/2,borderWidth:1,borderColor:'white'}} />
                </View>

            </View>

            <View style={{flexDirection:'row',marginTop:10}}>
              <Text style={{color:'grey',fontSize:16,fontWeight:'400',marginRight:20}}>Biography</Text>
              <Text style={{color:'grey',fontSize:16,fontWeight:'400',marginRight:10}}>1M Subscribers</Text>
              <Text style={{color:'grey',fontSize:16,fontWeight:'400'}}>200 videos</Text>
            </View>

            <View style={{marginTop:20}}>
                <ScrollView horizontal={true} style={{width:width}}>
                    <View>
                       <Text style={{color:'white',fontSize:15,fontWeight:'800'}}>Home</Text>
                       <View style={{height:3,backgroundColor:'#d71d1d',width:30,alignSelf:'center'}}></View>
                    </View>
                    <Text style={{color:'grey',fontSize:15,fontWeight:'800',marginLeft:20,marginRight:10}}>Video</Text>
                    <Text style={{color:'grey',fontSize:15,fontWeight:'800',marginLeft:10,marginRight:10}}>Playlist</Text>
                    <Text style={{color:'grey',fontSize:15,fontWeight:'800',marginLeft:10,marginRight:10}}>Community</Text>
                    <Text style={{color:'grey',fontSize:15,fontWeight:'800',marginLeft:10,marginRight:10}}>Channels</Text>
                    <Text style={{color:'grey',fontSize:15,fontWeight:'800',marginLeft:10,marginRight:10}}>About</Text>
                    <Text style={{color:'grey',fontSize:15,fontWeight:'800',marginLeft:10,marginRight:20}}>Report</Text>
                </ScrollView>
            </View>

            <View style={{alignSelf:'flex-start'}}>
              <Text style={{color:'grey',fontSize:15,fontWeight:'800',marginLeft:0,marginTop:25}}>Latest </Text>
            </View>

            <View style={{width:width,alignContent:'flex-start',marginTop:10,marginLeft:-10}}>
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
              </View>
            
            </View>
      </ScrollView>
    
            <View style={{position:'absolute',bottom:0,alignSelf:'center'}}>
                <MiniVideoPlayer/>
                <MenuBarTab selection={"channels"} navigation={navigation}/>
            </View>
            
    </SafeAreaView>
  )
}