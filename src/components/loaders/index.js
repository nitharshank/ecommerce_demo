import React from 'react';
import { View } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import PropTypes from 'prop-types';
import {COLORS} from '../../utils/Colors';
import styles from './styles';
import {useSelector} from 'react-redux';

const Loader = ({ color = COLORS.blue }) => {
  const loading = useSelector(state => state.loading);
  if (!loading) {return null;}
  return (
    <View style={styles.loaderContainer}>
      <BallIndicator style={styles.loader} color={color} />
    </View>
  );
};

Loader.propTypes = {
  color: PropTypes.string,
  showLoader: PropTypes.bool,
};

export default Loader;
