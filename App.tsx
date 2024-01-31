import { StatusBar as ExpoStatusbar } from 'expo-status-bar';
import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import SearchForm from './src/components/SearchForm';
import { LinearGradient } from "expo-linear-gradient";
import data from './src/sample/data.json'
import FlightOptionItem from './src/components/FlightOptionItem';

const option1 = data[0];
export default function App() {
  return (
    <LinearGradient colors={['#000046', '#1CB5E0']} style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
          {/* <SearchForm /> */}
          <FlatList 
            ListHeaderComponent={<SearchForm />}
            data={data}
            renderItem={({ item }) => <FlightOptionItem flight={item} />}
            showsVerticalScrollIndicator={false}
          />
        <ExpoStatusbar style="light"  />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
