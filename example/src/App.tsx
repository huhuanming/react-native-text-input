import { StyleSheet, TextInput, View } from 'react-native';
import { TextInputView } from 'react-native-text-input';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInputView
        // value="111"
        style={styles.box}
        // onPaste={() => {
        //   Alert.alert('111');
        // }}
      />
      <TextInput value="12222" />
      <TextInput value="333" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 80,
    borderWidth: 2,
    lineHeight: 20,
    borderColor: 'red',
    width: '80%',
  },
});
