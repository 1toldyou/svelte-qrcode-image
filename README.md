# Svelte-QRCode-Image
**Under development, please come back later**

QR-Code generated using [qrcode](https://www.npmjs.com/package/qrcode) ([node-qrcode](https://github.com/soldair/node-qrcode)) and display via `<img>` element, with TypeScript support.


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev
```

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

## TODO
- [ ] Documentation
- [ ] Expose more options
- [ ] Reactivity
- [ ] Display the QR-Code as background image or canvas
- [ ] Website for demo
