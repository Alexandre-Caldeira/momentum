import React from 'react';
import {View, Image, Text, TouchableOpacity, TouchableOpacityComponent} from 'react-native';

import styles from './styles';

import add from '../../assets/ic-plus.png';
import save from '../../assets/ic-check.png';

export default function Footer({icon}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Image source={icon=='add' ? add : save} style ={styles.image}/>
            </TouchableOpacity>
            
            <Text style = {styles.txt}>
                harness your impulse
            </Text>
        </View>
    )
}