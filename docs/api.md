# API

**Table of Contents**

1. [Overview](#Overview)
2. [Pausing Capture](#Pausing-Capture)

## Overview

The component accepts the following props:

```ts
dataAttribute: string; // the data attribute that marks an element as a significant ancestor. The default is 'q' (e.g. 'data-q=""')
debounce: number; // time in milliseconds that the hover event is debounced. default is 500
onClick?: (data: { element: null | HTMLElement; data: object, depth: number }) => void; // triggered when an HTML element is clicked
onMouseOver?: (data: { element: null | HTMLElement; data: object, depth: number }) => void; // triggered when an HTML element is hovered over after being debounced
paused: boolean; // whether or not to pause the capture of all events
threshold: number; // maximum depth walked by the component. The default is 20.
```

```jsx
// The default prop values are shown below
// This is equivalent to writing <Quinto />

<Quinto dataAttribute={'q'} debounce={500} paused={false} threshold={20} />
```

## Pausing Capture

To pause the capture of targeted elements, set the `paused` prop to `true`

```jsx
class App extends React.Component {
  state = {
    paused: false
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.shouldCaptureInteractions !==
      this.props.shouldCaptureInteractions
    ) {
      this.setState({
        paused: !this.props.shouldCaptureInteractions
      });
    }
  }

  render() {
    return <Quinto paused={this.state.paused} />;
  }
}
```
