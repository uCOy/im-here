import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    },
    eventName: {
      fontWeight: 'bold',
      color: '#FDFCFE',
      fontSize: 24,
      marginTop: 50,
      fontFamily: 'Roboto',
    },
    eventDate: {
      color: '#6B6B6B',
      fontFamily: 'Roboto',
    },
    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#1F1E25',
      borderRadius: 4,
      color: '#fff',
      fontSize: 14,
      padding: 16,
      marginRight: 7,
      // fontFamily: 'Inter',
    },
    button: {
      backgroundColor: '#31CF67',
      borderRadius: 4,
      height: 56,
      width: 56,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 24,
    },
    form: {
      paddingTop: 34,
      paddingBottom: 44,
      width: '100%',
      flexDirection: 'row',
    },
});