import { ACTION_GET_API, ACTION_SUCESS, ACTION_FAILURE } from '../actions/types'

const initialState = {
	isLoading: false,
	data: [],
}

const reducerAPI = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_GET_API: 
			return { ...state, isLoading: true };
		case ACTION_SUCESS:
			return { ...state, isLoading: false, data: [...action.data] };
		case ACTION_FAILURE:
			return { ...state, isLoading: false, error: action.error };
		default:
			return state;
	}
}
export default reducerAPI;
