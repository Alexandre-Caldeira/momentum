import React from 'react';
import * as S from './styles';

import iconDefault from  '../../assets/ic-default.png';

function TaskCard() {
    return (
        <S.Container>
            <S.TopCard>
                <img src={iconDefault} alt="TaskIcon"/>
                <h1>Título da Tarefa</h1>
            </S.TopCard>
            
            <S.BottomCard>
                <strong>23/02/21</strong>
                <span>13:37</span>
            </S.BottomCard>
            
        </S.Container>

    )
}
export default TaskCard;