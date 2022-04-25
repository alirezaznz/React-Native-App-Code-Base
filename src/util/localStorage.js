import AsyncStorage from '@react-native-community/async-storage';

function json(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return str;
    }
}

export const LocalStorage = {
    save: async (key, data)=>{
        const items = typeof data === 'string' ? data : JSON.stringify(data);
        await AsyncStorage.setItem(key, items);
    },
    remove: async (key)=> await ASyncStorage.removeItem(key),
    getItem: async (key)=>{
        const value = await AsyncStorage.getItem(key);
        return json(value)
    },
    getEncryptedItem: async (key)=>{
        const value = await AsyncStorage.getItem(key);
        return json(value)
    },
}
