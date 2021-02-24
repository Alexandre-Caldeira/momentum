import React from 'react';
import * as S from './styles';

import digital from '../../assets/ic-digital.png';

function GraphCard() {

    return (
        
        <S.Container>
            <img src={digital} alt="digital"></img>
            
            <span id="nomeFiltro">/graphs</span>
        </S.Container>
    
    )
}
export default GraphCard;
