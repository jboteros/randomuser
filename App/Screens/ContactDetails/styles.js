import {Colors} from '../../Themes';
export default {
  container: {
    backgroundColor: '#F43556',
    flex: 1,
  },
  safeAreaContainer: {
    flex: 1,
  },
  header: {
    paddingLeft: 20,
    paddingTop: 10,
    alignItems: 'flex-start',
  },
  informationContainer: {alignItems: 'center', paddingTop: 90},
  cardInformation: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  imageContainer: {position: 'absolute', marginTop: -60},
  imageSmall: {
    width: 140,
    height: 140,
    borderRadius: 140,
    borderWidth: 5,
    borderColor: 'white',
    backgroundColor: Colors.accentMask(1.0),
  },
  contactName: {
    color: '#2f3a4e',
    fontSize: 25,
    marginTop: 70,
    paddingVertical: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    paddingBottom: 30,
  },
  actionButton: {
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: 'white',
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
  iconContainer: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#2f3a4e',
  },
  informationCardBody: {
    flexDirection: 'column',
    width: '80%',
  },
  cardBody: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 15,
  },
  cardBodyText: {
    color: '#2f3a4e',
    fontSize: 15,
    paddingLeft: 10,
    flex: 1,
  },
  mapContainer: {
    paddingBottom: 20,
  },
  map: {
    maxWidth: '80%',
  },
};
