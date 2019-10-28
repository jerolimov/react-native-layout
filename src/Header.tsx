import React from 'react';
import { View, ViewProps } from 'react-native';

export default function Header({ style, ...props }: ViewProps) {
  return (
    <View
      {...props}
      style={[{ position: 'absolute', top: 0, left: 0, right: 0 }, style]}
    />
  );
}
