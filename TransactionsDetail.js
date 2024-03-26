import { View, Text, StyleSheet } from "react-native";

export default function TransactionDetail ({ route }) {
  const { transaction } = route.params;

  return (
    <View>
      <View style={styles.container}>
        <Text style={{ fontSize: 45 }}>{`$${transaction.amount}`}</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{transaction.name}</Text>
        <Text style={{ fontSize: 16 }}>{transaction.location}</Text>
      </View>
      <View style={styles.transaction}>
        <Text style={{ fontSize: 16 }}>Transaction Date:</Text>
        <Text style={{ fontSize: 16 }}>{transaction.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30
  },
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  }
})

