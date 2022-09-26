import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 4,
        marginBottom: 10,
    },
    name: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Roboto',
        color: '#FDFCFE',
        marginLeft: 16,
    },
    button: {
        backgroundColor: '#E23C44',
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
});