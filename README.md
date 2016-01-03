# react-native-layout

> Semantic JSX layout components for react-native

This library contains multiple easy-to-use
[react-native](https://facebook.github.io/react-native/) layout components
which brings more semantic into your JSX code.

* It contains really simple flex-based layout modules like
  * [Fill](/lib/Fill.js)
  * [Center](/lib/Center.js)
  * [Header](/lib/Header.js)
  * [Footer](/lib/Footer.js)
  * [LinearLayout](/lib/LinearLayout.js)
* and a "little bit more complex" [BorderLayout](/lib/BorderLayout.js).

API, documentation and unit tests are WIP.
Ideas, discussions and contributions are welcome:
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

An example project is coming soon. Currently please checkout the `examples`
folder and the following inline codes.

<img width="200" alt="Screenshot of BorderLayoutExample1" src="https://raw.githubusercontent.com/jerolimov/react-native-layout/master/screenshots/BorderLayoutExample1.png"><br/>
[BorderLayoutExample1.js](/examples/BorderLayoutExample1.js)

<img width="200" alt="Screenshot of BorderLayoutExample2" src="https://raw.githubusercontent.com/jerolimov/react-native-layout/master/screenshots/BorderLayoutExample2.png"><br/>
[BorderLayoutExample2.js](/examples/BorderLayoutExample2.js)

<img width="200" alt="Screenshot of BorderLayoutExample3" src="https://raw.githubusercontent.com/jerolimov/react-native-layout/master/screenshots/BorderLayoutExample3.png"><br/>
[BorderLayoutExample3.js](/examples/BorderLayoutExample3.js)

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
<View style={{ flex: 1 }}>
    <View><Text>Header</Text></View>
    <View style={{ flex: 1 }}><Text>Content</Text></View>
    <View><Text>Footer</Text></View>
</View>
```

You could write:

```jsx
<Fill>
    <Top><Text>Header</Text></Top>
    <Bottom><TextFooter</Text></Bottom>
    <View><Text>Content</Text></View>
</Fill>
```
