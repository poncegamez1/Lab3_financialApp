import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import TransactionsStackScreen from './TransactionsStackScreen';
import SummaryStackScreen from './SummaryStackScreen';



const Tab = createBottomTabNavigator();

export default function App() {

  const transactionList = [
    {name: 'Amazon', amount: 45.00, location: 'London, On', date: '02-03-2024'},
    {name: 'Walmart', amount: 50.00, location: 'Toronto, On', date: '05-03-2024'},
    {name: 'Target', amount: 13.00, location: 'Kitchener, On', date: '06-03-2024'},
    {name: 'Best Buy', amount: 10.00, location: 'Hamilton, On', date: '10-03-2024'},
    {name: 'Macy\'s', amount: 20.00, location: 'Winnipeg, Mn', date: '12-03-2024'},
    {name: 'Home Depot', amount: 100.00, location: 'Vancouver, Bc', date: '13-03-2024'},
    {name: 'Lowe\'s', amount: 37.00, location: 'Montreal, Qb', date: '13-03-2024'},
    {name: 'Costco', amount: 90.00, location: 'Ottawa, On', date: '18-03-2024'},
    {name: 'CVS Pharmacy', amount: 67.00, location: 'Niagaras Falls, On', date: '19-03-2024'},
    {name: 'Walgreens', amount: 89.00, location: 'Sarnia, On', date: '20-03-2024'},
    {name: 'Nordstrom', amount: 23.00, location: 'Calglary, Al', date: '21-03-2024'},
    {name: 'Adidas', amount: 14.00, location: 'Victoria, Bc', date: '22-03-2024'}
  ]

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Transactions" options={{tabBarIcon: () => <FontAwesome name="list" size={24} color="#3498db" />}}>
          {(props) => <TransactionsStackScreen {...props} transactionList={transactionList} />}
        </Tab.Screen>
        <Tab.Screen name="Summary" options={{tabBarIcon: () => <MaterialIcons name="summarize" size={24} color="#3498db" />}}>
          {(props) => <SummaryStackScreen {...props} transactionList={transactionList}/>}
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
