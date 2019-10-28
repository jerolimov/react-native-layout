import React from 'react';
import { View, ViewProps } from 'react-native';

interface Props extends ViewProps {
  orientation: 'horizontal' | 'vertical';
}

export default function LinearLayout({ orientation, style, ...props }: Props) {
  return (
    <View
      {...props}
      style={[
        style,
        { flexDirection: orientation === 'horizontal' ? 'row' : 'column' },
      ]}
    />
  );
}
