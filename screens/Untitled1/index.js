import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("Chat");
      }}><Text style={styles.SkmvDDxM}>Click to go to chat</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  SkmvDDxM: {
    width: 161,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled1;