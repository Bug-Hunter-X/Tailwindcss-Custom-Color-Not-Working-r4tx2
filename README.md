# Tailwindcss Custom Color Not Working
This repository demonstrates a common issue encountered when working with custom colors in Tailwind CSS.  The problem lies in ensuring the Tailwind configuration correctly includes and applies your defined colors.

## Problem
A custom color, `theme-color`, is defined in `tailwind.config.js`, but it's not being applied to the HTML element.  This is a frequent issue stemming from a misconfiguration or oversight in the build process.

## Solution
The solution involves verifying the content array in your `tailwind.config.js` file. This array specifies the files Tailwind should scan for class names. If your HTML file is not included correctly in this array, Tailwind won't be able to find and apply your defined custom classes.
