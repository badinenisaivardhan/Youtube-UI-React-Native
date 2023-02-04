import { View, Text, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Intro({navigation}) {

    const showLogin = ()=>{
        navigation.navigate('LoginScreen')
    } 

  return (
    <SafeAreaView style={{backgroundColor:'#141313'}}>
            <View style={{width:width,height:height,backgroundColor:'#141313'}} >
                    <View style={{marginTop:height/10,alignSelf:'center',justifyContent:'center'}}>
                          <Image source={require('../icons/youtube.png')} style={{width:200,height:120,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center'}} />
                        <View style={{marginTop:60}}>
                            <Text style={{color:'white',fontSize:30,fontWeight:'700',textAlign:'center'}}>Welcome</Text>
                            <Text style={{color:'white',fontSize:30,fontWeight:'700',textAlign:'center'}}>to best video app in</Text>
                        </View>
                        <View style={{width:width-50,marginTop:30}}>
                            <Text style={{color:'white',fontSize:15,fontWeight:'200',textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                        </View>
                        <View style={{marginTop:60,alignContent:'center',flexDirection:'row',justifyContent:'space-evenly'}}>
                            <TouchableOpacity onPress={()=>showLogin()}>
                            <View style={{backgroundColor:'#d71d1d',width:150,height:80,borderRadius:20,flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text style={{color:'white',alignSelf:'center',fontSize:20,fontWeight:'800',textAlign:'center',marginLeft:45}}>Log in</Text>
                             </View>
                            </TouchableOpacity>
                                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                                        <View style={{justifyContent:'space-between',flexDirection:'row',width:width/4}}>
                                        <Image source={require('../icons/google.png')} style={{width:25,height:25,resizeMode:'contain'}} />
                                        <Image source={require('../icons/apple.png')} style={{width:27,height:27,resizeMode:'contain',marginTop:-3}} />
                                        </View>        
                                    </View>
                        </View>
                        <View style={{flexDirection:'row',alignContent:'center',alignSelf:'center',justifyContent:'center',marginTop:60}}>
                            <Text style={{color:'grey'}}>Don't have an account?</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                                <Text style={{color:'white',fontWeight:'800',marginLeft:10}}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
    </SafeAreaView>
  )
}