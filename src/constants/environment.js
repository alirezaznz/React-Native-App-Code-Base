import {NativeModules} from 'react-native';
export const ENV = {
    Stage: {
        name: NativeModules.RNConfig.env,
        ANDROID_PRODUCTION_SECRET: 'EgfmFQfbm00yI4SppOd2EsDcmC1ciGMgr2Az9',
        ANDROID_STAGE_SECRET: '0OXmE7kwvI_X8DLVW8wwtZW7FIitQqNq0bM3T',
        IOS_PRODUCTION_SECRET: '8k3K8IQEHCM1LeF3n8Cp2F8Zf04Xg8E9XxQ6M',
        BaseURL: 'http://api.arzinja.dev',
    },
    Beta: {
        name: NativeModules.RNConfig.env,
        ANDROID_PRODUCTION_SECRET: 'EgfmFQfbm00yI4SppOd2EsDcmC1ciGMgr2Az9',
        ANDROID_STAGE_SECRET: '0OXmE7kwvI_X8DLVW8wwtZW7FIitQqNq0bM3T',
        IOS_PRODUCTION_SECRET: '8k3K8IQEHCM1LeF3n8Cp2F8Zf04Xg8E9XxQ6M',
        BaseURL: 'http://api.arzinja.dev',
    },
    PreProd: {
        name: NativeModules.RNConfig.env,
        ANDROID_PRODUCTION_SECRET: 'EgfmFQfbm00yI4SppOd2EsDcmC1ciGMgr2Az9',
        ANDROID_STAGE_SECRET: '0OXmE7kwvI_X8DLVW8wwtZW7FIitQqNq0bM3T',
        IOS_PRODUCTION_SECRET: '8k3K8IQEHCM1LeF3n8Cp2F8Zf04Xg8E9XxQ6M',
        BaseURL: 'http://api.arzinja.dev',
    },
    Prod: {
        name: NativeModules.RNConfig.env,
        ANDROID_PRODUCTION_SECRET: 'EgfmFQfbm00yI4SppOd2EsDcmC1ciGMgr2Az9',
        ANDROID_STAGE_SECRET: '0OXmE7kwvI_X8DLVW8wwtZW7FIitQqNq0bM3T',
        IOS_PRODUCTION_SECRET: '8k3K8IQEHCM1LeF3n8Cp2F8Zf04Xg8E9XxQ6M',
        BaseURL: 'http://api.arzinja.dev',
    },
}[NativeModules.RNConfig.env];
