import * as Linking from 'expo-linking';

export const openLink = (url) => {
  Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
};