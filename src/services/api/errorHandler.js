import {showMessage} from 'react-native-flash-message';

const HandleAPIErrorPayload = err => {
    // console.log(err);
    const {response, config} = err;

    if (response === undefined) {
        showMessage({
            message: 'Cannot Connect to Server',
            type: 'danger',
        });
        return;
    }
    if (config && config.handleError === false) return;
    return handleError(response);
};

const handleError = response => {
    const {data} = response;
    let errMsg;
    if (data?.errorMessage) {
        errMsg = data.errorMessage;
    } else if (data?.error) {
        errMsg = data.error;
    } else if (data?.message) {
        errMsg = data?.message;
    }
    showMessage({
        message: 'errMsg',
        type: 'danger',
    });
};

export {HandleAPIErrorPayload};
