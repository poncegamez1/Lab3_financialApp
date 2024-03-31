import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Form from "./Form";

const Stack = createStackNavigator();

export default function FormStackScreen( {onAddTransaction} ) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FormScreen"
        options={{
          title: "Add New Transaction",
          headerStyle: {
            backgroundColor: "#3498db",
          },
          headerTintColor: "#fff",
        }}
      >
        {(props) => (
          <Form {...props} 
          onAddTransaction={onAddTransaction}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
