import React from 'react';
import { View, ViewProps } from 'react-native';

export default function Fill({ style, ...props }: ViewProps) {
  return <View {...props} style={[{ flex: 1 }, style]} />;
}
