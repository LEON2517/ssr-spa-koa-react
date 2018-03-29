import { TARIFF_CHANGE_FORM } from '../constants'

const defaultForm = {
    isSelectPro: true,
    isSelectClassic: false
};

export default (state = defaultForm, action) => {
    const { type, payload } = action;

    switch (type) {

        case TARIFF_CHANGE_FORM:

            if(defaultForm.isSelectPro == false && this.defaultForm.isSelectClassic == true) {
                return {
                    ...state,
                    isSelectPro: true,
                    isSelectClassic: false
                };
            }

            return {
                isSelectPro: !this.defaultForm.isSelectPro
            }



    }
    return state
}
