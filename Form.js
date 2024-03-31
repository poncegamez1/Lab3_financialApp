import React from "react";
import { TextInput, View, Button, StyleSheet, Keyboard, Text, ActivityIndicator } from "react-native";
import * as database from "./database";
import { useState } from "react";


export default function Form( {onAddTransaction} ) {
  const [transactionName, setTransactionName] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionLocation, setTransactionLocation] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [savingData, setSavingData] = useState(false)


  const handleAddTransactionTapped = async () => {
    if (
      transactionName &&
      transactionAmount &&
      transactionLocation &&
      transactionDate
    ) {
      const amount = parseFloat(transactionAmount);
      const data = {
        name: transactionName,
        amount: amount,
        location: transactionLocation,
        date: transactionDate,
      };

      setSavingData(true)
      const id = await database.save(data);
      setSavingData(false)
      if (id) {
        data.id = id;
        onAddTransaction(data);
        setTransactionName("");
        setTransactionAmount("");
        setTransactionLocation("");
        setTransactionDate("");
        Keyboard.dismiss();
      }
    }
  };

  const handleNameChange = (value) => {
    setTransactionName(value);
  };

  const handleAmountChange = (value) => {
    setTransactionAmount(value);
  };

  const handleLocationChange = (value) => {
    setTransactionLocation(value);
  };

  const handleDateChange = (value) => {
    setTransactionDate(value);
  };

  if (savingData) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large"/>
        <Text style={styles.loadingText}>Saving data!</Text>
        <Text style={styles.loadingText}>Please wait...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        maxLength={150}
        onChangeText={handleNameChange} 
        defaultValue={transactionName}
        autoFocus={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        maxLength={150}
        onChangeText={handleLocationChange} 
        defaultValue={transactionLocation}
        autoFocus={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        maxLength={150}
        onChangeText={handleAmountChange} 
        defaultValue={transactionAmount}
        keyboardType="numeric"
        autoFocus={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter date"
        maxLength={150}
        onChangeText={handleDateChange} 
        defaultValue={transactionDate}
        autoFocus={true}
      />
      <Button style={styles.button} title="Add Transaction" onPress={handleAddTransactionTapped} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "#3498db",
    borderRadius: 5,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingText: {
    fontSize: 20,
    marginTop:10
  }
});
