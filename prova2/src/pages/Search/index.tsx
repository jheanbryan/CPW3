import React, { useState, useEffect } from 'react';
import { CryptoCard, CryptoDescription, DivLine, InputItems, InputSearch, Item, MainContainer } from "./styles";
import Header from "../../components/Header/index";
import { Crypto, getCryptoOptions } from '../../services/CryptoOptions';
import { getCriptoDetails } from '../../services/CriptoDetails';

const Search = () => {
    const [cryptoOptions, setCryptoOptions] = useState<Crypto[]>([]); // lista de criptosDisponiveis
    const [searchTerm, setSearchTerm] = useState(''); // termo para buscar
    const [showList, setShowList] = useState(false); // lista de criptos para mostrar
    const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null); // guardar cripto clickada


    //carregar itens do input
    useEffect(() => {
        const fetchCryptoOptions = async () => {
          const cryptoOptionsData = await getCryptoOptions();
          setCryptoOptions(cryptoOptionsData);
        };
      
        fetchCryptoOptions();
    }, []);
    
    // Filtra as criptos com base no termo digitado
    const filteredCryptos = cryptoOptions.filter((crypto) =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        crypto.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //definir um novo termo de busca conforme usuario digita
    const handleInputChange = (e: any) => {
        const value = e.target.value;
        console.log(value)
        setSearchTerm(value);
    };

    const showListDiv = () => {
        setShowList(true);
    };

    const removeListDiv = (crypto: Crypto) => {
        //remover a lista, setar o termo e a criptoSelecionada
        setShowList(false);
        setSearchTerm(crypto.name);
        setSelectedCrypto(crypto);                                

        //chamar funcao para dar um get na img e valor da cripto
        getCryptoDetailsById(crypto.id);
    };

    const getCryptoDetailsById = async (id: string) => {
        const cryptoDetails = await getCriptoDetails(id);
        console.log(cryptoDetails);
    };
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
                            <Item 
                            key={index} 
                            onClick={() => {removeListDiv(crypto)}}
                            >
                                <span>{crypto.name}</span>
                            </Item>
                        ))}
                    </InputItems>
                )}

                {selectedCrypto && (
                    <CryptoCard>
                        
                        <CryptoDescription>
                            <h2>{selectedCrypto.name}</h2>
                        </CryptoDescription>
                    </CryptoCard>
                )}
            </MainContainer>
        </>
    );
};
/*

                {crypto && (
                    <CryptoCard>
                        <CryptoImage src={crypto.logo} alt={cryptos.coin}  />
                        
                        <CryptoDescription>
                            <h2>{crypto.coin}</h2>
                            <p>{Number(crypto.prices.BRL).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            <p>Taxa: {cryptos.fee_percent}%</p>
                        </CryptoDescription>
                    </CryptoCard>
                )}
*/
export default Search;
