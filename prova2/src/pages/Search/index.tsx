import React, { useState, useEffect } from 'react';
import { DivLine, InputSearch, MainContainer } from "./styles";
import Header from "../../components/Header/index";
import { searchCrypto } from '../../services/cryptService';

const Search = () => {
    const [cryptos, setCryptos] = useState<any | null>(null); 
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

    useEffect(() => {
        if (debouncedTerm) {
            const fetchCryptoData = async () => {
                const result = await searchCrypto(debouncedTerm);
                setCryptos(result);
            };
            fetchCryptoData();
        }
    }, [debouncedTerm]);

    const handleInputChange = (e: any) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 500);
        return () => clearTimeout(timer);  
    }, [searchTerm]);

    return (
        <>
            <Header />
            <MainContainer>
                <InputSearch
                    placeholder="Pesquise por uma cripto"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                {cryptos && (
                    <div>
                        <h2>{cryptos.coin}</h2>
                        <img src={cryptos.logo} alt={cryptos.coin} style={{ width: '50px', height: '50px' }} />
                        <p>Ticker: {cryptos.ticker}</p>
                        <p>Status: {cryptos.status}</p>
                        <p>Minimum Transaction: {cryptos.minimum_transaction} {cryptos.minimum_transaction_coin}</p>
                        <p>Minimum Fee: {cryptos.minimum_fee} {cryptos.minimum_fee_coin}</p>
                        <p>Fee Percent: {cryptos.fee_percent}</p>
                    </div>
                )}
            </MainContainer>
        </>
    );
};

export default Search;
