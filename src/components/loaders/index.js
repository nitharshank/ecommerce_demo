import React from 'react';
import { View } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import {COLORS} from '../../utils/Colors';
import styles from './styles';
import {useSelector} from 'react-redux';

const Loader = () => {
  const loading = useSelector(state => state.loading);
  if (!loading) {return null;}
  return (
    <View style={styles.loaderContainer}>
      <BallIndicator style={styles.loader} color={COLORS.red} />
    </View>
  );
};


export default Loader;
