import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 40
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#848484',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: '3%',
    marginBottom: '5%',
  },
  createForgotLink: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: "5%"
  },
  link: {
    color: '#08CAFC',
    marginLeft: "5%",
  },
  button: {
    backgroundColor: '#08CAFC',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  logo: {
    alignItems: 'center',
    marginBottom: "15%"
  },
  title: {
    fontSize: 28,
    color: '#08CAFC',
    paddingTop: "5%",
  }
});

export default styles;