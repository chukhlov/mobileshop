import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  grow: {
    flexGrow: 1,
  },
  basketItem: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  basketImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  basketItemTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  basketItemPrice: {
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
  basketQuantity: {
    marginTop: 20,
  },
  removeBtn: {
    position: 'absolute',
    top: -10,
    right: -10,
    zIndex: 10,
  },
});
