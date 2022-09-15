import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  shopImage: {
    height: 300,
    width: '100%',
  },
  shopTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
  },
  shopPrice: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
    marginTop: 5,
  },
  shopDescription: {
    fontSize: 14,
    color: '#000',
    marginTop: 20,
  },
  btn: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    width: 150,
    alignSelf: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
  },
  quantity: {
    alignSelf: 'center',
    marginTop: 20,
  },
});
