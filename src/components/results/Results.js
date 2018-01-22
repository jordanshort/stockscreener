import React from 'react';
import './results.css';

function Results(props){
    return(
        <ul className="wholelist" >
            {props.stocksArr.map((stock) => {
                return(
                    <li key={stock.ticker} className="stockbox"> <a href={`https://finviz.com/quote.ashx?t=${stock.ticker}`}> 
                        <div className="row-container" >
                            <h4 className="companyName">{stock.sector}</h4>
                        </div>
                        <div className="row-container">
                            <h1 className="stocksymbol">{stock.ticker}</h1>
                        </div>
                        <div className="row-container" >
                            <h4 className="lastQuote">Last Quote:</h4>
                        </div>
                        <div className="row-container">
                            <h1 className="price-container">${stock.close_price}</h1>
                        </div>
                        <div className="greenbox"></div>
                        </a>
                    </li>
                )
                })
            }
        </ul>
    )
}

export default Results;