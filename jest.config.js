module.exports = {
  preset: 'jest-expo',
  transform: {
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native'
    + '|galio-framework'
    + '|@expo/vector-icons'
    + '|expo-font'
    + '|expo'
    + '|@unimodules'
    + '|expo-asset'
    + '|expo-constants'
    + '|expo-linear-gradient'
    + '|react-native-modal-dropdown'
    + '|deprecated-react-native-listview'
    + '|react-native-iphone-x-helper'
    + '|react-native-gesture-handler'
    + '|@react-navigation'
    + '|react-native-reanimated'
    + '|react-native-screens'
    + ')/)',
  ],
};
