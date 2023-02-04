import { View, Text, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function LoginScreen({navigation}) {


  return (
    <SafeAreaView style={{backgroundColor:'#141313'}}>
            <View style={{width:width,height:height,backgroundColor:'#141313'}} >
                <View style={{alignContent:'flex-start',padding:20,marginTop:10}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Intro')}>
                        <Ionicons name="chevron-back" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <Image source={require('../assets/logo.png')} style={{width:200,height:120,resizeMode:'contain',alignSelf:'center',alignContent:'center',alignItems:'center'}} />
                <View>
                    <View style={{width:width-50,height:60,borderWidth:1,borderColor:'grey',alignSelf:'center',borderRadius:20,justifyContent:'center'}}>
                        <View style={{flexDirection:'row'}}>
                        <Image source={require('../icons/email.png')} style={{width:20,height:20,marginLeft:20}}  />
                        <Text style={{color:'grey',textAlign:'center',alignSelf:'center',marginLeft:20}}>Enter email</Text>
                        </View>
                    </View>
                    <View style={{width:width-50,height:60,borderWidth:1,borderColor:'grey',alignSelf:'center',borderRadius:20,justifyContent:'center',marginTop:20}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                            <Image source={require('../icons/lock.png')} style={{width:20,height:20,marginLeft:20}}  />
                            <Text style={{color:'grey',textAlign:'center',alignSelf:'center',marginLeft:20}}>Password</Text>
                            </View>
                                <View>
                                <Image source={require('../icons/eye-slash.png')} style={{width:20,height:20,marginRight:20}}/>
                                </View>
                        </View>
                    </View>
                </View>
                <Text style={{textAlign:'right',color:'grey',marginRight:20,marginTop:20}}>Forget password ?</Text>
            
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <View style={{backgroundColor:'#d71d1d',width:width-50,height:60,alignSelf:'center',borderRadius:20,justifyContent:'center',marginTop:20}}>
                    <Text style={{color:'white',alignSelf:'center',fontSize:20,fontWeight:'800',textAlign:'center',marginLeft:0}}>Log in</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            <View style={{flexDirection:'row',alignSelf:'center',marginTop:60}}>
                <View style={{justifyContent:'space-between',flexDirection:'row',width:width/4}}>
                <Image source={require('../icons/google.png')} style={{width:25,height:25,resizeMode:'contain'}} />
                <Image source={require('../icons/apple.png')} style={{width:27,height:27,resizeMode:'contain',marginTop:-3}} />
                </View>        
            </View>   
            <View style={{flexDirection:'row',alignContent:'center',alignSelf:'center',justifyContent:'center',marginTop:60}}>
                <Text style={{color:'grey'}}>Don't have an account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
                    <Text style={{color:'white',fontWeight:'800',marginLeft:10}}>Sign up</Text>
                </TouchableOpacity>
            </View>
            </View>
    </SafeAreaView>
  )
}