import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Summary from "./Summary";

const Stack = createStackNavigator();

export default function SummaryStackScreen({ transactionList }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SummaryScreen"
        options={{
          title: "Summary",
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTintColor: "#fff",
        }}
      >
        {(screenProps) => (
          <Summary
            {...screenProps}
            transactionList={transactionList}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
