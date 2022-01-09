import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    try {
      const auth = await AsyncStorage.getItem(`${this.namespace}`);
      return auth ? auth : [];
    } catch (e) {
      throw new Error(`AuthStorage: ${e.message}`);
    }
  }

  async setAccessToken(accessToken) {
    try {
      await AsyncStorage.setItem(`${this.namespace}`, accessToken);
    } catch (e) {
      throw new Error(`AuthStorage: ${e.message}`);
    }
  }

  async removeAccessToken() {
    try {
      await AsyncStorage.removeItem(`${this.namespace}`);
    } catch (e) {
      throw new Error(`AuthStorage: ${e.message}`);
    }
  }
}

export default AuthStorage;
