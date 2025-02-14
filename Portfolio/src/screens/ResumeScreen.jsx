import { Platform } from 'react-native';
import { SUPABASE_BUCKET_URL } from '@env';
import { Surface } from "react-native-paper";
import { View } from 'react-native-web';
import WebView from 'react-native-webview';

const ResumeScreen = () => {
  const isWeb = Platform.OS === 'web';
  const pdfUrl = `https://docs.google.com/gview?embedded=true&url=${SUPABASE_BUCKET_URL}/files/GeroResume.pdf`;

  return (
    <Surface style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {isWeb ? (
        // If on web, use an iframe instead of WebView
        <iframe 
          src={pdfUrl} 
          width="100%" 
          height="100%" 
          title="Gero's Resume"
          style={{ border: 'none' }}
        />
      ) : (
        <WebView
          source={{ uri: pdfUrl }}
          style={{ flex: 1 }}
          scalesPageToFit={true}
          scrollEnabled={true}
        />
      )}
    </Surface>
  );
}

export default ResumeScreen;
