import { StyleSheet, Text, View } from 'react-native';

export default function Summary({ transactionList }) {
  
  const numberOfTransactions = transactionList.length;
  const totalAmount = transactionList.reduce((acc, transaction) => acc + transaction.amount, 0);
  const highestSpending = transactionList.reduce((max, transaction) => (transaction.amount > max.amount ? transaction : max), transactionList[0]);
  const lowestSpending = transactionList.reduce((min, transaction) => (transaction.amount < min.amount ? transaction : min), transactionList[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <View style={styles.summaryItem}>
        <Text style={styles.itemLabel}>Total number of transactions:</Text>
        <Text>{numberOfTransactions}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.itemLabel}>Total amount:</Text>
        <Text>${totalAmount}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.itemLabel}>Highest spending:</Text>
        <Text>Name: {highestSpending.name}</Text>
        <Text>Amount: ${highestSpending.amount}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.itemLabel}>Lowest spending:</Text>
        <Text>Name: {lowestSpending.name}</Text>
        <Text>Amount: ${lowestSpending.amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  summaryItem: {
    marginBottom: 10,
  },
  itemLabel: {
    fontWeight: 'bold',
  },
});