import { View, Text } from 'react-native';

const TransactionDetail = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{transaction.name}</Text>
      <Text style={{ fontSize: 16 }}>{`Amount: $${transaction.amount}`}</Text>
      <Text style={{ fontSize: 16 }}>{`Location: ${transaction.location}`}</Text>
      <Text style={{ fontSize: 16 }}>{`Date: ${transaction.date}`}</Text>
    </View>
  );
};

export default TransactionDetail;