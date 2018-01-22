import React from 'react';
import './customresults.css';

function CustomResults(props){
    return(
        <div className="resultgroup">
            <h4>Results:</h4>
            <ul className="wholelist1" >
                {props.resultsToDisplay.map((stock) => {
                    return(
                        <li key={stock.ticker} className="stockbox1"> <a href={`https://finviz.com/quote.ashx?t=${stock.ticker}`}> 
                            <div className="row-container1" >
                                <h4 className="companyName1">{stock.sector}</h4>
                            </div>
                            <div className="row-container1">
                                <h1 className="stocksymbol1">{stock.ticker}</h1>
                            </div>
                            <div className="row-containe1r" >
                                <h4 className="lastQuote1">Last Quote:</h4>
                            </div>
                            <div className="row-container1">
                                <h1 className="price-container1">${stock.close_price}</h1>
                            </div>
                            <div className="greenbox1"></div>
                            </a>
                        </li>
                    )
                    })
                }
            </ul>
        </div>
    )
}

export default CustomResults;