import { View, Text, SafeAreaView, Dimensions, Image, TouchableOpacity, TextInput, ScrollView, ViewComponent } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import GreenDot from './GreenDot';
import VideoComponent from './VideoComponent';
import Video2 from './Video2';
import Video3 from './Video3';
import MenuBarTab from './MenuBarTab';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Home({navigation}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#141313'}}>
            <View style={{width:width,height:height,backgroundColor:'#141313',marginTop:10}} >
                <View style={{flexDirection:'row',justifyContent:'space-between',width:width-40,alignSelf:'center'}}>
                     <Image source={require('../assets/logo.png')} style={{width:120,height:80,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center'}} />
                     <View style={{flexDirection:'row'}}>
                     <Image source={require('../icons/search-normal.png')} style={{width:25,height:25,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',marginRight:20}} />
                     <Image source={require('../icons/notification.png')} style={{width:25,height:25,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',marginRight:20}} />
                     <Image source={require('../assets/user.png')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:50/2,borderWidth:1,borderColor:'white'}} />
                     </View>
                </View>
                <View>
                    <ScrollView horizontal={true} style={{}} showsHorizontalScrollIndicator={false} >
                            <View style={{width:50,height:50,borderRadius:50/2,borderWidth:1,borderColor:'white',borderRadius:50/2,alignItems:'center',alignContent:'center',justifyContent:'center',marginRight:5,marginLeft:15}}>
                                <Image source={require('../icons/shorts.png')} style={{width:25,height:25,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',marginBottom:5,marginTop:10}} />
                                <View style={{backgroundColor:'#d71d1d',width:25,height:15,alignSelf:'flex-end',marginTop:-3,borderRadius:10}}>
                                    <Text style={{color:'white',textAlign:'center',alignSelf:'center',alignContent:'center',marginTop:-2}}>+</Text>
                                </View>
                            </View>
                        <View style={{flexDirection:'row'}}>  
                        <Image source={require('../assets/users/1.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderWidth:1,borderColor:'white',borderRadius:50/2,marginLeft:10,marginRight:10}} />
                        <GreenDot/>
                        </View>
                        <Image source={require('../assets/users/2.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderWidth:1,borderColor:'white',borderRadius:50/2,marginLeft:20,marginRight:5}} />
                        <View style={{flexDirection:'row'}}>
                        <Image source={require('../assets/users/3.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderWidth:1,borderColor:'white',borderRadius:50/2,marginLeft:10,marginRight:5}} />
                        <GreenDot/>
                        </View>
                        <Image source={require('../assets/users/4.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderWidth:1,borderColor:'white',borderRadius:50/2,marginLeft:20,marginRight:5}} />
                        <Image source={require('../assets/users/5.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderWidth:1,borderColor:'white',borderRadius:50/2,marginLeft:10,marginRight:10}} />
                        <Image source={require('../assets/users/6.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderWidth:1,borderColor:'white',borderRadius:50/2,marginLeft:10,marginRight:10}} />
                        <Image source={require('../assets/users/7.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderWidth:1,borderColor:'white',borderRadius:50/2,marginLeft:10,marginRight:10}} />
                        <Image source={require('../assets/users/8.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderWidth:1,borderColor:'white',borderRadius:50/2,marginLeft:10,marginRight:10}} />
                        <Image source={require('../assets/users/9.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderWidth:1,borderColor:'white',borderRadius:50/2,marginLeft:10,marginRight:10}} />
                        <Image source={require('../assets/users/10.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderWidth:1,borderColor:'white',borderRadius:50/2,marginLeft:10,marginRight:30}} />
                    </ScrollView>
                </View>
                <View style={{marginTop:20,marginBottom:0}}>
                    <ScrollView  horizontal={true} style={{}} showsHorizontalScrollIndicator={false}  >
                        <View style={{backgroundColor:'#1e1e1e',width:60,height:40,justifyContent:'center',borderRadius:20,borderWidth:1,borderColor:'#3366ff',marginLeft:15}}>
                            <Text style={{color:'white',fontWeight:'800',textAlign:'center',textAlignVertical:'center'}}>All</Text>
                        </View>
                        <View style={{backgroundColor:'#1e1e1e',width:80,height:40,justifyContent:'center',borderRadius:20,marginLeft:10}}>
                            <Text style={{color:'white',fontWeight:'800',textAlign:'center',textAlignVertical:'center'}}>Game</Text>
                        </View>
                        <View style={{backgroundColor:'#1e1e1e',width:60,height:40,justifyContent:'center',borderRadius:20,marginLeft:10}}>
                            <Text style={{color:'white',fontWeight:'800',textAlign:'center',textAlignVertical:'center'}}>Ui</Text>
                        </View>
                        <View style={{backgroundColor:'#1e1e1e',width:80,height:40,justifyContent:'center',borderRadius:20,marginLeft:10}}>
                            <Text style={{color:'white',fontWeight:'800',textAlign:'center',textAlignVertical:'center'}}>figma</Text>
                        </View>
                        <View style={{backgroundColor:'#1e1e1e',width:120,height:40,justifyContent:'center',borderRadius:20,marginLeft:10}}>
                            <Text style={{color:'white',fontWeight:'800',textAlign:'center',textAlignVertical:'center'}}>Ui designer</Text>
                        </View>
                        <View style={{backgroundColor:'#1e1e1e',width:140,height:40,justifyContent:'center',borderRadius:20,marginLeft:10}}>
                            <Text style={{color:'white',fontWeight:'800',textAlign:'center',textAlignVertical:'center'}}>Ux developer</Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={{marginTop:5}}>
                    <ScrollView>
                        <TouchableOpacity onPress={()=>navigation.navigate('HarryPotter')}>
                            <VideoComponent />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('HarryPotter')} style={{marginTop:20}}>
                            <Video2/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('HarryPotter')} style={{marginTop:20,marginBottom:350}}>
                            <Video3/>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
            <View style={{position:'absolute',bottom:0,alignSelf:'center'}}>
                <MenuBarTab selection={"home"} navigation={navigation}/>
            </View>
    </SafeAreaView>
  )
}