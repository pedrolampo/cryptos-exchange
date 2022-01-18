import './App.css';
import Table from './Table/Table';
import { useEffect, useState } from 'react';
import { sortArray } from './utils';

const App = () => {
    const url = 'https://api.binance.com/api/v3/ticker/price';
    const url2 = 'https://api.kucoin.com/api/v1/market/allTickers';
    const [binanceData, setBinanceData] = useState([]);
    const [kucoinData, setKucoinData] = useState([]);

    const binanceFiltered = binanceData.map((coin) => {
        return coin.symbol.includes('USDT') ? coin : null;
    });
    const kucoinFiltered = kucoinData.map((coin) => {
        return coin.symbol.includes('USDT') ? coin : null;
    });

    const binanceUSDT = binanceFiltered
        .filter((e) => e !== null)
        .sort(sortArray);

    const kucoinUSDT = kucoinFiltered
        .filter((e) => e !== null)
        .map((e) => {
            return { ...e, symbol: e.symbol.replace('-', '') };
        })
        .sort(sortArray);

    const coins = [
        binanceUSDT.filter((array) =>
            kucoinUSDT.some((filter) => filter.symbol === array.symbol)
        ),
        kucoinUSDT.filter((array) =>
            binanceUSDT.some((filter) => filter.symbol === array.symbol)
        ),
    ];

    console.log(coins);

    const fetchCoins = () => {
        fetch(url)
            .then((resp) => {
                return resp.json();
            })
            .then((response) => {
                setBinanceData(response);
            });

        fetch(url2)
            .then((resp) => {
                return resp.json();
            })
            .then((response) => {
                setKucoinData(response.data.ticker);
            })
            .catch(() => {
                setKucoinData([]);
            });
    };

    useEffect(() => {
        fetchCoins();
    }, []);

    return (
        <div className="app">
            <button onClick={fetchCoins}>Refresh</button>
            {coins[0].length === 0 ? (
                <h1>
                    Por favor habilita la extensión "Moesif Origin & Cors
                    Changer"
                </h1>
            ) : (
                <Table coins={coins} />
            )}
        </div>
    );
};

export default App;
