import React from 'react';
import { View, ViewProps } from 'react-native';

export default function Footer({ style, ...props }: ViewProps) {
  return (
    <View
      {...props}
      style={[{ position: 'absolute', left: 0, right: 0, bottom: 0 }, style]}
    />
  );
}
