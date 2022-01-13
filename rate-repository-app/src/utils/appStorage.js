import AsyncStorage from '@react-native-async-storage/async-storage';

class AppStorage {
  constructor(namespace = 'app') {
    this.namespace = namespace;
  }

  async getAppItem(name) {
    try {
      const app = await AsyncStorage.getItem(`${this.namespace}:${name}`);
      return app ? app : null;
    } catch (e) {
      throw new Error(`AppStorage: ${e.message}`);
    }
  }

  async setAppItem(name, value) {
    try {
      await AsyncStorage.setItem(`${this.namespace}:${name}`, value);
    } catch (e) {
      throw new Error(`AppStorage: ${e.message}`);
    }
  }

  async removeAppItem(name) {
    try {
      await AsyncStorage.removeItem(`${this.namespace}:${name}`);
    } catch (e) {
      throw new Error(`AppStorage: ${e.message}`);
    }
  }
}

export default AppStorage;
