// Packages
import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    TextInput,
    ScrollView, 
    TouchableOpacity, 
    Image,
    KeyboardAvoidingView,
    Switch,
    Alert,
    Touchable,
    SegmentedControlIOSComponent
} from 'react-native';
import * as Network from 'expo-network';

// Styles
import styles from './styles';

// Icons
import typeIcons from '../../utils/typeIcons';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DateTimeInput from '../../components/DateTimeInput';

// Backend (API)
import api from '../../services/api'; 

export default function Task({ navigation }){
    const [id, setId] = useState();
    const [done,setDone] = useState(false);
    const [type,setType] = useState(1);
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const [date,setDate] = useState();
    const [time,setTime] = useState();
    const [macaddress, setMacaddress] = useState(); 
    const [load, setLoad] = useState(true);

    async function SaveTask(){
        if(!title)
            return Alert.alert('Set task title!');

        if(!description)
            return Alert.alert('Set task description!');

        if(!type)
            return Alert.alert('Choose task type!');

        if(!date)
            return Alert.alert('Set task date!');

        if(!time)
            return Alert.alert('Set task time!');

        if(id){
            await api.put(`/task/${id}`, {
                    macaddress,
                    done,
                    type,
                    title,
                    description,
                    when: `${date}T${time}.000`
                }).then(() => {
                    navigation.navigate('Home');
            });
        }else{
            await api.post('/task', {
                            macaddress,
                            type,
                            title,
                            description,
                            when: `${date}T${time}:00.000`})
                      .then(() => {
                            navigation.navigate('Home');
                        });
        }

    }

    async function LoadTask(){
        await api.get(`task/${id}`).then(response => {
          setLoad(true);
          setDone(response.data.done);
          setType(response.data.type);
          setTitle(response.data.title);
          setDescription(response.data.description);
          setDate(response.data.when);
          setTime(response.data.when);
        });
      }
    
      async function getMacAddress(){
        await Network.getMacAddressAsync().then(mac => {
          setMacaddress(mac);
          setLoad(false);
        });
      }
    
      async function DeleteTask(){
        await api.delete(`/task/${id}`).then(() => {
          navigation.navigate('Home');
        });
      }
    
      async function Remove(){
        Alert.alert(
          'DELETING TASK',
          'Confirm task removal',
          [
            {text: 'CANCEL'},
            {text: 'CONFIRM', onPress: () => DeleteTask()},
          ],
          { cancelable: true }
        )
      }
    
      useEffect(() => {
        getMacAddress();

        if(navigation.state.params){
          setId(navigation.state.params.idtask);
          LoadTask().then(() => setLoad(false));
        }

      }, [macaddress]);

    return(
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showBack={true} navigation={navigation} showNotification={false}/>
            
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} maxHeight={70}>
                {
                    typeIcons.map((icon,index) => 
                    (
                        icon != null &&
                        <TouchableOpacity onPress={() => setType(index)}>
                            <Image key={index} 
                                   source={icon} 
                                   style={[styles.icons, 
                                          type && type != index && styles.typeIconInactive
                                        ]}
                            />
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>

            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.inputLine} 
                maxLength = {30} 
                placeholder="'Try to take over the world'"
                onChangeText={(text) => setTitle(text)}
                value={title}
            />

            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.inputBox} 
                maxLength = {140} 
                placeholder="'World domination begins with ...'"
                multiline = {true}
                onChangeText={(text) => setDescription(text)}
                value={description}
            />
        
            <DateTimeInput type={'date'} save={setDate}/>
            <DateTimeInput type={'time'} save={setTime}/>

            {
            id &&
                <View >
                    <View style={styles.inputInLine}>
                        <Switch marginHorizontal={5} 
                                onValueChange={() => setDone(!done)}
                                value={done}
                                thumbColor={'#FF578E'}
                        />
                        <Text style={styles.switchLabel}>
                            DONE
                        </Text>
                    </View>
                    <TouchableOpacity onPress={Remove}>
                            <Text style={styles.deleteLabel}>
                                DELETE
                            </Text>
                    </TouchableOpacity>
                </View>
            }
            <Footer icon={'save'} onPress={SaveTask}/>
        </KeyboardAvoidingView>
    )
}