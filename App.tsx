import { SafeAreaView, StatusBar } from 'react-native';
// screen
import Home from './src/screen/Home';
// provider
import { ValuesProvider } from './src/shared/context/ValuesProvider';

export default function App() {
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <ValuesProvider>
        <Home />
      </ValuesProvider>
    </SafeAreaView>
  );
}