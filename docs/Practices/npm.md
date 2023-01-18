# NPM best practices


#### TLDR
Use `nvm` and install packages with `npm ci` unless you're actively updating or installing new packages.

### Node and NPM version management

We encourage using a version manager to switch Node and NPM versions between different projects.
PrendaWorld uses Meteor which is very specific and controlling about when you can update Node, so consistency is important.
The main version control software for NPM is [NVM](https://github.com/nvm-sh/nvm) after installation, `cd` into the directory and then run `nvm use` for more information please see their [documentation](https://github.com/nvm-sh/nvm#usage).

You can also use [ASDF](https://asdf-vm.com/) which is a version manager for multiple languages, including node.

### Package updates

* We encourage keeping npm packages up to date and using best practices when considering installing packages, updating packages, and removing packages.
* We should use proper [SEMVER](https://semver.org/) practices. This includes using your package.json to define what versions of the package are okay to install. We should try to default to only patch updates (with `~`) to minimize accidental updates of minor packages that _could_ break the application.
* When working in projects like PrendaWorld, if you aren't installing new packages, or planning on changing versions of packages for that release, when installing packages please **use `npm ci` instead of `npm i` so that the package-lock.json doesn't get updated**.
* We encourage seperation of `package.json`/`package-lock.json` updates and code updates, the only exception is when using a new package for code you're working on or having to update a package to use a new feature.

### Meteor Specific Practices

Meteor encourages using an alias for npm with `meteor npm install` for _reasons_ linked below. As long as you'se using the proper version you can run the install command through npm. 

```
npm ci 
```

According to the [meteor forum](https://forums.meteor.com/t/meteor-npm-install-vs-npm-install/20495/3) this is so that you don't have to have npm installed globally, but since we're using NVM or ASDF, as long as you have the correct version of node and npm when you're in the project, it offers no value.


### Package update tools

As mentioned above, we encourage _keeping packages up to date_. There are a couple of interfaces to see what NPM packages are out of date, as well as tools to keep the updates front of mind.

* [npm-check](https://github.com/dylang/npm-check) -> an interface for seeing all outdated packages broken out by semver with a mechinism to update
* [npm-check-updates](https://github.com/raineorshine/npm-check-updates) -> similar to npm-check
* [dependabot](https://github.com/dependabot/dependabot-core) -> Github owned bot that can create issues, or PR's to update out of date packages
