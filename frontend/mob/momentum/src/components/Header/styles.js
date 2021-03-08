import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:100,
        backgroundColor: '#7CDAC7',
        // borderTopWidth:20,
        borderTopColor: '#7CDAC7',
        borderBottomWidth: 5,
        borderBottomColor: '#FF578E',
        alignItems: 'center', // horizontal
        justifyContent: 'center' // vertical
    },
    logo:{
        height: '50%',
        width: 200,
        resizeMode: 'contain',
        top: 15
    },
    notification:{
       position: 'absolute',
       right:20,
       bottom: 15
    },
    notificationText:{
        height: 43,
        fontSize:12,
        fontWeight: 'bold',
        color: '#707070'
    },
    notificationImage:{
        tintColor: '#FF578E',
        height: 25,
        width: 24,
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
        left: 15,
        bottom: 15
    },
    leftIcon:{
        position: 'absolute',
        left: 20,
        bottom: 15
     },
     qr:{
        height: 32,
        width: 32,
        resizeMode: 'contain',
        position:'relative',
    },
    back:{
        height: 30,
        width: 30,
        resizeMode: 'contain',
        position: 'relative'
    }
})

export default styles;