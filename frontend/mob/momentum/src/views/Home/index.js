// Packages
import React, { useEffect, useState } from 'react';
import { View, Text , ScrollView, TouchableOpacity, Image, ActivityIndicator, Alert} from 'react-native';
import * as Network from 'expo-network';

// Styles
import styles from './styles';

// Icons
import filterOn from '../../assets/filterOn.png';
import filterOff from '../../assets/filterOff.png';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';

// Backend (API)
import api from '../../services/api'; 

export default function Home({ navigation }){
    const [filter,setFilter] = useState('today');
    const [tasks,setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [lateCount, setLateCount] = useState();
    const [macaddress, setMacaddress] = useState();

    async function getMacAddress(){
        await Network.getMacAddressAsync().then(mac => {
          setMacaddress(mac);
        });
      }

    async function loadTasks(){
        setLoading(true)
        await api.get(`/task/filter/${filter}/${macaddress}`).then( response => {
            setTasks(response.data)
            setLoading(false)
        });
    }

    async function lateVerify(){
        await api.get(`/task/filter/late/${macaddress}`)
        .then(response => {
          setLateCount(response.data.length)      
        });
      }

    async function LateTasks(){
        setFilter('late')
    }

    function NewTask(){
        navigation.navigate('Task')
    }

    function Show(id){
        navigation.navigate('Task', {idtask: id});
    }

    useEffect(() => {
        getMacAddress().then(() => {
          loadTasks();
        });
        
        lateVerify();
    }, [filter, macaddress])

    return(
        <View style={styles.container}>
                <Header bellClick={LateTasks} showNotification={true} late={lateCount} navigation={navigation}/>
            
            <View style={styles.Filtercontainer}>
                <TouchableOpacity onPress={()=> setFilter('all')}>
                    <Image source={filter=='all' ? filterOn : filterOff}/>
                    <Text style={styles.filterText}>/all</Text>
                </TouchableOpacity>   
                <TouchableOpacity onPress={()=> setFilter('today')}>
                    <Image source={filter=='today' ? filterOn : filterOff}/>
                    <Text style={styles.filterText}>/day</Text>
                </TouchableOpacity>   

                <TouchableOpacity onPress={()=> setFilter('week')}>
                    <Image source={filter=='week' ? filterOn : filterOff}/>
                    <Text style={styles.filterText}>/week</Text>
                </TouchableOpacity>   

                <TouchableOpacity onPress={()=> setFilter('month')}>
                    <Image source={filter=='month' ? filterOn : filterOff}/>
                    <Text style={styles.filterText}>/month</Text>
                </TouchableOpacity>   

                <TouchableOpacity onPress={()=> setFilter('year')}>
                    <Image source={filter=='year' ? filterOn : filterOff}/>
                    <Text style={styles.filterText}>/year</Text>
                </TouchableOpacity>   
            </View>

            <View style={styles.title}>
                <Text style={styles.titleText}>{filter=='late' ? 'LATE' : 'TASKS'}</Text>
            </View>
            
               {loading ?
                    <ActivityIndicator color={'#FF578E'}/>
                :
                    <ScrollView style= {styles.content} contentContainerStyle={{alignItems:'center'}}>
                        {
                            tasks.map(t => 
                            (
                                <TaskCard 
                                    key={t._id} 
                                    done={t.done} 
                                    title={t.title} 
                                    when={t.when} 
                                    type = {t.type}
                                    id = {t._id}
                                    navigation={navigation}
                                    // ()=>navigation.navigate('Task', {idtask: t._id})  
                                />
                            ))
                        }
                    </ScrollView>
                }
            
            <Footer icon={'add'} onPress={NewTask}/>
        </View>
    )
}