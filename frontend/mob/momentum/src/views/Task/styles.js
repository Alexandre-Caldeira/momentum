import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',
        alignItems: 'flex-start', // horizontal
        justifyContent: 'flex-start', // vertical,
    },
    icons:{
        resizeMode: 'contain',
        height: 50,
        maxWidth: 50,
        marginHorizontal:5,
        marginVertical: 10,
    },
    label:{
        fontSize: 20,
        marginLeft: 10,
    },
    inputBox:{
        fontSize: 18,
        padding: 5,
        paddingBottom: 1,
        width: '90%',
        borderColor: '#707070',
        borderRadius: 10,
        borderWidth:1,
        minHeight: 100,
        marginHorizontal: 10,
        marginBottom: 10,
        textAlignVertical: 'top'
    },
    inputLine:{
        fontSize: 18,
        padding: 5,
        paddingBottom: 1,
        width: '90%',
        borderBottomColor: '#707070',
        borderBottomWidth:1,
        marginHorizontal: 10,
        marginBottom: 10
    },
    inLine:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal: 15
    },
    inputInLine:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    switchLabel:{
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#707070',
        fontSize: 20
    },
    deleteLabel:{
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#FF578E',
        paddingLeft:10,
        fontSize: 20,
        marginVertical: 10
    },
    typeIconInactive:{
        opacity:0.5
    }
})
export default styles;