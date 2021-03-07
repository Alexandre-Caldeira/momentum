import React from 'react';
import {View,Text, Image, TouchableOpacity} from 'react-native';
import { format } from 'date-fns';

// Styles:
import styles from './styles';

// Icons
import icDefault from '../../assets/ic-default.png';

export default function TaskCard({ done, title, when }){

    return(
        <TouchableOpacity style={[styles.container,done && styles.taskDone]}>
                <View style={styles.LeftSide}>
                    <Image source={icDefault} style={styles.img}/>
                    <Text style={styles.taskName}>{title}</Text>
                </View>
                <View style={styles.RightSide}>
                    <Text style={styles.taskDate}>{format(new Date(when),'dd/MM/yyyy')}</Text>
                    <Text style={styles.taskTime}>{format(new Date(when),'HH:mm')}</Text>
                </View>
        </TouchableOpacity>
        
    )
}