import { Platform } from 'react-native';
import UAParser from 'ua-parser-js';

export const isAndroidWeb = () => {
  if (Platform.OS === 'web') {
    const parser = new UAParser();
    const os = parser.getOS();
    return os.name === 'Android';
  }
  return false;
};