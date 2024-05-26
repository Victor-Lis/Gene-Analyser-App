import { AntDesign } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabRoutes } from './tabRoutes';

import Home from '../../Screens/Home';
import Acids from '../../Screens/Acids';
import Synthesis from '../../Screens/Synthesis';

const Tab = createBottomTabNavigator<TabRoutes>();

export function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
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
      <Tab.Screen 
        name="Acids" 
        component={Acids} 
        options={{
          title: "Aminoácidos",
          tabBarIcon: (props) => <AntDesign name='home' {...props} size={props.size*1.25}/>
        }}
      />
      <Tab.Screen 
        name="Synthesis" 
        component={Synthesis} 
        options={{
          title: "Síntese Proteica",
          tabBarIcon: (props) => <AntDesign name='home' {...props} size={props.size*1.25}/>
        }}
      />
    </Tab.Navigator>
  );
}