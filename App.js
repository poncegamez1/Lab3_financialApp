import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Transactions from './Transactions';
import Summary from './Summary';
import Header from './Header';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Header/>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Transactions" component={Transactions} options={{tabBarIcon: () => <FontAwesome name="list" size={24} color="black" />}}>

        </Tab.Screen>
        <Tab.Screen name="Summary" component={Summary} options={{tabBarIcon: () => <MaterialIcons name="summarize" size={24} color="black" />}}>

        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
