import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    input:{
        fontSize: 18,
        padding: 5,
        paddingBottom: 1,
        width: 350,
        borderBottomColor: '#707070',
        borderBottomWidth:1,
        marginHorizontal: 10,
        marginBottom: 10,
        alignSelf: 'stretch',
        color: '#000'
    },
    iconTextInput:{
        position:'absolute',
        left: '85%',
        top: 5,
        width: 25,
        height: 25,
        resizeMode: 'contain',
    }
})

export default styles;