import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import TransactionsStackScreen from './TransactionsStackScreen';
import SummaryStackScreen from './SummaryStackScreen';
import { useEffect, useState } from 'react';
import * as database from './database'
import { Ionicons } from '@expo/vector-icons';
import FormStackScreen from './FormStackScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await database.load();
      if(data.length > 0) {
        setTransactions(data)
        console.log(data)
      }
    })();
  }, []);

  const handleAddTransaction = (data) => {
    const updateTransactions = [...transactions];
    updateTransactions.push(data);
    setTransactions(updateTransactions);
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Transactions" options={{tabBarIcon: () => <FontAwesome name="list" size={24} color="#3498db" />}}>
          {(props) => <TransactionsStackScreen {...props} transactions={transactions} />}
        </Tab.Screen>
        <Tab.Screen name="Add New" options={{tabBarIcon: () => <Ionicons name="add" size={24} color="#3498db" />}}>
          {(props) => <FormStackScreen {...props} onAddTransaction={handleAddTransaction}/>}
        </Tab.Screen>
        <Tab.Screen name="Summary" options={{tabBarIcon: () => <MaterialIcons name="summarize" size={24} color="#3498db" />}}>
          {(props) => <SummaryStackScreen {...props} transactions={transactions}/>}
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
