import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MarkdownView } from 'react-native-markdown-view';

export default function App() {
  return (
      <View style={styles.container}>
          <ScrollView>
              <Text>Open up App.js to start working on your app!</Text>
              <MarkdownView styles={markdownStyles} onLinkPress={x => Linking.openURL(x)}>
                  מצטרפים למועדון סונול ונהנים מהטבה שווה במיוחד: שוופס מוגז רביעייה 330 מ"ל מהמגוון ב-9.90 ₪ בלבד! רק למשלמים באפליקציית סונול. מחיר רגיל לרביעייהå 11.90 ₪.
מהמגוון המשתתף במבצע: שוופס מוגז תפוח 330 מ"ל רביעייה, שוופס מוגז תות ליים 330 מ"ל רביעייה, שוופס מוגז ענבים 330 מ"ל רביעייה, שוופס מוגז למונייד 330 מ"ל רביעייה, שוופס מווגז עדין אפרסק 330 מ"ל רביעי שוופס מוגז עדין פירות יער 330 מ"ל רביעייה
              </MarkdownView>
          </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const markdownStyles = StyleSheet.create({
    paragraph: {
        textAlign: 'right',
        margin: 15,
        fontSize: 18
    }
});
