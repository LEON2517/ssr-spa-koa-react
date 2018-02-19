import { SIGN_IN_USER, SIGN_UP_USER, FORGOT_PASSWORD_USER, RECOVERY_PASSWORD_USER, SUCCESS, START, FAIL } from '../constants'

const defaultForm = {
    status: false,
    accountUserInfo: JSON.parse(localStorage.getItem('accountUserInfo'))
};

export default (state = defaultForm, action) => {
    const { type, response } = action;


    switch (type) {

        case SIGN_UP_USER + START:
            return {
                ...state
            };

        case SIGN_UP_USER + SUCCESS:
            return {
                ...state,
                status: true,
                response
            };

        case SIGN_UP_USER + FAIL:
            return {
                ...state,
                status: true,
                response
            };



        case SIGN_IN_USER + START:
            return {
                ...state
            };

        case SIGN_IN_USER + SUCCESS:
            const serialAccountUserInfo = JSON.stringify(response);
            localStorage.setItem('accountUserInfo', serialAccountUserInfo);
            const accountUserInfo = JSON.parse(localStorage.getItem("accountUserInfo"));
            return {
                ...state,
                accountUserInfo
            };

        case SIGN_IN_USER + FAIL:
            return {
                ...state,
                status: true,
                response
            };


        case FORGOT_PASSWORD_USER + START:
            return {
                ...state
            };

        case FORGOT_PASSWORD_USER + SUCCESS:
            return {
                ...state,
                status: true,
                response
            };

        case FORGOT_PASSWORD_USER + FAIL:
            return {
                ...state,
                status: true,
                response
            };



        case RECOVERY_PASSWORD_USER + START:
            return {
                ...state
            };

        case RECOVERY_PASSWORD_USER + SUCCESS:
            return {
                ...state,
                status: true,
                response
            };

        case RECOVERY_PASSWORD_USER + FAIL:
            return {
                ...state,
                status: true,
                response
            };


    }
    return state
}
