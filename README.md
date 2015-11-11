# react-native-layout

## Semantic JSX layout components for react-native

This project contains [react-native](https://facebook.github.io/react-native/)
layout components which brings more semantic to your JSX code.

It contains a "little bit more complex" [BorderLayout](/lib/BorderLayout.js),
as well as really simple layout modules like
[Center](/lib/Center.js), [Fill](/lib/Fill.js),
[Header](/lib/Header.js), [Footer](/lib/Footer.js),
and it also renames a view group as [LinearLayout](/lib/LinearLayout.js).

API, documentation and unit tests are WIP. Ideas, discussions and contributions
are welcome:
[Open an issue](https://github.com/jerolimov/react-native-layout/issues/new)

If your brave install the alpha version (0.0.x):

    npm install react-native-layout --save

You can expect a beta version (0.1.0) soon.

## Why?

Developing apps with [react-native](https://facebook.github.io/react-native/)
is great. But sometimes the JSX markup loses its simplicity with a growing
number of components and view elements.
Especially when you extracts and imports the
[stylesheets](https://facebook.github.io/react-native/docs/stylesheet.html)
from an external file.

## Examples

An example project is coming soon. Currently please checkout the following
inline codes or the examples folder.

### Center Content

Instead of:

```jsx
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Center Content</Text>
</View>
```

Write:

```jsx
<Center>
    <Text>Center Content</Text>
</Center>
```

### BorderLayout

Instead of:

```jsx
<Layout style={{ flex: 1 }}>
    <View><Text>Header</Text></View>
    <View style={{ flex: 1 }}><Text>Content</Text></View>
    <View><TextFooter</Text></View>
</Layout>
```

You could write:

```jsx
<Layout style={{ flex: 1 }}>
    <Top><Text>Header</Text></Top>
    <Bottom><TextFooter</Text></Bottom>
    <View style={{ flex: 1 }}><Text>Content</Text></View>
</Layout>
```
