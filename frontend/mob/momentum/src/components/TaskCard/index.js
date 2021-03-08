import React from 'react';
import {View,Text, Image, TouchableOpacity} from 'react-native';
import { format } from 'date-fns';

// Styles
import styles from './styles';

// Icons
import typeIcons from '../../utils/typeIcons';

export default function TaskCard({ done, title, when, type, navigation,id}){

    return(
        <TouchableOpacity onPressIn={()=>navigation.navigate('Task', {idtask: id})}
        style={[styles.container,done && styles.taskDone]}>
                <View style={styles.LeftSide}>
                    <Image source={typeIcons[type]} style={styles.img}/>
                    <Text style={styles.taskName}>{title}</Text>
                </View>
                <View style={styles.RightSide}>
                    <Text style={styles.taskDate}>{format(new Date(when),'dd/MM/yyyy')}</Text>
                    <Text style={styles.taskTime}>{format(new Date(when),'HH:mm')}</Text>
                </View>
        </TouchableOpacity>
        
    )
}