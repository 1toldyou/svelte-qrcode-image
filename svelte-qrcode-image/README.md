# Svelte-QRCode-Image

QR-Code generated using [node-qrcode](https://github.com/soldair/node-qrcode)
and display via `<img>` or `<canvas>` element, with TypeScript support and exported as ESM, works on SvelteKit.
<br>
Visit [this page](https://svelte-qrcode-image.itoldyou.dev/) for live demo.
<br>
**1.0.0 coming very soon**
<br>
[![Version](https://img.shields.io/npm/v/svelte-qrcode-image)](https://www.npmjs.com/package/svelte-qrcode-image)
[![License](https://img.shields.io/github/license/1toldyou/svelte-qrcode-image)](https://github.com/1toldyou/svelte-qrcode-image/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dw/svelte-qrcode-image)](https://www.npmjs.com/package/svelte-qrcode-image)
[![Last Commit](https://img.shields.io/github/last-commit/1toldyou/svelte-qrcode-image)](https://github.com/1toldyou/svelte-qrcode-image)

## Installation
Directly from [npm](https://www.npmjs.com/package/svelte-qrcode-image):
```bash
npm install svelte-qrcode-image
```
From [GitHub](https://github.com/1toldyou/svelte-qrcode-image):
```bash
npm install git+https://github.com/1toldyou/svelte-qrcode-image.git
```

## Usage
Under the `<script>` tag:
```ts
import { QRCodeImage } from "svelte-qrcode-image";
```
And that's all you need to put inside the `<script>` tag.
```html
<QRCodeImage text="hi" />
<QRCodeImage text="hi" width=233 />
<QRCodeImage text="hi" width=233 height=233 />
<QRCodeImage text="hi" scale=10 displayType="canvas" />
<QRCodeImage displayType="canvas" displayStyle="border-style: dotted;" width=500 displayWidth=400 />
```
You can also bind the `text` props to a variable, and will automatically refresh when the variable changes (reactivity)
```html
<QRCodeImage text={eee} />
```
for more real example you can reference the [source code](https://github.com/1toldyou/svelte-qrcode-image/blob/main/src/routes/%2Bpage.svelte) of the [demo page](https://svelte-qrcode-image.itoldyou.dev/).

## Parameters
These parameters can be pass in to the `<QRCodeImage />`
Although none of them are required, but please fill in the `text`

| prop                 | type                                 | description                                                                                                                                                       | default value                                                |
|----------------------|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| text                 | string                               | what you want the QR Code to show; the QR Code will changed automatically if any changes in the variable binding to it                                            | "Hello World"                                                |
| displayType          | "img" &#124; "canvas"                | display the image in `<canvas>` or `<img>`                                                                                                                        | "img"                                                        |
| displayWidth         | number                               | pass to the `width` attribute of `<img>` or `<canvas> tag                                                                                                         | null - the final `<img>` element will not have this property |
| displayHeight        | number                               | pass to the `height` attribute of `<img>` or `<canvas> tag                                                                                                        | null - the final `<img>` element will not have this property |
| displayStyle         | string                               | pass to the `style` attribute of `<img>` or `<canvas>` tag                                                                                                        | null - the final `<img>` element will not have this property |
| altText              | string                               | pass to the `alt` attribute of `<img>` tag                                                                                                                        | "QR Code"                                                    |
| displayID            | string                               | pass to the `id` attribute of `<img>` or `<canvas> tag                                                                                                            | null - the final element will not have this property         |
| displayClass         | string                               | pass to the `class` attribute of `<img>` or `<canvas> tag                                                                                                         | null - the final element will not have this property         |
| margin               | number                               | pass to `margin` to the options of [qrcode](https://www.npmjs.com/package/qrcode): Define how much wide the quiet zone should be                                  | 4                                                            |
| scale                | number                               | pass to `scale` to the options of [qrcode](https://www.npmjs.com/package/qrcode): A value of `1` means 1px per modules (black dots)                               | 4                                                            |
| width                | number                               | pass to `width` to the options of [qrcode](https://www.npmjs.com/package/qrcode): Forces a specific width for the output image and takes precedence over `scale`. | undefined - will be calculated                               |
| errorCorrectionLevel | "L" &#124; "M" &#124; "Q" &#124; "H" | pass to `errorCorrectionLevel` to the options of [qrcode](https://www.npmjs.com/package/qrcode): Error correction level.                                          | "M"                                                          |
| version              | number                               | pass to `version` to the options of [qrcode](https://www.npmjs.com/package/qrcode): QR Code version.                                                              | undefined - will be calculated                               |


## Troubleshooting
If you encounter any problem, please open an issue on our [GitHub Issue](https://github.com/1toldyou/svelte-qrcode-image/issues)

Nevertheless, we recommend you to this with the latest version of Svelte or SvelteKit and unable to guarantee that it will work with older versions.
The minimum version required of SvelteKit is `1.0.0-next.373` which use Vite 3.
And not works with [ancient browsers](https://vitejs.dev/guide/migration.html#modern-browser-baseline-change) by default.

### Limitation
The QR Code is being generated (A.K.A. the actual work) when [onMount](https://svelte.dev/docs#run-time-svelte-onmount) being called
to prevent the undefined behavior of [bind:this](https://svelte.dev/docs#template-syntax-element-directives-bind-this).
Might only have the `<img>` or `<canvas>` tag created during SSR.


## Plans
### TODO
- [x] Documentation
- [x] Expose options to control the `<img>` tag
- [x] Reactivity on text change
- [x] Website for demo
- [x] Display the QR-Code as canvas
- [ ] Display the QR-Code as background image
- [ ] Option to use different "backend" to generate the image
- [ ] Automatic Testing
- [ ] Reactivity on other options change (especially the `size`)


## Dependencies
- [qrcode](https://www.npmjs.com/package/qrcode)


## Change Log
See [CHANGELOG.md](https://github.com/1toldyou/svelte-qrcode-image/blob/main/CHANGELOG.md)

# create-svelte

Everything you need to build a Svelte library, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

Read more about creating a library [in the docs](https://kit.svelte.dev/docs/packaging).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build your library:

```bash
npm run package
```

To create a production version of your showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```
