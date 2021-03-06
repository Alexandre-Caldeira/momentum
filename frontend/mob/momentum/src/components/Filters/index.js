import React, { useState } from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

// Styles:
import styles from './styles';

// Icons:
import filterOn from '../../assets/filterOn.png';
import filterOff from '../../assets/filterOff.png';

export default function Filters(){
    const [on,setAtive] = useState('day');
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> setAtive('all')}>
                <Image source={on=='all' ? filterOn : filterOff} style ={styles.image}/>
                <Text style={styles.filterText}>/all</Text>
            </TouchableOpacity>   

            <TouchableOpacity onPress={()=> setAtive('day')}>
                <Image source={on=='day' ? filterOn : filterOff} style ={styles.image}/>
                <Text style={styles.filterText}>/day</Text>
            </TouchableOpacity>   

            <TouchableOpacity onPress={()=> setAtive('week')}>
                <Image source={on=='week' ? filterOn : filterOff} style ={styles.image}/>
                <Text style={styles.filterText}>/week</Text>
            </TouchableOpacity>   

            <TouchableOpacity onPress={()=> setAtive('month')}>
                <Image source={on=='month' ? filterOn : filterOff} style ={styles.image}/>
                <Text style={styles.filterText}>/month</Text>
            </TouchableOpacity>   

            <TouchableOpacity onPress={()=> setAtive('year')}>
                <Image source={on=='year' ? filterOn : filterOff} style ={styles.image}/>
                <Text style={styles.filterText}>/year</Text>
            </TouchableOpacity>   
        </View>
    )
}