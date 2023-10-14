import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Octicons, Ionicons, MaterialIcons} from '@expo/vector-icons';
import HomeScreen from "./Source/Screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import StoresScreen from "./Source/Screens/Stores";
import OrderScreen from "./Source/Screens/Order";
import ProfileScreen from "./Source/Screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator
              initialRouteName={"Chats"}
              screenOptions={{
                  tabBarStyle: {background: 'whitesmoke'}
              }}
          >

              <Tab.Screen name={"Home"} component={HomeScreen}
                          options={{tabBarIcon: ({color,size}) => (
                                  <Octicons name="home" size={size} color={color} />), headerShown:false }} />

              <Tab.Screen name={"Stores"} component={StoresScreen}
                          options={{tabBarIcon: ({color,size}) => (
                                  <MaterialIcons name="storefront" size={size} color={color} />) }}/>

              <Tab.Screen name={"Orders"} component={OrderScreen}
                          options={ (navigation)=>({tabBarIcon: ({color,size}) => (
                                  <MaterialIcons name="list-alt" size={size} color={color} />)
                          })}/>

              <Tab.Screen name={"Profile"} component={ProfileScreen}
                          options={{tabBarIcon: ({color,size}) => (
                                  <Ionicons name="person-circle-outline" size={size} color={color} />) }}/>

          </Tab.Navigator>
      </NavigationContainer>

  );
};
