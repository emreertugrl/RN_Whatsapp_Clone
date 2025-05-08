import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FloatActionButtonProps} from '../../modals/ui/floatActionButton';
import Colors from '../../utils/colors';

const FloatActionButton: React.FC<FloatActionButtonProps> = ({
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: Colors.GREEN_2,
    position: 'absolute',
    bottom: 30,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 10,
  },
});

export default FloatActionButton;
