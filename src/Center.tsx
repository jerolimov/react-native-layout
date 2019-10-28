import React from 'react';
import { View, ViewProps } from 'react-native';

export default function Center({ style, ...props }: ViewProps) {
  return (
    <View
      {...props}
      style={[
        { flex: 1, alignItems: 'center', justifyContent: 'center' },
        style,
      ]}
    />
  );
}
