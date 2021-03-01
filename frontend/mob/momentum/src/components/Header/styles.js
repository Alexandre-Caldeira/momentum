import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:84,
        backgroundColor: '#7CDAC7',
        // borderTopWidth:10,
        // borderTopColor: '#7CDAC7',
        borderBottomWidth: 10.8,
        borderBottomColor: '#FF578E',
        alignItems: 'center', // horizontal
        justifyContent: 'center' // vertical
    },
    logo:{
        height: '50%',
        width: '100%',
        resizeMode: 'contain'
    },
    notification:{
       position: 'absolute',
       right:20,
    },
    notificationText:{
        height: 43,
        fontWeight: 'bold',
        color: '#707070'
    },
    notificationImage:{
        tintColor: '#FF578E',
        height: 27,
        width: 26,
        resizeMode: 'contain'
    },
    circle:{
        height: 15,
        width: 15,
        backgroundColor: '#FFF',
        borderRadius:9,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'absolute',
        left: 16,
        bottom: 16
    },
    leftIcon:{
        position: 'absolute',
        left: 20
     },
     qr:{
        height: 24,
        width: 24,
        resizeMode: 'contain'
    },
    back:{
        height: 24,
        width: 24,
        resizeMode: 'contain'
    }
})

export default styles;