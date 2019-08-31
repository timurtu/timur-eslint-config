# [timur-eslint-config](https://www.npmjs.com/package/timur-eslint-config)

My personal opinionated preference eslint config that can be written into any project with a simple command. prettier-eslint-cli is also installed as a dev dependency. It's used for JavaScript, React, and React Native projects. To get a feel for the style you could look at the eslint config. You can also easily integrate with Webstorm file watching


## Prerequisites

You must have node and yarn installed on your machine

## install as a global dependency

```
yarn global add timur-eslint-config
```

## Usage

Go into any project directory where you want this eslint config. Next run 
```
timur-eslint-config
```

## Integrate with Webstorm file watching

- Go to __Webstorm>Preferences__ then in the top left search bar search for __file watchers__


![file watchers](https://github.com/timurtu/timur-eslint-config/raw/master/file-watchers.png "file watchers")

- Hit the plus icon, hit __Prettier__ then enter these settings



- Notice that we changed __$ProjectFileDir$/node_modules/.bin/prettier__ to __$ProjectFileDir$/node_modules/.bin/prettier-eslint__

- This will be red if you did not first run __timur-eslint-config__ in the project root directory

