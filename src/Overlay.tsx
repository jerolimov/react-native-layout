import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export default function Overlay({ style, ...props }: ViewProps) {
  return (
    <View
      {...props}
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: 'transparent' },
        style,
      ]}
    />
  );
}
