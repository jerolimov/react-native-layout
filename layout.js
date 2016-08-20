import React, { Component } from 'react';
import { View } from 'react-native';

export const orientation = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};

export default class LinearLayout extends Component {
  render() {
    return (
      <View style={ { flexDirection: this.props.orientation == orientation.horizontal ? 'row' : 'column' } }>
        { this.props.children }
      </View>
      );
  }
}

export default class VerticalLinearLayout extends Component {
  render() {
    return (
      <View style={ { flexDirection: 'column' } }>
        { this.props.children }
      </View>
      );
  }
}


export default class Overlay extends Component {
  render() {
    return (
      <View style={ [{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'transparent' }, this.props.style] }>
        { this.props.children }
      </View>
      );
  }
}

export default class HorizontalLinearLayout extends Component {
  render() {
    return (
      <View style={ { flexDirection: 'row' } }>
        { this.props.children }
      </View>
      );
  }
}

export class Header extends Component {
  render() {
    return (
      <View style={ { position: 'absolute', top: 0, left: 0, right: 0 } }>
        { this.props.children }
      </View>
      );
  }
}

export class Footer extends Component {
  render() {
    return (
      <View style={ { position: 'absolute', left: 0, right: 0, bottom: 0 } }>
        { this.props.children }
      </View>
      );
  }
}

export class Fill extends Component {
  render() {
    return (
      <View style={ [{ flex: 1 }, this.props.style] }>
        { this.props.children }
      </View>
      );
  }
}

export class Center extends Component {
  render() {
    return (
      <View style={ [{ flex: 1, alignItems: 'center', justifyContent: 'center' }, this.props.style] }>
        { this.props.children }
      </View>
      );
  }
}

const reorderSubviews = subviews => {
  if (!subviews.findIndex) {
    return subviews;
  }

  // TODO: RTL

  const horizontalStartIndex = subviews.findIndex(subview => subview.type == Left || subview.type == Right);
  const verticalStartIndex = subviews.findIndex(subview => subview.type == Top || subview.type == Bottom);

  if (horizontalStartIndex !== -1 || verticalStartIndex !== -1) {
    const isHorizontal = horizontalStartIndex < verticalStartIndex && horizontalStartIndex !== -1 || verticalStartIndex === -1;
    const startIndex = isHorizontal ? horizontalStartIndex : verticalStartIndex;

    const before = [],
      after = [];

    for (var i = startIndex; i < subviews.length; i++) {
      if (isHorizontal && subviews[i].type == Left || !isHorizontal && subviews[i].type == Top) {
        before.push(subviews[i]);
      } else if (isHorizontal && subviews[i].type == Right || !isHorizontal && subviews[i].type == Bottom) {
        after.unshift(subviews[i]);
      } else {
        break;
      }
    }

    const skipped = subviews.slice(0, startIndex);
    const content = subviews.slice(i).filter(subview => subview.type != Overlay);
    const overlays = subviews.slice(i).filter(subview => subview.type == Overlay);

    const reordered = skipped.concat(before).concat(reorderSubviews(content)).concat(after).concat(overlays);

    return (
      <View style={ { flex: 1, flexDirection: isHorizontal ? 'row' : 'column' } }>
        { reordered }
      </View>
      );
  }

  return subviews;
};

export class Layout extends Component {
  render() {
    return (
      <View style={ this.props.style }>
        { this.props.children && reorderSubviews(this.props.children) }
      </View>
      );
  }
}

export class FillLayout extends Component {
  render() {
    return (
      <Layout style={ [{ flex: 1 }, this.props.style] }>
        { this.props.children && reorderSubviews(this.props.children) }
      </Layout>
      );
  }
}

export class Left extends Layout {
}
export class Right extends Layout {
}
export class Top extends Layout {
}
export class Bottom extends Layout {
}
