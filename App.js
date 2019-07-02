import { Container, Content } from 'native-base';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SignUp from './src/components/SignUp';

function App() {
  return (
    <Container>
      <SafeAreaView style={styles.safeArea}>
        <Content>
          <SignUp />
        </Content>
      </SafeAreaView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
    // backgroundColor: '#3F4EA5'
  },
  safeArea: {
    flex: 1
  },
  screenTitle: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10
    // color: '#FFF'
  }
});

export default App;
