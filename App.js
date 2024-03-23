import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Summary from './Summary';
import TransactionsStackScreen from './TransactionsStackScreen';



const Tab = createBottomTabNavigator();

export default function App() {

  const transactionList = [
    {name: 'Expense 1', amount: 45, location: 'London, On', date: '02-03-2024'},
    {name: 'Expense 2', amount: 50, location: 'Toronto, On', date: '05-03-2024'},
    {name: 'Expense 3', amount: 13, location: 'Kitchener, On', date: '06-03-2024'},
    {name: 'Expense 4', amount: 10, location: 'Hamilton, On', date: '10-03-2024'},
    {name: 'Expense 5', amount: 20, location: 'Winnipeg, Mn', date: '12-03-2024'},
    {name: 'Expense 6', amount: 100, location: 'Vancouver, Bc', date: '13-03-2024'},
    {name: 'Expense 7', amount: 37, location: 'Montreal, Qb', date: '13-03-2024'},
    {name: 'Expense 8', amount: 90, location: 'Ottawa, On', date: '18-03-2024'},
    {name: 'Expense 9', amount: 67, location: 'Niagaras Falls, On', date: '19-03-2024'},
    {name: 'Expense 10', amount: 89, location: 'Sarnia, On', date: '20-03-2024'},
    {name: 'Expense 11', amount: 23, location: 'Calglary, Al', date: '21-03-2024'},
    {name: 'Expense 12', amount: 14, location: 'Victoria, Bc', date: '22-03-2024'}
  ]

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Transactions" options={{tabBarIcon: () => <FontAwesome name="list" size={24} color="black" />}}>
          {(props) => <TransactionsStackScreen {...props} transactionList={transactionList} />}

        </Tab.Screen>
        <Tab.Screen name="Summary" options={{tabBarIcon: () => <MaterialIcons name="summarize" size={24} color="black" />}}>
          {(props) => <Summary {...props} transactionList={transactionList}/>}

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
