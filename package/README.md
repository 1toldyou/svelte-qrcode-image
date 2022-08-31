# Svelte-QRCode-Image
**Under development, breaking change could occur before 1.0.0**

QR-Code generated using [qrcode](https://www.npmjs.com/package/qrcode) ([node-qrcode](https://github.com/soldair/node-qrcode)) 
and display via `<img>` element, with TypeScript support, works on SvelteKit.
<br>
Visit [this page](https://svelte-qrcode-image.itoldyou.dev/) for live demo.


## Installation
Directly from npm:
```bash
npm install svelte-qrcode-image
```
From GitHub:
```bash
npm install git+https://github.com/1toldyou/svelte-qrcode-image.git
```

## Usage
Under the `<script>` tag:
```ts
import { QRCodeImage } from "svelte-qrcode-image";
```
for real example you can reference the [source code](https://github.com/1toldyou/svelte-qrcode-image/blob/main/src/routes/%2Bpage.svelte) of the [demo page](https://svelte-qrcode-image.itoldyou.dev/).

## Parameters
These parameters can be pass in to the `<QRCodeImage />`
Although none of them are required, but please fill in the `text`

| prop                 | type               | description                                                                                                                                                       | default value                                                |
|----------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| text                 | string             | what you want the QR Code to show; the QR Code will changed automatically if any changes in the variable binding to it                                            | "Hello World"                                                |
| displayWidth         | number             | pass to the `width` property of `<img>` tag                                                                                                                       | null - the final `<img>` element will not have this property |
| displayHeight        | number             | pass to the `height` property of `<img>` tag                                                                                                                      | null - the final `<img>` element will not have this property |
| displayStyle         | string             | pass to the `style` property of `<img>` tag                                                                                                                       | "" - the final `<img>` element will not have this property   |
| displayStyle         | string             | pass to the `style` property of `<img>` tag                                                                                                                       | "" - the final `<img>` element will not have this property   |
| altText              | string             | pass to the `alt` property of `<img>` tag                                                                                                                         | "QR Code"                                                    |
| margin               | number             | pass to `margin` to the options of [qrcode](https://www.npmjs.com/package/qrcode): Define how much wide the quiet zone should be                                  | 4                                                            |
| scale                | number             | pass to `scale` to the options of [qrcode](https://www.npmjs.com/package/qrcode): A value of `1` means 1px per modules (black dots)                               | 4                                                            |
| width                | number             | pass to `width` to the options of [qrcode](https://www.npmjs.com/package/qrcode): Forces a specific width for the output image and takes precedence over `scale`. | undefined - will be calculated                               |
| errorCorrectionLevel | "L", "M", "Q", "H" | pass to `errorCorrectionLevel` to the options of [qrcode](https://www.npmjs.com/package/qrcode): Error correction level.                                          | "M"                                                          |
| version              | number             | pass to `version` to the options of [qrcode](https://www.npmjs.com/package/qrcode): QR Code version.                                                              | undefined - will be calculated                               |


## Plans
### TODO
- [x] Documentation
- [x] Expose options to control the `<img>` tag
- [x] Reactivity on text change
- [x] Website for demo
- [ ] Display the QR-Code as background image or canvas
- [ ] Option to use different "backend" to generate the image


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
