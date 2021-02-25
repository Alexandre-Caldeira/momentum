import React, {useMemo} from 'react';
import {format} from 'date-fns'
import * as S from './styles';

import typeIcons from '../../utils/typeIcons';

function TaskCard({type, title, when}) {
    const date = useMemo(() => format( new Date(when),'dd/MM/yyyy'));
    const hour = useMemo(() => format( new Date(when),'HH:MM'));
    
    return (
        <S.Container>
            <S.TopCard>
                <img src={typeIcons[type]} alt="TaskIcon"/>
                <h1>{title}</h1>
            </S.TopCard>
            
            <S.BottomCard>
                <strong>{date}</strong>
                <span>{hour}</span>
            </S.BottomCard>
            
        </S.Container>

    )
}
export default TaskCard;