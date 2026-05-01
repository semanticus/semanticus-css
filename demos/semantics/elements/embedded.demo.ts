import { renderElement } from "@demos/utils";

export function image(attrs: Record<string, string> = {}) {
  return `<img src="https://picsum.photos/800/400" alt="A placeholder landscape image" />`;
}

export function responsiveImage(attrs: Record<string, string> = {}) {
  return renderElement("figure", attrs, `<img src="https://picsum.photos/800/400" alt="Responsive placeholder image" />
  <figcaption>Images are responsive by default: <code>max-width: 100%</code> and <code>height: auto</code>.</figcaption>`);
}
