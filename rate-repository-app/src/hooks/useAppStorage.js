import { useContext } from 'react';
import AppStorageContext from '../contexts/AppStorageContext';

const useAppStorage = () => {
  return useContext(AppStorageContext);
};

export default useAppStorage;
