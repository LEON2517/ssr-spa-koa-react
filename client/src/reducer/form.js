import { SIGN_IN_FORM, SIGN_UP_FORM, FORGOT_PASSWORD_FORM, RECOVERY_PASSWORD_FORM, SUCCESS, START, FAIL } from '../constants'

const defaultForm = {
    status: false,
    accountUserInfo: JSON.parse(localStorage.getItem('accountUserInfo'))
};

export default (state = defaultForm, action) => {
    const { type, response } = action;


    switch (type) {

        case SIGN_UP_FORM + START:
            return {
                ...state
            };

        case SIGN_UP_FORM + SUCCESS:
            return {
                ...state,
                status: true,
                response
            };

        case SIGN_UP_FORM + FAIL:
            return {
                ...state,
                status: true,
                response
            };



        case SIGN_IN_FORM + START:
            return {
                ...state
            };

        case SIGN_IN_FORM + SUCCESS:
            const serialAccountUserInfo = JSON.stringify(response);
            localStorage.setItem('accountUserInfo', serialAccountUserInfo);
            const accountUserInfo = JSON.parse(localStorage.getItem("accountUserInfo"));
            return {
                ...state,
                accountUserInfo
            };

        case SIGN_IN_FORM + FAIL:
            return {
                ...state,
                status: true,
                error
            };


        case FORGOT_PASSWORD_FORM + START:
            return {
                ...state
            };

        case FORGOT_PASSWORD_FORM + SUCCESS:
            return {
                ...state,
                status: true,
                response
            };

        case FORGOT_PASSWORD_FORM + FAIL:
            return {
                ...state,
                status: true,
                response
            };



        case RECOVERY_PASSWORD_FORM + START:
            return {
                ...state
            };

        case RECOVERY_PASSWORD_FORM + SUCCESS:
            return {
                ...state,
                status: true,
                response
            };

        case RECOVERY_PASSWORD_FORM + FAIL:
            return {
                ...state,
                status: true,
                response
            };


    }
    return state
}
