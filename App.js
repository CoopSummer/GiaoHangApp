import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './src/screens/TrangHome';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView>
        <Home/>
      </SafeAreaView>
    </>
  );
}
