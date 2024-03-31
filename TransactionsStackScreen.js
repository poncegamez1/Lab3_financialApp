import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TransactionsDetail from "./TransactionsDetail";
import TransactionsList from "./TransactionsList";

const Stack = createStackNavigator();

export default function TransactionsStackScreen({ transactions }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionsList"
        options={{
          title: "Transactions List",
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTintColor: "#fff",
        }}
      >
        {(screenProps) => (
          <TransactionsList
            {...screenProps}
            transactions={transactions}
          />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="TransactionDetail"
        component={TransactionsDetail}
        options={{
          title: "Transaction Detail",
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
