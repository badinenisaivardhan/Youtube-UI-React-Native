import { View, Text, SafeAreaView, Dimensions, Image, TouchableOpacity, TextInput, ScrollView, ViewComponent } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import GreenDot from './GreenDot';
import VideoComponent from './VideoComponent';
import Video2 from './Video2';
import Video3 from './Video3';
import MenuBarTab from './MenuBarTab';
import { Feather } from '@expo/vector-icons';
import MiniVideoPlayer from './MiniVideoPlayer';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Channels({navigation}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#141313'}}>
            <View style={{flex:1,width:width-40,height:height,backgroundColor:'#141313',marginTop:10,marginLeft:10,alignSelf:'center'}} >
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                  </TouchableOpacity>
                  <Text style={{color:'white',fontWeight:'700',fontSize:17}}>Channels</Text>
                  <Image source={require('../assets/user.png')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:50/2,borderWidth:0.5,borderColor:'white'}} />
                </View>

              <View style={{borderColor:'grey',borderWidth:1,width:width-20,height:60,borderRadius:20,marginTop:20,justifyContent:'center',alignSelf:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Feather name="search" size={28} color="grey" style={{marginLeft:20}} />
                  <Text style={{color:'grey',fontWeight:'700',marginLeft:20}}>Search channels</Text>
                </View>
              </View>

                <View style={{marginLeft:10,marginTop:10,marginBottom:10}}>
                <Text style={{color:'white',fontWeight:'700',marginTop:10}}>Sort by : May be you like that</Text>
                </View>

             <ScrollView style={{flex:1,width:width-20,alignSelf:'center',alignContent:'center'}} showsVerticalScrollIndicator={true}>
             <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
             <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-evenly'}}>
                  <Image source={require('../assets/user.png')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:50/2}} />
                  <View style={{flexDirection:'column'}}>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>badinenisaivardhan</Text>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>1M Subscribers 200 video</Text>
                  </View>
                  <View style={{backgroundColor:'#d71d1d',width:100,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                    <Text style={{color:'white',fontWeight:'700'}}>Subscribe</Text>
                  </View>
                </View>

             </TouchableOpacity>
                <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-evenly'}}>
                  <Image source={require('../assets/users/1.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:50/2}} />
                  <View style={{flexDirection:'column'}}>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>soroushnrz</Text>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>1M Subscribers 200 video</Text>
                  </View>
                  <View style={{width:100,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',borderColor:'grey',borderWidth:1,alignSelf:'center'}}>
                    <Text style={{color:'white',fontWeight:'700'}}>Subscribed</Text>
                  </View>
                </View>

                <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-evenly'}}>
                  <Image source={require('../assets/users/2.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:50/2}} />
                  <View style={{flexDirection:'column'}}>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>soroushnrz</Text>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>1M Subscribers 200 video</Text>
                  </View>
                  <View style={{width:100,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',borderColor:'grey',borderWidth:1,alignSelf:'center'}}>
                    <Text style={{color:'white',fontWeight:'700'}}>Subscribed</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-evenly'}}>
                  <Image source={require('../assets/users/3.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:50/2}} />
                  <View style={{flexDirection:'column'}}>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>soroushnrz</Text>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>1M Subscribers 200 video</Text>
                  </View>
                  <View style={{width:100,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',borderColor:'grey',borderWidth:1,alignSelf:'center'}}>
                    <Text style={{color:'white',fontWeight:'700'}}>Subscribed</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-evenly'}}>
                  <Image source={require('../assets/users/4.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:50/2}} />
                  <View style={{flexDirection:'column'}}>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>soroushnrz</Text>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>1M Subscribers 200 video</Text>
                  </View>
                  <View style={{width:100,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',borderColor:'grey',borderWidth:1,alignSelf:'center'}}>
                    <Text style={{color:'white',fontWeight:'700'}}>Subscribed</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-evenly'}}>
                  <Image source={require('../assets/users/5.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:50/2}} />
                  <View style={{flexDirection:'column'}}>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>soroushnrz</Text>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>1M Subscribers 200 video</Text>
                  </View>
                  <View style={{width:100,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',borderColor:'grey',borderWidth:1,alignSelf:'center'}}>
                    <Text style={{color:'white',fontWeight:'700'}}>Subscribed</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-evenly'}}>
                  <Image source={require('../assets/users/6.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:50/2}} />
                  <View style={{flexDirection:'column'}}>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>soroushnrz</Text>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>1M Subscribers 200 video</Text>
                  </View>
                  <View style={{width:100,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',borderColor:'grey',borderWidth:1,alignSelf:'center'}}>
                    <Text style={{color:'white',fontWeight:'700'}}>Subscribed</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-evenly'}}>
                  <Image source={require('../assets/users/7.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:50/2}} />
                  <View style={{flexDirection:'column'}}>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>soroushnrz</Text>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>1M Subscribers 200 video</Text>
                  </View>
                  <View style={{width:100,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',borderColor:'grey',borderWidth:1,alignSelf:'center'}}>
                    <Text style={{color:'white',fontWeight:'700'}}>Subscribed</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-evenly'}}>
                  <Image source={require('../assets/users/8.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:50/2}} />
                  <View style={{flexDirection:'column'}}>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>soroushnrz</Text>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>1M Subscribers 200 video</Text>
                  </View>
                  <View style={{width:100,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',borderColor:'grey',borderWidth:1,alignSelf:'center'}}>
                    <Text style={{color:'white',fontWeight:'700'}}>Subscribed</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-evenly'}}>
                  <Image source={require('../assets/users/9.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:50/2}} />
                  <View style={{flexDirection:'column'}}>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>soroushnrz</Text>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>1M Subscribers 200 video</Text>
                  </View>
                  <View style={{width:100,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',borderColor:'grey',borderWidth:1,alignSelf:'center'}}>
                    <Text style={{color:'white',fontWeight:'700'}}>Subscribed</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-evenly',marginBottom:80}}>
                  <Image source={require('../assets/users/10.jpg')} style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center',borderRadius:50/2}} />
                  <View style={{flexDirection:'column'}}>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>soroushnrz</Text>
                     <Text style={{color:'white',fontWeight:'700',marginTop:5}}>1M Subscribers 200 video</Text>
                  </View>
                  <View style={{width:100,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',borderColor:'grey',borderWidth:1,alignSelf:'center'}}>
                    <Text style={{color:'white',fontWeight:'700',textAlign:'center'}}>Subscribed</Text>
                  </View>
                </View>
             </ScrollView>
            </View>
            <View style={{position:'absolute',bottom:0,alignSelf:'center'}}>
                <MiniVideoPlayer/>
                <MenuBarTab selection={"channels"} navigation={navigation}/>
            </View>
    </SafeAreaView>
  )
}