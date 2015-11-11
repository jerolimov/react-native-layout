# react-native-layout

API and documentation WIP. Ideas and contributions are welcome.

Please use the issue tracker or create a pull request.

This project contains [react-native](https://facebook.github.io/react-native/)
UI components which brings more semantic to your JSX code.

It contains simple layout modules like [Center](/lib/Center.js),
[Fill](/lib/Fill.js), [Header](/lib/Header.js), [Footer](/lib/Footer.js),
renames a view group as [LinearLayout](/lib/LinearLayout.js) and
provides a little bit more complex [BorderLayout](/lib/BorderLayout.js).

## Why?

Developing apps with [react-native](https://facebook.github.io/react-native/)
is great. But sometimes the JSX markup loses its simplicity with a growing
number of user screens, components, view elements, ...

Especially when you extracts / imports the stylesheet from external files.

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
