/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TestIds from './src/utils/testIds';

const App = () => {
  const [active, setActive] = React.useState(true);
  const [counter, setCounter] = React.useState(0);

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView testID={TestIds.welcome}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            testID={TestIds.fakeButton}
            onPress={() => setActive(!active)}>
            <Text testID={TestIds.buttonText}>
              {active ? TestIds.buttonTextOk : TestIds.buttonTextNotOk}
            </Text>
          </TouchableOpacity>
          <TextInput returnKeyType="done" testID={TestIds.textInput} />
          <Text testID='fuck'>{counter}</Text>
          <Button
            testID={TestIds.counterButton}
            title="coun up"
            onPress={() => setCounter(counter + 1)}
          />
         
          <FlatList
            style={{height: 100, backgroundColor: 'sky',marginVertical:10,width:'100%'}}
            
            testID={TestIds.flatList}
            data={['zamalek', 'ahly', 'masry', 'isamily']}
            keyExtractor={(item) => String(item)}
            renderItem={({item, index}) => (
              <Text style={styles.flatListItem}>{item}</Text>
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  flatListItem: {
    textAlign: 'center',
    height: 100,
  },
});

export default App;
