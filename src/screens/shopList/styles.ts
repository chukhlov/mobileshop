import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  grow: {
    flexGrow: 1,
  },
  shopItem: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  shopImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  shopItemTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  shopItemPrice: {
    color: 'green',
    fontSize: 14,
    marginTop: 5,
  },
  addBtn: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addBtnText: {
    fontSize: 14,
    color: '#fff',
  },
});
