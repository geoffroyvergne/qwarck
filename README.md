# AngularJs Bootstrap Grunt

## Introduction
AngularJs Bootstrap Grunt is a base application

Deployment: Grunt
JS: AngularJs
Css: Bootstrap
Unit Tests: Karma Jasmin PhantomJs
Integrations Tests: Celenium Protractor Jasmin2

## INSTALLATION

```
npm install
```

## NodeJs

```
grunt server
```

```
grunt connect
```

App
http://localhost:3000

Dist
http://localhost:4000


## DEPLOYMENT

```
grunt clean build
```

##  UNIT TESTS

```
grunt karma
```

##  INTEGRATIONS TESTS

```
node node_modules/protractor/bin/webdriver-manager update --proxy http://localhost:8888 --ignore_ssl true

grunt server

node node_modules/protractor/bin/webdriver-manager start

grunt protractor
```
