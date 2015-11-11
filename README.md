# react-native-layout

API and documentation WIP. Ideas and contributions are welcome.

Please use the issue tracker or create a pull request.

This project contains [react-native](https://facebook.github.io/react-native/)
UI components which brings more semantic to your JSX code.

It contains simple layout modules like `Center`, `Fill`, `Header`, `Footer`,
renames a view group as `LinearLayout` and provides a little bit more complex
`BorderLayout`.

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

```
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Center Content</Text>
</View>
```

Write:

```
<Center>
    <Text>Center Content</Text>
</Center>
```

### BorderLayout

Instead of:

```
<Layout style={{ flex: 1 }}>
    <View><Text>Header</Text></View>
    <View style={{ flex: 1 }}><Text>Content</Text></View>
    <View><TextFooter</Text></View>
</Layout>
```

You could write:

```
<Layout style={{ flex: 1 }}>
    <Top><Text>Header</Text></Top>
    <Bottom><TextFooter</Text></Bottom>
    <View style={{ flex: 1 }}><Text>Content</Text></View>
</Layout>
```
