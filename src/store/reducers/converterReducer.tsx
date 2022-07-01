import {IConv} from "../types/state";
import {ConvActionTypes} from "../types/actions";
import {ConverterActions} from "../actionTypes";

const defaultState: IConv = {
    dailyRate: {},
    baseCurrency: 'usd',
    amountToConv: 0,
    convCurrency: 'eur',
    convAmount: 0,
}

const converterReducer = (state = defaultState, action: ConvActionTypes) => {
    switch (action.type) {
        case ConverterActions.SET_DAILY_RATE:
            return {...state, dailyRate: action.payload};
        case ConverterActions.SET_BASE_CUR:
            return {...state, baseCurrency: action.payload};
        case ConverterActions.SET_AMOUNT_TO_CONV:
            return {...state, amountToConv: action.payload};
        case ConverterActions.SET_CONV_CUR:
            return {...state, convCurrency: action.payload};
        case ConverterActions.SET_CONV_AMOUNT:
            return {...state, convAmount: action.payload};
        default:
            return state;
    }
}

export default converterReducer;