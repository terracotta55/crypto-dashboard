import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-gap: 15px;
    margin-top: 20px;
`

const getLowerSectionCoins = (coinList, filteredCoins) => {
    return (filteredCoins && Object.keys(filteredCoins)) 
        || Object.keys(coinList).slice(0, 120)
}

const getCoinsToDisplay = (coinList, topSection, favorites, filteredCoins) => {
    return topSection ? favorites : getLowerSectionCoins(coinList, filteredCoins);
}
const CoinGrid = ({topSection}) => {
    return (
        <AppContext.Consumer>
            {({coinList, favorites, filteredCoins}) => (
                <CoinGridStyled>
                    {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(coinKey => 
                        <CoinTile topSection={topSection} coinKey={coinKey} key={coinKey}/>
                    )}
                </CoinGridStyled>
            )}
        </AppContext.Consumer>
    );
}
 
export default CoinGrid;