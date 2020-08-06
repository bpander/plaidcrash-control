/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import PlaidLink from 'react-native-plaid-link-sdk';

const App = () => {
  const [n, setN] = useState(0);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>
            {n}
          </Text>
          <Button onPress={() => setN(n + 1)} title="increment" />
          <PlaidLink
            publicKey="a4b52619202472b132ee1c0299bb15"
            clientName="RaiseRight"
            product={['auth']}
            userEmailAddress="test.email@email.com"
            userPhoneNumber="555-555-5555"
            userLegalName="New User"
            language="en"
            countryCodes={['US']}
            onSuccess={() => {}}
            onExit={() => {}}
            env="sandbox"
          >
            <Text>Launch Plaid</Text>
          </PlaidLink>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
