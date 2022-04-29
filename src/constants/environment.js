import { NativeModules } from 'react-native';
export const ENV = {
  Stage: {
    ANDROID_PRODUCTION_SECRET: 'EgfmFQfbm00yI4SppOd2EsDcmC1ciGMgr2Az9',
    ANDROID_STAGE_SECRET: '0OXmE7kwvI_X8DLVW8wwtZW7FIitQqNq0bM3T',
    IOS_PRODUCTION_SECRET: '8k3K8IQEHCM1LeF3n8Cp2F8Zf04Xg8E9XxQ6M',
    BaseURL: "http://api.arzinja.dev"
  },
  Beta: {
    ANDROID_PRODUCTION_SECRET: 'EgfmFQfbm00yI4SppOd2EsDcmC1ciGMgr2Az9',
    ANDROID_STAGE_SECRET: '0OXmE7kwvI_X8DLVW8wwtZW7FIitQqNq0bM3T',
    IOS_PRODUCTION_SECRET: '8k3K8IQEHCM1LeF3n8Cp2F8Zf04Xg8E9XxQ6M',
    BaseURL: "http://api.arzinja.dev"
  },
  PreProd: {
    ANDROID_PRODUCTION_SECRET: 'EgfmFQfbm00yI4SppOd2EsDcmC1ciGMgr2Az9',
    ANDROID_STAGE_SECRET: '0OXmE7kwvI_X8DLVW8wwtZW7FIitQqNq0bM3T',
    IOS_PRODUCTION_SECRET: '8k3K8IQEHCM1LeF3n8Cp2F8Zf04Xg8E9XxQ6M',
    BaseURL: "http://api.arzinja.dev"
  },
  Prod: {
    ANDROID_PRODUCTION_SECRET: 'EgfmFQfbm00yI4SppOd2EsDcmC1ciGMgr2Az9',
    ANDROID_STAGE_SECRET: '0OXmE7kwvI_X8DLVW8wwtZW7FIitQqNq0bM3T',
    IOS_PRODUCTION_SECRET: '8k3K8IQEHCM1LeF3n8Cp2F8Zf04Xg8E9XxQ6M',
    BaseURL: "http://api.arzinja.dev"
  }

}[NativeModules.RNConfig.env];
