# Svelte-QRCode-Image
**Under development, breaking change could occur before 1.0.0**

QR-Code generated using [qrcode](https://www.npmjs.com/package/qrcode) ([node-qrcode](https://github.com/soldair/node-qrcode)) 
and display via `<img>` element, with TypeScript support, works on SvelteKit.


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


## TODO
- [ ] Documentation
- [ ] Expose more options
- [x] Expose options to control the `<img>` tag
- [x] Reactivity on text change
- [ ] Display the QR-Code as background image or canvas
- [x] Website for demo


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
