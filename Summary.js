import { StyleSheet, Text, View } from 'react-native';

export default function Summary({ transactions }) {
  
  const numberOfTransactions = transactions.length;
  const totalAmount = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const highestSpending = transactions.reduce((max, transaction) => (transaction.amount > max.amount ? transaction : max), transactions[0]);
  const lowestSpending = transactions.reduce((min, transaction) => (transaction.amount < min.amount ? transaction : min), transactions[0]);

  return (
    <View style={styles.container}>
      <View style={styles.summaryItem}>
        <Text style={styles.itemLabel}>Transactions:</Text>
        <Text style={styles.value}>{numberOfTransactions}</Text>
      </View>

      <View style={styles.summaryItem}>
        <Text style={styles.itemLabel}>Balance:</Text>
        <Text style={styles.value}>${totalAmount}</Text>
      </View>

      <View>
        <Text style={styles.title}>Highest spending:</Text>
        <View style={styles.summaryItem}>
          <Text style={styles.value}>{highestSpending.name}</Text>
          <Text style={styles.value}>${highestSpending.amount}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.title}>Lowest spending:</Text>
        <View style={styles.summaryItem}>
          <Text style={styles.value}>{lowestSpending.name}</Text>
          <Text style={styles.value}>${lowestSpending.amount}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    color: '#3498db'

  },
  summaryItem: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
  },
  value: {
    fontSize: 20,
    padding: 5,
  }
});