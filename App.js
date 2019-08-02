import { Container, Content } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import SignUp from './src/screens/SignUp';

console.disableYellowBox = true;

function App() {
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Content>
          <SignUp />
        </Content>
      </SafeAreaView>
    </Container>
  );
}

export default App;
