import { LOAD_HOME_PAGE_ARTICLES, SUCCESS, START, FAIL } from '../constants'

const defaultArticles = {
    isLoaded: false,
    isLoading: false
};

export default (state = defaultArticles, action) => {
    const { type, response } = action;

    /*
const action = {
    type:
    response:
}
*/

    switch (type) {

        case LOAD_HOME_PAGE_ARTICLES + START:
            return {
                ...state,
                isLoading: true,
                isLoaded: false
            };

        case LOAD_HOME_PAGE_ARTICLES + SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                response
            }
    }
    return state
}

