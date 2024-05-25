import { AntDesign } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabRoutes } from './tabRoutes';

import Home from '../../Pages/Home';

const Tab = createBottomTabNavigator<TabRoutes>();

export function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false, // Optional: hide labels if desired
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: "Tela Inicial",
          tabBarIcon: (props) => <AntDesign name='home' {...props} size={props.size*1.25}/>
        }}
      />
    </Tab.Navigator>
  );
}