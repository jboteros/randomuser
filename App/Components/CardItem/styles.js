import {Metrics, Colors} from '../../Themes';

export default {
  card: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardBody: {
    padding: 10,
    flexDirection: 'row',
  },
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  cardInformation: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
    width: '100%',
  },
  cardNameText: {
    color: '#2f3a4e',
    fontSize: 20,
  },
  cardEmailText: {
    color: '#2f3a4e',
    fontSize: 16,
  },
};
