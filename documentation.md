# 🎨 Design System

## 🧱 Typography

**Font:** [Inter](https://fonts.google.com/share?selection.family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900)

```css
body {
  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
```

---

## 🎨 Colors

| Name | HEX | Usage |
|------|------|-------|
| White | #FFFFFF | Backgrounds, text contrast |
| Black | #000000 | Primary text, headings |
| Gray | #ADA1A1 | Secondary text, borders |
| Light Gray | #FFF9F9 | Light background, section divider |
| Light Orange | #FC530A | Accent color, primary buttons |
| Dark Orange | #D63100 | Hover/active state, emphasis |

---

### CSS Variables Example

```css
:root {
  --color-white: #ffffff;
  --color-black: #000000;
  --color-gray: #ada1a1;
  --color-light-gray: #fff9f9;
  --color-light-orange: #fc530a;
  --color-dark-orange: #d63100;
}
```

### Usage Example

```css
.btn-primary {
  background-color: var(--color-light-orange);
  color: var(--color-white);
}

.btn-primary:hover {
  background-color: var(--color-dark-orange);
}
```
