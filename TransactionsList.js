import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function TransactionsList({ transactions }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleTransactionTapped(item)}>
      <View style={styles.listItem}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.listAmountArrow}>
          <Text style={styles.itemAmount}>{`$${item.amount}`}</Text>
          <AntDesign style={styles.itemAmount} name="right" size={24} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );

  const navigation = useNavigation();

  const handleTransactionTapped = (transaction) => {
    navigation.navigate("TransactionDetail", { transaction });
  };

  return (
    <View>
      <FlatList
        data={transactions}
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
    marginRight: 10,
    color: "#3498db",
    fontWeight: "bold",
  },
  listAmountArrow: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
