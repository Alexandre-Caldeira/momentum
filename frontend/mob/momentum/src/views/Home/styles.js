import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',
        alignItems: 'center', // horizontal
        justifyContent: 'flex-start' // vertical
    },
    Filtercontainer:{
        flex:1,
        flexDirection:'row',
        backgroundColor: '#FFF',
        alignItems: 'center', // horizontal
        justifyContent: 'flex-start', // vertical
        position: 'absolute',
        top: 90
    },
    filterText:{
        fontSize:12,
        position: 'relative',
        top:'-55%',
        alignSelf:'center'
    },
    content:{
        // marginTop: '25%',
        width: '100%',
        marginBottom: 55
    },
    title:{
        marginTop: '15%',
        width:'100%',
        borderBottomWidth: 2,
        borderColor: '#707070',
        alignItems: 'center',
        marginBottom:10
    },
    titleText:{
        color: '#707070',
        fontSize: 15,
        backgroundColor:'#FFF',
        position: 'relative',
        top: 10,
        paddingHorizontal: 15
    }
})

export default styles;