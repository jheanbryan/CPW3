import React, { useState, useEffect } from 'react';
import { CryptoCard, CryptoDescription, CryptoImage, DivLine, InputItems, InputSearch, Item, MainContainer } from "./styles";
import Header from "../../components/Header/index";
import { searchCrypto } from '../../services/cryptService';
import cryptocurrencies from '../../services/CryptoInformation';

const Search = () => {
    const [cryptos, setCryptos] = useState<any | null>(null); 
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
    const [showList, setShowList] = useState(false);  // Estado para controlar o clique no input

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

    const showListDiv = () => {
        setShowList(true);
    };

    const removeListDiv = (criptoTyker: string) => {
        setShowList(false);
        setSearchTerm(criptoTyker) 
    };

    // Filtra as criptos com base no termo digitado
    const filteredCryptos = cryptocurrencies.filter((crypto) =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        crypto.ticker.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header />

            <MainContainer>
                <InputSearch
                    placeholder="Pesquise por uma cripto"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onClick={showListDiv} 
                />
                
                {showList && (
                    <InputItems>
                        {filteredCryptos.map((crypto, index) => (
                            <Item key={index} onClick={() => {removeListDiv(crypto.ticker)}}>
                                <span>{crypto.name}</span>
                                -
                                <span>{crypto.networkType}</span>
                            </Item>
                        ))}
                    </InputItems>
                )}

                {cryptos && (
                    <CryptoCard>
                        <CryptoImage src={cryptos.logo} alt={cryptos.coin}  />
                        
                        <CryptoDescription>
                            <h2>{cryptos.coin}</h2>
                            <p>{Number(cryptos.prices.BRL).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            <p>Taxa: {cryptos.fee_percent}%</p>
                        </CryptoDescription>
                    </CryptoCard>
                )}
            </MainContainer>
        </>
    );
};

export default Search;
