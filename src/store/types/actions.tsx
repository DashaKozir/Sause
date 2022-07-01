import {ConverterActions} from '../actionTypes';

interface ISetBaseCur {
    type: ConverterActions.SET_BASE_CUR
    payload: string
}

interface ISetAmountToConv {
    type: ConverterActions.SET_AMOUNT_TO_CONV
    payload: number
}

interface ISetConvCur {
    type: ConverterActions.SET_CONV_CUR
    payload: string
}

interface ISetConvAmount {
    type: ConverterActions.SET_CONV_AMOUNT
    payload: number
}

interface ISetDailyRate {
    type: ConverterActions.SET_DAILY_RATE
    payload: any
}

export type ConvActionTypes =
    | ISetBaseCur
    | ISetAmountToConv
    | ISetConvAmount
    | ISetConvCur
    | ISetDailyRate