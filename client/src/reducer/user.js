import { LOAD_HOME_PAGE_ARTICLES, SUCCESS, START, FAIL } from '../constants'

const defaultUser = {
    status: false
};

export default (state = defaultUser, action) => {
    const { type, status } = action;

    /*
const action = {
    type:
    response:
}
*/

    switch (type) {

        case LOAD_HOME_PAGE_ARTICLES + START:
            return {
                ...state
            };

        case LOAD_HOME_PAGE_ARTICLES + SUCCESS:
            return {
                ...state,
                status : true
            }
    }
    return state
}
