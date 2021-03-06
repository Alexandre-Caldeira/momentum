import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor: '#FFF',
        alignItems: 'center', // horizontal
        justifyContent: 'flex-start', // vertical
        position: 'absolute',
        top: 90
    },
    filter:{
        
    },
    filterText:{
        fontSize:12,
        position: 'relative',
        top:'-55%',
        alignSelf:'center'
    }
})

export default styles;