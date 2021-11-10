import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  prices: {
    fontSize: 18,
  },
  newPrice: {
    fontWeight: 'bold',
  },
  bedroom: {
    marginVertical: 15,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 15,
  },
});

export default Styles;
