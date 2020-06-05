import {StyleSheet} from 'react-native';
import {Metrics, Colors, ApplicationStyles} from '../../Themes';
export default StyleSheet.create({
    item: {
        height: 200,
        marginVertical: 5,
        borderRadius: Metrics.textInBr,
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: Metrics.screenWidth * 0.45,
        marginHorizontal: '2.5%',
        marginBottom: 20,
        backgroundColor: Colors.soft,
        position: 'relative',
        overflow: 'hidden'
    },
    header: {
        height: 95,
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: Colors.accentColorLight,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    title: {
        color: Colors.soft
    },
    image: {
        width: Metrics.images.medium,
        height: Metrics.images.medium,
        borderWidth: 2,
        borderColor: Colors.soft,
        borderRadius: Metrics.images.medium / 2,
    },
    textContainer: {
        marginHorizontal: 10,
    },

    iconsContainer: {
        paddingHorizontal: 10,
        flex: 1,
        height: 60,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconsItem: {
        width: Metrics.images.small + 10,
        height: Metrics.images.small + 10,
        borderRadius: (Metrics.images.small + 10) /2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.soft,
        ...ApplicationStyles.shadown,
        marginHorizontal: 10
    },
    favoriteIcon: {
        position: 'absolute',
        top: 0,
        right: 15
    }
});
