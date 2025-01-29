import  React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Platform, View } from 'react-native';


import { colors } from './src/utils/colors';
import { Focus } from './src/features/focus';
import { Timer } from './src/features/timer';
import { FocusHistory } from './src/features/focusHistory';


export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject}/>
          <FocusHistory history={}/>
        </>
      ) :
      (
        <View>
          <Timer 
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => setCurrentSubject(null)}/>
        </View>
      )}
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
 
  },
});
