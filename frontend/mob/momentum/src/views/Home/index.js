// Packages
import React from 'react';
import { View, Text } from 'react-native';

// Styles
import styles from './styles';

// Components
import Header from '../../components/Header';

export default function Home(){
    return(
        
        <View style={styles.container}>
            <Header/>
            <Text>Welcome HOME!</Text>
        </View>
    )
}