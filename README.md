# PTC Themer

![alt text](https://github.com/liaoalice/PTC-Themer/blob/master/assets/PTC%20Themer%20Art.png "PTC Themer Cover Art")

A private Figma plugin to help PTC design segments migrate Figma files to the Convergence Design System styling and adopt semantic tokens. This plugin was cloned and modified from [Daniel Destefanis' Auto Theme plugin](https://github.com/destefanis/auto-theme).

## How to run locally
* Run `yarn` to install dependencies.
* Run `yarn build:watch` to start webpack in watch mode.

If your Webpack build fails, you may need to switch to Node.js 17 through [Node Version Manager](https://github.com/nvm-sh/nvm), then run `export NODE_OPTIONS=--openssl-legacy-provider`.

<!-- ## How it works (zzz)

![alt text](https://github.com/destefanis/auto-theme/blob/master/assets/auto-theme-example.gif?raw=true "Auto Theme Gif Example") -->


## Toolings
This repo is using:
* React + Webpack
* TypeScript
* TSLint
* Prettier precommit hook
