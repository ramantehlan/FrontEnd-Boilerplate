![Frontend Boilerpate](https://user-images.githubusercontent.com/29037312/63212892-401ce980-c128-11e9-83ab-5f01b22426ee.png)

# Frontend-Boilerplate

A simple Frontend Boilerplate.

[![CircleCI](https://circleci.com/gh/ramantehlan/Frontend-Boilerplate.svg?style=svg)](https://circleci.com/gh/ramantehlan/Frontend-Boilerplate) 
![License](https://img.shields.io/badge/License-GPL%20v3.0-yellowgreen)

## Index

- [About](#about)
- [Usage](#usage)
  - [Pre-Requisites](#pre-requisites)
  - [Developmen Environment](#development-environment)
  - [File Structure](#file-structure)
  - [Commands](#build)  
- [Development](#development)
- [Contribution](#contribution) 
  - [Branches](#branches)
- [Resources](#resources)
- [Credit](#credit)
- [License](#license)

## About

The purpose of this project is to have a Frontend Boilerplate which is easy to understand and work with and can be quickly used in other projects without the need to write everything again. 

I created it for personal use, but feel free to use it for your project or maybe for a hackathon. I have tried my best to explain the in-depth working of this boilerplate.

## Usage

To use this Boilerpate, make sure you have all the `pre-requisites` and your `development environment` is ready. After that you can read about the `file-structure`, which also explains about project struction and how things are working in background. Commands will tell you about the important `commands` you should konow. 

### Pre-Requisites

In order to work on this project or to develop it, you need to have some pre-installed tools and knowledge about them. Below are the tools you need to install on your system:

- NodeJs
- NPM

### Development Environment

Once you have all the requirements checked out, you can develop this project. You need to set up the development environment to work on it. Follow the steps given below to setup:

1. Fork this repo.
2. Clone the forked repo on your system. $ git clone https://github.com/YOUR_USERNAME/pydatadelhi.github.io
3. We prefer you to work on different branched on your forked repo.
4. Go inside the cloned folder, and install all the dependencies. $ npm install
5. Now you can make your changes, to test them run the dev server. $ npm run dev


### File Structure

 No | File/Folder name   | Details
 ---|--------------------|--------
 1 	| ./docs 		     | Webpack output the build here, which is then hosted by github pages.
 2 	| ./src              | Contains un-built application source code.
 3 	| ./src/components   | Individual components view, styling, and logic that our application uses.
 3 	| ./src/style        | Style for the project.
 4 	| ./static           | Static files like images, third-party libraries, PWA manifest, and service worker are stored here.
 5  | ./node_modules/... | Auto installed node packages.
 6  | package.json       | NPM package file for this project.
 7  | package-lock.json  | NPM packages details.
 8  | webpack.dev.js     | Development configuration file for webpack.
 8  | webpack.prod.js    | Production configuration file for webpack.
 9  | LICENSE 		     | GNU General Public License v3.0
 11 | .gitignore         | To ignore files to be a part of version control.


### Commands

- Running all the test.
    ```
    npm run test
    ```
- Starting development server.
    ```
    npm run dev
    ```

#### Build
To build the project for production, you can use the following command. The output will be dumped in `/docs` folder which is used by the github pages to host the site.

```
$ npm run build
```

## Development

#### Root files

The root/entry file for the project can be found in the `./static` folder, it also consists of all the global files like index.css, plus its purpose is to store the static file like images etc. 

#### **Working with .vue files.**

In the folder `./src/components`, you will find most of the `.vue` files, they are the components for different pages, which you will understand from there name. Below is the basic structure of any `.vue` file. 

``` vue
<template>
    HTML CODE...
</template>

<style scoped>
    CSS SHEET...
</style>

<script>
    JAVASCRIPT CODE...
</script>
```

Here, `template` tag consist of all the HTML for that particular component, in our case page. `style` tag consists of all the CSS style and finally, `script` tag consists of all the javascript. To create a new component, you just have to add a `NEW-COMPONENT.vue` to components folder.

#### **Adding a new route** 

All the routers are defined in `./src/router.js` file. To add a new route, you must create a new component and import it to this file. 

```
...
import Home from '@/components/NEW-COMPONENT-NAME'
...
export default new Router({
  routes: [...
    {
      path: '/NEW-LOC',
      name: 'NEW-COMPONENT-NAME',
      component: NEW-COMPONENT-NAME
    }
...]})

```

## Contribution

 Your contributions are always welcome and appreciated. Following are the things you can do to contribute to this project.

 1. **Report a bug** <br>
 If you think you have encountered a bug, and I should know about it, feel free to report it [here](https://github.com/ramantehlan/Frontend-Boilerplate/issues/new) and I will take care of it.

 2. **Request a feature** <br>
 You can also request for a feature [here](https://github.com/ramantehlan/Frontend-Boilerplate/issues/new), and if it will viable, it will be picked for development.  

 3. **Create a pull request** <br>
 It can't get better then this, your pull request will be appreciated by the community. You can get started by picking up any open issues from [here](https://github.com/ramantehlan/Frontend-Boilerplate/issues) and make a pull request.

 > If you are new to open-source, make sure to check read more about it [here](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source) and learn more about creating a pull request [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github).

### Branches

We are following agile continuous integration methodology, so the version is frequently updated and development is really fast.

1. **`stage`** is the development branch.

2. **`master`** is the production branch.

3. No other permanent branches should be created in the main repository, you can create feature branches but they should get merged with the master.

**Steps to work with feature branch**

1. To start working on a new feature, create a new branch prefixed with `feat` and followed by feature name. (ie. `feat-FEATURE-NAME`)
2. Once you are done with your changes, you can raise PR.

**Steps to create a pull request**

1. Make a PR to `stage` branch.
2. Comply with the best practices and guidelines e.g. where the PR concerns visual elements it should have an image showing the effect.
3. It must pass all continuous integration checks and get positive reviews.

After this, changes will be merged.

##  Resources
- [Webpack](https://webpack.js.org)
- [NPM Graph](https://www.npm-graph.com/)
- [babel](https://babeljs.io/)
- [Mocha](https://mochajs.org/)
- [CI/CD Best Practices](https://www.digitalocean.com/community/tutorials/an-introduction-to-ci-cd-best-practices)

## Credit

Author: [Raman Tehlan](https://ramantehlan.github.io)

##  License

GNU General Public License v3.0
