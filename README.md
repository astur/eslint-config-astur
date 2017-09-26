# eslint-config-astur

[eslint](https://eslint.org) config that I like to use sometime

[![NPM version][npm-image]][npm-url]

## Install

```bash
npm install eslint eslint-config-astur
```

## Usage

1. Make `.eslintrc` like this:

```json
{
    "extends": "astur"
}
```

2. In your `package.json` add something like this

```json
    "scripts": {
        "test": "eslint ."
    },
```

3. Run `npm test`

## License

MIT

[npm-url]: https://npmjs.org/package/eslint-config-astur
[npm-image]: https://badge.fury.io/js/eslint-config-astur.svg