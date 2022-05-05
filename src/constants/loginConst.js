import {STYLES} from './styles';

const LOGIN_CONST = {
    routes: [
        {
            key: 'RegisterStep',
            height: 0.7,
            icon: 'fill-form',
            primary: STYLES.Color.success,
            secondary: STYLES.Color.primary,
        },
        {
            key: 'OtpStep',
            height: 0.6,
            icon: 'fingerprint',
            primary: STYLES.Color.powerOrange,
            secondary: STYLES.Color.warn,
        },
        {
            key: 'NumberStep',
            height: 0.5,
            icon: 'user2',
            primary: STYLES.Color.success,
            secondary: STYLES.Color.primary,
        },
    ],
    LoginForm: [
        {
            name: 'mobile',
            rules: 'string|required|equal:11|mobile',
        },
    ],
    RegisterForm: [
        {
            name: 'fname',
            rules: 'string|required|persian',
        },
        {
            name: 'lname',
            rules: 'string|required|persian',
        },
        {
            name: 'national_id',
            rules: 'number|required|equal:10',
        },
        {
            name: 'email',
            rules: 'email|required',
        },
        {
            name: 'referrer',
            rules: '',
        },
        {
            name: 'tel',
            rules: 'number|required|between:8,11',
        },
    ],
    VerificationForm: [
        // {
        //   name: 'bank_name_1',
        //   rules: 'string|required',
        // },
        {
            name: 'card_number_1',
            rules: 'number|required|card',
        },
        // {
        //   name: 'account_number_1',
        //   rules: 'number',
        // },
        // {
        //   name: 'iban_1',
        //   rules: 'number',
        // },
        // {
        //   name: 'shetabcard',
        //   rules: 'obj|required',
        //   type: 'file',
        //   val: {},
        // },
        // {
        //   name: 'bank_name_2',
        //   rules: 'string|required',
        // },
        {
            name: 'card_number_2',
            rules: 'number|required|card',
        },
        // {
        //   name: 'account_number_2',
        //   rules: 'number',
        // },
        // {
        //   name: 'iban_2',
        //   rules: 'number',
        // },
        // {
        //   name: 'attach_1',
        //   rules: 'obj|required',
        //   type: 'file',
        //   val: {},
        // },
        {
            name: 'idcard',
            rules: 'string|required',
            // type: 'file',
        },
        {
            name: 'selfie',
            rules: 'string|required',
            // type: 'file',
        },
    ],
};

export {LOGIN_CONST};
