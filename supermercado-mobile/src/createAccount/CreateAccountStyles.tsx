import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#848484',
    borderWidth: 1,
    marginTop: '3%',
    marginBottom: '5%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  createForgotLink: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: '5%',
  },
  link: {
    color: '#2196F3',
    marginLeft: '17%',
    marginTop: '3%',
  },
  logo: {
    alignItems: 'center',
    marginBottom: '10%',
  },
  text: {
    fontSize: 30,
    color: '#1A1A1A',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '5%',
    color: '#1A1A1A',
  },
});

export default styles;
