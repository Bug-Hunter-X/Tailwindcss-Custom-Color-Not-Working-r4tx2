```javascript
// tailwind.config.js
module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'theme-color': '#007bff',
      }
    }
  },
  plugins: [],
}
```
```html
<!-- index.html -->
<div class="bg-theme-color">
</div>
```