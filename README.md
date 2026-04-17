# Semanticus CSS

**Semanticus CSS** lightweight semantic-first CSS framework enhanced with atomic utility classes.

It is designed for developers who want:

- clean, semantic defaults with the ability to extend it using utility classes
- minimal CSS footprint (~25 KB gzipped)
- zero JavaScript dependency

## ✨ Features

- 🧩 **Semantic-first**: works out of the box with plain HTML
- ⚡ **Utility-enhanced**: extend the semantic design with utility classes when needed
- 🪶 **Lightweight**: ~25 KB gzipped — minimal overhead compared to large frameworks
- 📦 **Modular**: import only what you need — semantics, utilities, or normalize separately
- 🎯 **Composable**: mix semantics and utilities without conflict
- 🔧 **Extensible**: easy to customize or layer on top

## 🧠 Philosophy

Semanticus CSS follows a layered approach:

1. Base layer (semantic)
Clean defaults using native HTML elements.
2. Utility layer (optional)
Small, composable classes for layout, spacing, and tweaks.
3. Custom layer (yours)
Your app-specific styles on top.

This avoids:

- class overload
- specificity wars
- over-engineering

## ⚖️ Comparison

| Feature | PicoCSS | Tachyons | Semanticus CSS |
| -------- | -------- | -------- | -------- |
| Semantic HTML | ✅ | ❌ | ✅ |
| Utilities | ❌ | ✅ | ✅ |
| Learning curve | Low | Medium | Low |
| Flexibility | Medium | High | High |

## 🌐 Browser Support

Semanticus CSS targets modern browsers based on the following [Browserslist](https://browsersl.ist/) configuration:

- Last 2 versions of each browser
- Firefox ESR
- No dead browsers

## 🤝 Contributing

Contributions are welcome. The goal is to keep Semanticus CSS:

- small
- consistent
- predictable

Before submitting:

- avoid adding heavy abstractions
- prefer composable utilities over components
- keep naming consistent and minimal

## 📄 License

Semanticus CSS is licensed under the [MIT License](LICENSE).

This project is a derivative work that incorporates concepts and patterns from [Pico CSS](https://picocss.com/) and [Tachyons](https://tachyons.io/), both also under the MIT License.
See the [NOTICE](NOTICE) file for full attribution and copyright details.

## 🙏 Acknowledgments

Semanticus CSS wouldn't exist without the incredible work of the authors of:

### [Pico CSS](https://picocss.com/)

For showing us the beauty and power of semantic HTML while using accessibility as part of the design.
Very few frameworks have managed to keep so faithful to the semantic motto as PicoCSS is.

### [Tachyons](https://tachyons.io/)

For pioneering the functional/utility-first CSS movement and for its simplicity.
Their influence on modern CSS architecture cannot be overstated.

### [Bootstrap](https://getbootstrap.com/) & [Tailwind](https://tailwindcss.com/)

For popularizing the utility-first approach and for providing a rich ecosystem of tools and resources.

#### To the maintainers and contributors of these projects: THANK YOU 🙏

## 🔥 Vision

Semanticus CSS aims to sit in the sweet spot between:

- “just HTML” simplicity
- and utility-first power

Build faster, with less CSS, and fewer trade-offs.
