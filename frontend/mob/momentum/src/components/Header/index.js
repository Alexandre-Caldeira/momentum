import React from 'react';
import { View, Text, Image, TouchableOpacity, Touchable} from 'react-native';

import styles from './styles';

// ICONES
import logo from '../../assets/logo.png';
import qr from '../../assets/ic-qrcode.png';
import bell from '../../assets/ic-bell.png';
import back from '../../assets/ic-back.png';

export default function Header({ showNotification, showBack }){
    return(
        <View style={styles.header}>
            {showBack ? 
            <TouchableOpacity style={styles.leftIcon}>
                <Image source={back} style={styles.back}/>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.leftIcon}>
                <Image source={qr} style={styles.qr}/>
            </TouchableOpacity>
            }
            
            <Image source={logo} style={styles.logo}/>
            
            {!showNotification && 
            <TouchableOpacity style={styles.notification}>
                <Image source={bell} style={styles.notificationImage}/>
                <View style={styles.circle}>
                    <Text style={styles.notificationText}>3</Text>
                </View>
            </TouchableOpacity>
            }

        </View>
        
    )
}