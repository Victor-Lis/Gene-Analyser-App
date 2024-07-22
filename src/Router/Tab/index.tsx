import { Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabRoutes } from './tabRoutes';

import Acids from '../../Screens/Bases';
import Synthesis from '../../Screens/Synthesis';

const Tab = createBottomTabNavigator<TabRoutes>();

export function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "rgb(0, 94, 255)"
      }}
    >
      <Tab.Screen 
        name="Acids" 
        component={Acids} 
        options={{
          title: "Bases Nitrogenadas",
          tabBarIcon: ({size, color, focused}) => 
            <Image
              width={50}
              height={50}
              source={focused ? require('./Assets/acids-icon-active.png') : require('./Assets/acids-icon.png')}
            />
        }}
      />
      <Tab.Screen 
        name="Synthesis" 
        component={Synthesis} 
        options={{
          title: "Síntese Proteica",
          tabBarIcon: ({size, color, focused}) => 
            <Image
              width={50}
              height={50}
              source={focused ? require('./Assets/synthesis-icon-active.png') : require('./Assets/synthesis-icon.png')}
            />
        }}
      />
    </Tab.Navigator>
  );
}