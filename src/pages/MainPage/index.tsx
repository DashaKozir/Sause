import React, {FC, useEffect, useState} from "react";
import axios from "axios";
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

interface IResponse {
    statusText: string
    status: number
}

const MainPage: FC = () => {
    const [curOptions, setCurOptions] = useState<any>([]);
    const [output, setOutput] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);

    const {
        converterReducer: { dailyRate, baseCurrency, amountToConv, convCurrency },
    } = useTypedSelector((state) => state);

    const { setDailyRate, setCurrencyFrom, setCurrencyTo, setAmountToConv } = useActions();

    const back = () => {
        const temp = baseCurrency
        setCurrencyFrom(convCurrency)
        setCurrencyTo(temp)
    }

    const convert = () => {
        if (dailyRate[convCurrency]) {
            const rate = dailyRate[convCurrency].rate
            setOutput(amountToConv * rate)
        }
    }

    const findError = (e: any) => {
        if (isNaN(e.key)) {
            setError(true)
        } else setError(false)
    }

    useEffect(() => {
        try {
          const res = axios.get<IResponse>(`http://www.floatrates.com/daily/${baseCurrency}.json`)
                .then((res: any) => {
                    if (Object.keys(res.data).length !== 0) {
                        setDailyRate(res.data)
                    } else {
                        throw new Error('Something went wrong');
                    }
                })
        } catch (err: any) {
            console.log(err)
            return err
        }

    }, [baseCurrency])

    useEffect(() => {
        if (dailyRate) {
            setCurOptions(Object.keys(dailyRate))
            // convert()
        }
    }, [dailyRate])

    return (
        <div className="main">
            <div className="container">
                <div className="main__left">
                    <h3>Amount</h3>
                    <input
                        type="number"
                        min="1"
                        placeholder="Enter the amount"
                        onKeyDown={(e: any) => findError(e)}
                        onChange={(e: any) => setAmountToConv(e.target.value)}
                    />
                    {error && <span className='error'>Only numbers allowed</span>}
                </div>
                <div className="main__middle">
                    <h3>From</h3>
                    <Dropdown
                        options={curOptions}
                        onChange={(e) => { setCurrencyFrom(e.value) }}
                        value={baseCurrency} placeholder="From"
                    />
                </div>
                <div className="main__switch">
                    <HiSwitchHorizontal size="30px" onClick={() => { back()}}/>
                </div>
                <div className="main__right">
                    <h3>To</h3>
                    <Dropdown
                        options={curOptions}
                        onChange={(e) => {setCurrencyTo(e.value)}}
                        value={convCurrency} placeholder="To"
                    />
                </div>
            </div>
            <div className="main__result">
                <button onClick={()=>{convert()}}>Convert</button>
                <div>
                    <h2>Converted Amount:</h2>
                    <p>{amountToConv+" "+baseCurrency+" = "+output.toFixed(2) + " " + convCurrency}</p>
                </div>
            </div>
        </div>
    )
}

export default MainPage