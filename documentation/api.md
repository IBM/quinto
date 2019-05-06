# API

## Overview

The component accepts the following props:

```ts
dataAttribute: string; // the data attribute that marks an element as a significant ancestor. The default is 'q' (e.g. in the DOM it reads as 'data-q=""')
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
