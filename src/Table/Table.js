import './table.css';

const Item = ({ coins }) => {
    return (
        <div className="tablesContainer">
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">BINANCE</th>
                    </tr>
                    <tr>
                        <th>PAR</th>
                        <th>PRECIO</th>
                    </tr>
                </thead>
                <tbody>
                    {coins[0].map((i) => {
                        return (
                            <tr key={i.symbol}>
                                <td>{i.symbol}</td>
                                <td>{i.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">KUCOIN</th>
                    </tr>
                    <tr>
                        <th>PRECIO</th>
                        <th>PAR</th>
                    </tr>
                </thead>
                <tbody>
                    {coins[1].map((i) => {
                        return (
                            <tr key={i.symbol}>
                                <td>{i.sell}</td>
                                <td>{i.symbol}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Item;
