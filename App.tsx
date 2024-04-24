import { StyleSheet, Text, View } from 'react-native';
import MainStack from './Stack/MainStack';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

export default function App() {
  return (
    <Provider store={Store} >
      <MainStack/>
    </Provider>
  );
}
