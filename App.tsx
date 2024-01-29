import { StatusBar as ExpoStatusbar } from 'expo-status-bar';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import SearchForm from './src/components/SearchForm';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <SearchForm />
      <ExpoStatusbar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    
  },
});
