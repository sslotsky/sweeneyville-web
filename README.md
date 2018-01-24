# sweeneyville-web

A hackable game made with ReasonML & PixiJS. A work very much in progress.

## run it

Assuming git and yarn are installed, clone the repo and:

```
yarn install
yarn run play
```

## use it

Navigate to a scene editor and drop characters on the screen. Give them scripts to follow using [slangwidge](https://www.npmjs.com/package/slangwidge), a programming language for NPCs built in OCaml. Also a work very much in progress.

## develop it

The goal is to write a game in the spirit of the classic ZZT by Tim Sweeney. Contribution is welcome.

This is a Reason/Bucklescript project and a webpack project. Run the Bucklescript compiler in watch mode with:

```
yarn start
```

Run the web app with:

```
yarn run play
```

Changes to `.re` files will be picked up by `bsb` and the project will recompile. Changes to `.js` files will be similarly detected by `webpack`.
