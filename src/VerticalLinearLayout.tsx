import React from 'react';
import { View, ViewProps } from 'react-native';

export default function VerticalLinearLayout({ style, ...props }: ViewProps) {
  return <View {...props} style={[style, { flexDirection: 'column' }]} />;
}
