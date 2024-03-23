import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TransactionsDetail from "./TransactionsDetail";
import TransactionsList from "./TransactionsList";

const Stack = createStackNavigator();

export default function TransactionsStackScreen({ transactionList }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionsList"
        options={{ title: "Transactions List" }}
      >
        {(screenProps) => (
          <TransactionsList
            {...screenProps}
            transactionList={transactionList}
          />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="TransactionDetail"
        component={TransactionsDetail}
        options={{ title: 'Transaction Detail' }}
      />
    </Stack.Navigator>
  );
}
