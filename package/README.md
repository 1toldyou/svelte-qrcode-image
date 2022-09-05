# Svelte-QRCode-Image

QR-Code generated using [qrcode](https://www.npmjs.com/package/qrcode) ([node-qrcode](https://github.com/soldair/node-qrcode)) 
and display via `<img>` element, with TypeScript support, works on SvelteKit.
<br>
Visit [this page](https://svelte-qrcode-image.itoldyou.dev/) for live demo.
**Under development, breaking change could occur before 1.0.0**

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
```html
<QRCodeImage text="hi" />
<QRCodeImage text="hi" width=233 />
<QRCodeImage text="hi" width=233 height=233 />
<QRCodeImage text="hi" scale=10 displayType="canvas" />
```
for real example you can reference the [source code](https://github.com/1toldyou/svelte-qrcode-image/blob/main/src/routes/%2Bpage.svelte) of the [demo page](https://svelte-qrcode-image.itoldyou.dev/).

## Parameters
These parameters can be pass in to the `<QRCodeImage />`
Although none of them are required, but please fill in the `text`

| prop                 | type               | description                                                                                                                                                       | default value                                                |
|----------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| text                 | string             | what you want the QR Code to show; the QR Code will changed automatically if any changes in the variable binding to it                                            | "Hello World"                                                |
| displayType          | "img", "canvas"    | display the image in `<canvas>` or `<img>`                                                                                                                        | "img"                                                        |
| displayWidth         | number             | pass to the `width` attribute of `<img>` or `<canvas> tag                                                                                                         | null - the final `<img>` element will not have this property |
| displayHeight        | number             | pass to the `height` attribute of `<img>` or `<canvas> tag                                                                                                        | null - the final `<img>` element will not have this property |
| displayStyle         | string             | pass to the `style` attribute of `<img>` or `<canvas>` tag                                                                                                        | null - the final `<img>` element will not have this property |
| altText              | string             | pass to the `alt` attribute of `<img>` tag                                                                                                                        | "QR Code"                                                    |
| displayID            | string             | pass to the `id` attribute of `<img>` or `<canvas> tag                                                                                                            | null - the final element will not have this property         |
| displayClass         | string             | pass to the `class` attribute of `<img>` or `<canvas> tag                                                                                                         | null - the final element will not have this property         |
| margin               | number             | pass to `margin` to the options of [qrcode](https://www.npmjs.com/package/qrcode): Define how much wide the quiet zone should be                                  | 4                                                            |
| scale                | number             | pass to `scale` to the options of [qrcode](https://www.npmjs.com/package/qrcode): A value of `1` means 1px per modules (black dots)                               | 4                                                            |
| width                | number             | pass to `width` to the options of [qrcode](https://www.npmjs.com/package/qrcode): Forces a specific width for the output image and takes precedence over `scale`. | undefined - will be calculated                               |
| errorCorrectionLevel | "L", "M", "Q", "H" | pass to `errorCorrectionLevel` to the options of [qrcode](https://www.npmjs.com/package/qrcode): Error correction level.                                          | "M"                                                          |
| version              | number             | pass to `version` to the options of [qrcode](https://www.npmjs.com/package/qrcode): QR Code version.                                                              | undefined - will be calculated                               |


## Troubleshooting
If you encounter any problem, please open an issue on our [GitHub Issue](https://github.com/1toldyou/svelte-qrcode-image/issues)

Nevertheless, we recommend you to this with the latest version of Svelte or SvelteKit and unable to guarantee that it will work with older versions.
The minimum version required of SvelteKit is `1.0.0-next.373` which use Vite 3. 
And only works with [modern browsers](https://vitejs.dev/guide/migration.html#modern-browser-baseline-change) by default.

### Limitation
The QR Code might not be generated during SSR, will only have the `<img>` or `<canvas>` tag created,
as the actual work is done in [onMount](https://svelte.dev/docs#run-time-svelte-onmount) to prevent the undefined behavior of [bind:this](https://svelte.dev/docs#template-syntax-element-directives-bind-this)


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


### Not Planned
- Complex/Fancy QR-Code styling to the image: I created this package for simplicity; in that case it will need different "backend" to generate the image and the size will be larger


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:
```bash
npm run dev
```
You can change the port in `vite.config.ts`.

Since this being setup as SvelteKit project, so you should create your component in `src/lib` directory.
And re-export it in `src/lib/index.js` file.
```javascript
export { default as MyComponent } from './MyComponent.svelte';
```

## Publish Package
Simply run this
```bash
svelte-package
```
will create a new directory called `package` with the TypeScript definition
<br>

Then you can publish it to npm (remember to login first)
```bash
cd package
npm publish
```
or 
```bash
npm publish ./package
```

## Publish Website
Due to recent change in SvelteKit, you need to run this command to build the website
```bash
vite build
```
Instead of 'npm run build`
Since it's calling in the background
```bash
svelte-kit sync && svelte-package
```
Which will npt create the `public` directory, which is needed for the website to work.


## Change Log
I decided not to write the change log until 1.0.0, but the commit history should be enough to track the changes.
