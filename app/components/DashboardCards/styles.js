import {StyleSheet} from 'react-native';
import {BaseColor, Images, useTheme} from '@config';
export default StyleSheet.create({
  contain: {
    borderRadius: 5,
    margin: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    color: BaseColor.whiteColor,
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    right: 8,
    top: 3,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headingContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headingText: {
    color: BaseColor.whiteColor,
    fontWeight: 'bold',
    fontSize: 12,
  },
});
