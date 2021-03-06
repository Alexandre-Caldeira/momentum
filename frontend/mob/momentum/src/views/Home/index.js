// Packages
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Styles
import styles from './styles';

// Components
import Header from '../../components/Header';
import Filters from '../../components/Filters';
import Footer from '../../components/Footer';

// Icons
import filterOn from '../../assets/filterOn.png';
import filterOff from '../../assets/filterOff.png';

export default function Home(){
    return(
        
        <View style={styles.container}>
            <Header/>
            <Filters/>
            <Footer icon={'add'}/>
        </View>
    )
}