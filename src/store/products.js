/* eslint-disable  */
import axios from "axios";


const initialState = [{

}]


export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET':
            return payload;
        default:
            return state;
    }
}


export const get = () => async dispatch => {
    const res = await axios.get("https://api-auth-ehg1.onrender.com/api/v1/store");
    dispatch(getActionDispatch(res.data));
}

const getActionDispatch = (data) => {
    console.log(data)
    return {
        type: 'GET',
        payload: data
    }
}
/* eslint-enable */


