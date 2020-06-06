import {Metrics, Colors} from '../../Themes';

export default {
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    //height: Metrics.screenHeight,
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentList: {
    flex: 1,
    width: Metrics.screenWidth,
    marginTop: 30,
  },
  loading: {
    backgroundColor: Colors.accentMask(0.5),
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    zIndex: 2000,
  },
  header: {
    //flex: 1,
    width: Metrics.screenWidth,
    height: 50,
    justifyContent: 'center',
    //alignItems: 'center',
  },
  containerHeader: {
    height:110,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0, 
    justifyContent: 'center',
    //height: Metrics.header,
    //paddingTop: Metrics.addHeader,
    //justifyContent: 'space-between',
    //  borderRadius: Metrics.borderRadius,
    alignItems: 'center',
    width: '100%',
    //flexDirection: 'row',
    backgroundColor: '#182D84',
    //paddingHorizontal: Metrics.screenWidth * 0.075,
  },
  panelTitulo:{
    //flex:1,
    //flexDirection: 'row',
    height:50,
    width: '100%',
  },
  textoTitulo:{
    fontSize: 18,
  },
  
};
