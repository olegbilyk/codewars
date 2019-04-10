# Сodewars

### Solutions [Codewars](https://www.codewars.com) katas

Codewars is a community of developers, who are called Code Warriors (or just warriors), that train on improving their development skills. Think of it like a coding dojo - where developers train with each other and help each other get better through practice.

##### Vocabulary

- Kata: is an algorithm you have to solve in any programming language you desire
- Kyu: is a digit that determines kata difficulty level as well as the user rank on the platform

##### Repository Structure

There's a folder for each kata nested in its own kyu

```ascii
├── 6-kyu/
│   ├── Create iterator.js
│   └── ...
│
├── 4-kyu/
│   ├── Adding Big Numbers.js
│   └── ...
│
└── ...
```

#### Installation

```bash
// With npm
npm i

// With yarn
yarn
```

#### Create a new Kata

To generate a new file

```bash
// With npm
npm run createKata [kataId] [language]

// With yarn
yarn run createKata [kataId] [language]
```

**kataId** - `https://www.codewars.com/kata/`**create-iterator**`/javascript`

**language:** - should be _lowercase_

In example

```bash
yarn run createKata create-iterator javascript
```

###### Supported language:

- JavaScript
- TypeScript

#### My account

[Oleg Bilyk](https://www.codewars.com/users/OlegBilykPro)

### License

[MIT](LICENSE) **[`Oleg Bilyk`](https://github.com/olegbilyk)**
