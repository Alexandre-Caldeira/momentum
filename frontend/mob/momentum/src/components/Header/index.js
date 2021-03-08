import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

// ICONES
import logo from '../../assets/logo.png';
import qr from '../../assets/ic-qrcode.png';
import bell from '../../assets/ic-bell.png';
import back from '../../assets/ic-back.png';


export default function Header({ showNotification, showBack, bellClick, navigation, late}){
 
    async function Back(){
        navigation.navigate('Home')
    }

    function goSync(){
        navigation.navigate('Sync');
      }
    
    return(
        <View style={styles.header}>
            {showBack ? 
                <TouchableOpacity style={styles.leftIcon} onPress={Back}>
                    <Image source={back} style={styles.back}/>
                </TouchableOpacity>
            :
                <TouchableOpacity style={styles.leftIcon} onPress={goSync}>
                    <Image source={qr} style={styles.qr}/>
                </TouchableOpacity>
            }
            
            <Image source={logo} style={styles.logo}/>
            
            {showNotification && 
            <TouchableOpacity style={styles.notification} onPress={bellClick}>
                <Image source={bell} style={styles.notificationImage}/>
                {late > 0 &&
                    <View style={styles.circle}>
                        <Text style={styles.notificationText}>{late}</Text>
                    </View>
                }
            </TouchableOpacity>
            }

        </View>
        
    )
}