import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  EQUALS,
  MEMORY_ADD,
  MEMORY_CLEAR,
  MEMORY_RECALL,
  TYPE_TO_SCREEN,
} from '../actions/actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
  temp: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 0; // Sıfıra bölme durumunda 0 döndür
    default:
      return num1; // Varsayılan durum
  }
};


const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        temp: state.total, // Mevcut sonucu kaydet
        total: 0, // Yeni sayılar için sıfırla
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
        temp: 0, // Temp'i de sıfırla
      };

    case EQUALS:
      return {
        ...state,
        total: calculateResult(state.temp, state.total, state.operation),
        temp: 0, // Temp'i sıfırla
      };

    case TYPE_TO_SCREEN:
      return {
        ...state,
        total: state.total * 10 + action.payload, // Yeni sayı ekleniyor
      };

    case MEMORY_ADD:
      return {
        ...state,
        memory: state.total,
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0,
      };

    case MEMORY_RECALL:
      return {
        ...state,
        total: state.memory,
      };

    default:
      return state;
  }
};

export default reducer;