import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { EMBERMATE_HTML } from '@/constants/embermate-html';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: EMBERMATE_HTML }}
        style={styles.webview}
        javaScriptEnabled
        domStorageEnabled
        setSupportMultipleWindows={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  webview: {
    flex: 1,
  },
});
