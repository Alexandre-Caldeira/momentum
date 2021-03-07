// Packages
import React, { useEffect, useState } from 'react';
import { View, Text , ScrollView, TouchableOpacity, Image, ActivityIndicator} from 'react-native';

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

export default function Home(){
    const [filter,setFilter] = useState('day');
    const [tasks,setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    async function loadTasks(){
        setLoading(true)
        await api.get(`/task/filter/${filter}/11:0a:11:11:11:11`).then( response => {
            setTasks(response.data)
            setLoading(false)
        });
    }

    useEffect(()=> {
        loadTasks();
    },[filter])


    return(
        
        <View style={styles.container}>
            <Header/>
            
            <View style={styles.Filtercontainer}>
                <TouchableOpacity onPress={()=> setFilter('all')}>
                    <Image source={filter=='all' ? filterOn : filterOff}/>
                    <Text style={styles.filterText}>/all</Text>
                </TouchableOpacity>   
                <TouchableOpacity onPress={()=> setFilter('day')}>
                    <Image source={filter=='day' ? filterOn : filterOff}/>
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
                <Text style={styles.titleText}> TASKS </Text>
            </View>
            
            {loading ?
                 <ActivityIndicator color={'#FF578E'}/>
             :
                <ScrollView style= {styles.content} contentContainerStyle={{alignItems:'center'}}>
                    {
                        tasks.map(t => 
                        (
                            <TaskCard done={false} title={t.title} when={t.when}/>
                        ))
                    }
                </ScrollView>
            }
            <Footer icon={'add'}/>
        </View>
    )
}