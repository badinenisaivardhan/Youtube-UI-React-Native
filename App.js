import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import Home from './screens/Home';
import Intro from './screens/Intro';
import LoginScreen from './screens/LoginScreen';
import Signup from './screens/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import MenuBarTab from './screens/MenuBarTab';
import MainVideo from './screens/MainVideo';
import Channels from './screens/Channels';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
   
  return (
    <NavigationContainer>
      <ExpoStatusBar hidden={true}/>
      <Stack.Navigator initialRouteName='Intro'>
        <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="HarryPotter" component={MainVideo} options={{headerShown:false}} />
        <Stack.Screen name="Channels" component={Channels} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

