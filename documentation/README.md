# quinto/documentation

> Documentation for [quinto](../).

## Quick Reference

- [API](api.md)

## Background & Motivation

Capturing user interactions with a webpage is a foundational aspect of usage analytics. A common approach to recording click and hover events is to assign identifiers to HTML elements in the Document Object Model (DOM). When the element is interacted with, metadata associated with the identifier is retrieved. However, with multiple layers of nested elements, capturing an event on the exact HTML element is imprecise because a child element of a landmark element that is clicked would not match the identifier. To avoid attaching an event listener to every node – which negatively impacts performance – the solution is to traverse the DOM tree until an ancestor element containing an identifier is reached.

## Notes

> "A picture is worth a thousand words"

As much as possible, the code in [`quinto/example`](../example) exemplifies the documentation in this folder.
