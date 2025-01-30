import  { useState, useEffect } from 'react';
import { CryptoCard, CryptoDescription, InputItems, InputSearch, Item, MainContainer, CryptoImage, CryptoName } from "./styles";
import Header from "../../components/Header/index";
import { Crypto, getCryptoOptions } from '../../services/CryptoOptions';
import { getCriptoDetails } from '../../services/CriptoDetails';

const Search = () => {
    const [cryptoOptions, setCryptoOptions] = useState<Crypto[]>([]); // lista de criptosDisponiveis
    const [searchTerm, setSearchTerm] = useState(''); // termo para buscar
    const [showList, setShowList] = useState(false); // lista de criptos para mostrar
    const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null); // guardar cripto clickada
    const [cryptoDetails, setCryptoDetails] = useState<any>(null); // estado para detalhes da cripto

    // Carregar itens do input
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

    // Definir um novo termo de busca conforme usuário digita
    const handleInputChange = (e: any) => {
        const value = e.target.value;
        console.log(value);
        setSearchTerm(value);
    };

    const showListDiv = () => {
        setShowList(true);
    };

    const removeListDiv = (crypto: Crypto) => {
        // Remover a lista, setar o termo e a criptoSelecionada
        setShowList(false);
        setSearchTerm(crypto.name);
        setSelectedCrypto(crypto);

        // Chamar função para dar um get na imagem e valor da cripto
        getCryptoDetailsById(crypto.id);
    };

    const getCryptoDetailsById = async (id: string) => {
        const details = await getCriptoDetails(id); // Aqui você pega os detalhes da cripto
        console.log(details);
        setCryptoDetails(details); // Armazenando os detalhes da cripto no estado
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
                                onClick={() => { removeListDiv(crypto) }}
                            >
                                <span>{crypto.name}</span>
                            </Item>
                        ))}
                    </InputItems>
                )}

                {selectedCrypto && cryptoDetails && (
                    <CryptoCard>
                         <CryptoImage src={cryptoDetails.image} alt={selectedCrypto.name} />

                        <CryptoDescription>
                            <CryptoName>{selectedCrypto.name}</CryptoName>
                            <p>R$ {cryptoDetails.current_price}</p>
                        </CryptoDescription>
                    </CryptoCard>
                )}
            </MainContainer>
        </>
    );
};

export default Search;
