import React, { useState, useEffect } from 'react';
import * as S from './styles';

// Configs de comm com api backend
import api from '../../services/api';

// Componentes:
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import GraphCard from '../../components/GraphCard';
import TaskCard from '../../components/TaskCard';

function Home() {
    const [filterActive, setFilterActive] = useState('day');
    const [tasks, setTasks] = useState([]);

    async function loadTasks(){
        await api.get(`/task/filter/${filterActive}/11:0a:11:11:11:11`)
                 .then(response => {
                        setTasks(response.data)
                 })
    }

    useEffect(() => {
        loadTasks();
    }, [filterActive]) 

    return (
        
        <S.Container>
            <Header/>

            <S.FilterArea>
                <button type="button" onClick={()=> setFilterActive('all')}>
                    <FilterCard title="/all" active={filterActive == 'all'} />
                </button>

                <button type="button" onClick={()=> setFilterActive('day')}>
                    <FilterCard title="/day" active={filterActive == 'day'} />
                </button>

                <button type="button" onClick={()=> setFilterActive('week')}>
                    <FilterCard title="/week" active={filterActive == 'week'} />
                </button>

                <button type="button" onClick={()=> setFilterActive('month')}>
                    <FilterCard title="/month" active={filterActive == 'month'} />
                </button>

                <button type="button" onClick={()=> setFilterActive('year')}>
                    <FilterCard title="/year" active={filterActive == 'year'} />
                </button>

                <button type="button" onClick={()=> setFilterActive('label')}>
                    <FilterCard title="/label" active={filterActive =='label'} />
                </button>

                <GraphCard/>
            </S.FilterArea>

            <S.Title>
                <h3>TASKS</h3>
            </S.Title>

            <S.Content>
                {
                    tasks.map(t => (
                        <TaskCard type={t.type} title={t.title} when={t.when}/>                           
                    ))
                }
                
            </S.Content>
            
            <Footer/>
        </S.Container>
    
    )
}
export default Home;

// {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


