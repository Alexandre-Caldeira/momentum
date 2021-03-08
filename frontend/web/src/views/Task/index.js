import React, {useState, useEffect} from 'react';
import * as S from './styles';
import {format} from 'date-fns';
import {Redirect, Link} from 'react-router-dom';
import isConnected from '../../utils/isConnected';

// Configs de comm com api backend
import api from '../../services/api';

// Componentes:
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

//TODO: limitar tamanho do título
//TODO: customize checkbox: https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
function Task({match}) {
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState(`${isConnected}`);
    var [redirect, setRedirect] = useState(false);

    async function LoadTaskDetail(){
        await api.get(`/task/${match.params.id}`)
                 .then(response => {
                     setMacaddress(response.data.macaddress)
                     setType(response.data.type)
                     setTitle(response.data.title)
                     setDescription(response.data.description)
                     setDate(format(new Date(response.data.when), 'yyyy-MM-dd'));
                     setHour(format(new Date (response.data.when), 'HH:mm'));
                     setDone(response.data.done);
                 })
    }

    async function Save(){
        if (!title)
        return alert("Title field required!")
        else if(!description)
        return alert("Description field required!")
        else if(!type)
        return alert("Task type required!")
        else if(!date)
        return alert("Task date required!")
        else if(!hour)
        return alert("Task time schedule required!")


        if (match.params.id){
            await api.put(`/task/${match.params.id}`,{
                macaddress, type, title, description, when: `${date}T${hour}:00.000`, done
            }). then(() => 
                setRedirect(true)
            ).catch(error => alert(error))
        }else{
            await api.post('/task',{
                macaddress, type, title, description, when: `${date}T${hour}:00.000`, done
            }). then(() => 
                setRedirect(true)
            )
        }
    }

    async function Remove(){
        const res = window.confirm('Are you sure you want to delete this task?')

        if (res == true){
            await api.delete(`/task/${match.params.id}`)
                     .then(()=> setRedirect(true));
        }else{ alert('Ok, keep it.') }
    }

    useEffect(() => {
        if(!isConnected){setRedirect(true);}
        LoadTaskDetail();
    }, []) 

    return (
        
        <S.Container>
            {redirect && <Redirect to="/"/>}
            {/* { !redirect ? null : <Redirect to="/" /> } */}

            <Header/>
            
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
                    <input type="text" placeholder="Task title" maxLength={30}
                           onChange = {e => setTitle(e.target.value)} value={title}/>
                </S.Input>
                
                <S.TextArea>
                    <span>Description</span>
                    <textarea rows={5} placeholder="Task details..." maxLength={140}
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
                        <span> Done!</span>
                    </div>
                    {match.params.id && <button type="button" onClick={Remove}>DELETE</button>}
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