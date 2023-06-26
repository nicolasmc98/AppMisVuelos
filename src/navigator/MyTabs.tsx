import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import { Search } from '../screens/Search';
import { Profile } from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    activeColor='#f4f8e6'
    inactiveColor='#f4f8e6'

    barStyle={{ backgroundColor: '#ac504b' }}

    >
      <Tab.Screen name="Search" component={Search} options={{title:"Buscar", tabBarIcon: ({ color }) => (
            <Icon name="search-circle-outline" color={color} size={26}  />
          )}}   />  
      <Tab.Screen name="Profile" component={Profile} options={{title:"Perfil", tabBarIcon: ({ color }) => (
            <Icon name="person-circle-outline" color={color} size={26} />
          )}}   />
    </Tab.Navigator>
  );
}
export default MyTabs;