import React from 'react';
import * as S from './styles';

import filtro from '../../assets/ic-filter.png';

function FilterCard({title, active}) {

    return (
        
        <S.Container active={active}>
            <img src={filtro} alt="filtro"></img>
            
            <span id="nomeFiltro">{title}</span>
        </S.Container>
    
    )
}
export default FilterCard;
