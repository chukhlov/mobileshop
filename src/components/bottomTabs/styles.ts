import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  activeTabColor: {
    color: 'rgb(0, 122, 255)',
  },
  inactiveTabColor: {
    color: '#8e8e8f',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    backgroundColor: '#c40303',
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderRadius: 50,
    position: 'absolute',
    bottom: 10,
    right: -15,
    minWidth: 20,
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
});
