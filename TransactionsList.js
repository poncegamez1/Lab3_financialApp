import { FlatList, View, Text, StyleSheet, TouachableOpacity, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function TransactionsList({ transactionList }) {

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleTransactionTapped(item)}>
      <View style={styles.listItem}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemAmount}>{`$${item.amount}`}</Text>
      </View>
    </TouchableOpacity>
  );

  const navigation = useNavigation();

  const handleTransactionTapped = (transaction) => {
    navigation.navigate('TransactionDetail', { transaction });
  };

  return (
    <View>
      <FlatList
        data={transactionList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemAmount: {
    fontSize: 16,
  },
});
