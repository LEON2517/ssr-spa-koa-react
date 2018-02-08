import { SEND_FORM, SUCCESS, START, FAIL } from '../constants'

const defaultUser = {
    isLoaded: false,
    isLoading: false
};

export default (state = defaultUser, action) => {
    const { type, status, response } = action;

    /*
const action = {
    type:
    response:
}
*/

    switch (type) {

        case SEND_FORM + START:
            return {
                ...state
            };

        case SEND_FORM + SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                response
            }
    }
    return state
}
