import {Dispatch} from "redux";
import {ConvActionTypes} from "../types/actions";
import {ConverterActions} from "../actionTypes";

export const setDailyRate = (rate: any) =>
    (dispatch: Dispatch<ConvActionTypes>) => {
        dispatch({
            type: ConverterActions.SET_DAILY_RATE,
            payload: rate
        })
    }

export const setCurrencyFrom = (curFrom: string) =>
    (dispatch: Dispatch<ConvActionTypes>) => {
        dispatch({
            type: ConverterActions.SET_BASE_CUR,
            payload: curFrom
        })
    }

export const setCurrencyTo = (curTo: string) =>
    (dispatch: Dispatch<ConvActionTypes>) => {
        dispatch({
            type: ConverterActions.SET_CONV_CUR,
            payload: curTo
        })
    }

export const setAmountToConv = (amount: number) =>
    (dispatch: Dispatch<ConvActionTypes>) => {
        dispatch({
            type: ConverterActions.SET_AMOUNT_TO_CONV,
            payload: amount
        })
    }