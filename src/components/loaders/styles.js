import { StyleSheet } from 'react-native';
import {RGB} from '../../utils/Colors';

const styles = StyleSheet.create({
  loaderContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    elevation: 999,
    backgroundColor: `rgba(${RGB.black}, ${RGB.black}, ${RGB.black}, 0.4)`,
  },
  loader: {
    marginTop: -150,
  },
});

export default styles;
