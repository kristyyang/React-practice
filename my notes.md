# My Notes
-----------
## JSX

- React builds our apps with a fake representation of the Document Object Model (DOM)--- virtual DOM

- JSX presents a light abstraction over the JavaScript version, yet the legibility benefits are huge. Readability boosts our app’s longevity and makes it easier to onboard new developers.

Example

javascript
```React
React.createElement('div', {className: 'ui items'},
  'Hello, friend! I am a basic React component.'
)
```


JSX
```JSX
<div className='ui items'>
  <p>
    Hello, friend! I am a basic React component.
  </p>
</div>
```
