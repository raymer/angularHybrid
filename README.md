# `angularHybrid` — the seed for an AngularJS/Angular hybrid.

This project is a simple hybrid AngularJS/Angular application with WebPack. The aim of this project is to aid developers starting their journey of upgrading an AngularJS application in small chunks over to Angular.

There seemed to be a lack of documentation online about setting up a hybrid app with WebPack. The official docs use SystemJS, so that was out of the question. Some blogs I found used WebPack, but they assumed your AngularJS app was already completely componentized (using the 1.5 component API) and others assumed you were writing ES2015. Neither of these are true in many cases, this seed project fills that gap.

## Getting Started

To get you started you can simply clone the `angularHybrid` repository and install the dependencies:

### Prerequisites

You need git to clone the `angularHybrid` repository. You'll also need NPM and Bower to install the application packages.

### Clone `angularHybrid`

Clone the `angularHybrid` repository using git:

```
git clone https://github.com/raymer/angularHybrid.git
cd angular-seed
```

### Install Dependencies

```
npm install
```

```
bower install
```

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files


### Run the Application

I have preconfigured the project with a simple webpack development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/#/foo`.


### Running Unit Tests

To run the AngularJS tests

```
karma start
```

To run the Angular tests

```
karma start karma.conf.webpack.js
```
