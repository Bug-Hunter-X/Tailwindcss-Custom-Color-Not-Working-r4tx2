```javascript
// tailwind.config.js
module.exports = {
  content: [ "./src/**/*.{html,js,jsx,ts,tsx}"], // include all relevant file extensions
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
Ensure that the `content` option in your `tailwind.config.js` accurately reflects all the file paths where you use Tailwind CSS classes.  The updated `content` option ensures that all your HTML, JavaScript, JSX, TypeScript, and TSX files are scanned correctly for custom classes.  If you have other file extensions used in your project, add them accordingly.