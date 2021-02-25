import React, {useState, useEffect} from 'react';
import * as S from './styles';
import {format} from 'date-fns';
import {Redirect, Link} from 'react-router-dom';

// Configs de comm com api backend
import api from '../../services/api';

// Componentes:
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

function Task({match}) {
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('11:0a:11:11:11:11');
    var [redirect, setRedirect] = useState(false);

    async function checkLate(){
        await api.get(`/task/filter/late/11:0a:11:11:11:11`)
                 .then(response => {
                        setLateCount(response.data.length)
                 })
    }

    async function LoadTaskDetail(){
        await api.get(`/task/${match.params.id}`)
                 .then(response => {
                     setMacaddress(response.data.macaddress)
                     setType(response.data.type)
                     setTitle(response.data.title)
                     setDescription(response.data.description)
                     setDate(format(new Date(response.data.when), 'yyyy-MM-dd'));
                     setHour(format(new Date (response.data.when), 'HH:mm'));
                 })
    }

    async function Save(){
        if (match.params.id){
            await api.put(`/task/${match.params.id}`,{
                macaddress, type, title, description, when: `${date}T${hour}:00.000`
            }). then(() => 
                setRedirect(true)
            ).catch(error => alert(error))
        }else{
            await api.post('/task',{
                macaddress, type, title, description, when: `${date}T${hour}:00.000`
            }). then(() => 
                setRedirect(true)
            )
        }
    }

    useEffect(() => {
        LoadTaskDetail();
        checkLate();
    }, []) 

    return (
        
        <S.Container>
            {/* {redirect && <Redirect to="/"/>} */}
            { !redirect ? null : <Redirect to="/" /> }

            <Header lateCount={lateCount} />
            
            <S.Form>
                <S.IconList>
                    {
                        TypeIcons.map( (icon,index) => (
                            index > 0 &&
                            <button type="button" onClick={()=> setType(index)}>
                                <img src={icon} alt="TaskType" 
                                className={type && type != index && 'inactive' }/>
                            </button>
                        ))
                    }
                </S.IconList>

                <S.Input>
                    <span>Title</span>
                    <input type="text" placeholder="Task title" 
                           onChange = {e => setTitle(e.target.value)} value={title}/>
                </S.Input>
                
                <S.TextArea>
                    <span>Description</span>
                    <textarea rows={5} placeholder="Task details..."
                    onChange = {e => setDescription(e.target.value)} value={description}></textarea>
                </S.TextArea>

                <S.Input>
                    <span>Date</span>
                    <input type="date" placeholder="dd/mm/yyyy"
                    onChange = {e => setDate(e.target.value)} value={date}></input>
                </S.Input>

                <S.Input>
                    <span>Time</span>
                    <input type="time" placeholder="HH:MM"
                    onChange = {e => setHour(e.target.value)} value={hour}></input>
                </S.Input>

                <S.Options>
                    <div>
                        <input type="checkbox" id="checkbx" checked={done}
                        onChange = {() => setDone(!done)}/>
                        <span> Done! </span>
                    </div>
                    <button type="button">DELETE</button>
                </S.Options>

                <S.Save>
                    <button type="button" onClick={Save}>SAVE</button>
                </S.Save>
            </S.Form>

            <Footer/>
        </S.Container>
    
    )
}
export default Task;