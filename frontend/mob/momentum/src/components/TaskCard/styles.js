import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        width:'90%',
        height:70,
        // top:'20%',
        padding: 10,
        flexDirection:'row',
        backgroundColor: '#FFF',
        alignItems: 'center', // horizontal
        justifyContent: 'flex-start', // vertical
        marginVertical: 7,
        shadowColor:'#000',
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.7,
        shadowRadius: 4,
        elevation: 6,
        borderRadius: 10,

    },
    LeftSide:{
        flex:1,
        width:'50%',
        // backgroundColor:'#707070',
        flexDirection:'row',
        alignItems: 'center', // horizontal
        justifyContent: 'flex-start', // vertical
    },
    RightSide:{
        flex:1,
        width:'50%',
        flexDirection:'column',
        // backgroundColor:'#707070',
        alignItems: 'flex-end', // horizontal
        justifyContent: 'flex-end', // vertical
    },
    img:{
        resizeMode: 'contain',
        height: 49,
        maxWidth:50
    },
    taskName:{
        fontSize: 15,
        paddingLeft: 10,
        fontWeight: 'bold',
        color: '#707070'
    },
    taskDate:{
        paddingBottom:18,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#F69B60'
    },
    taskTime:{
        fontSize: 12,
        color: '#707070'
    },
    taskDone:{
        opacity:0.5
    }
})

export default styles;