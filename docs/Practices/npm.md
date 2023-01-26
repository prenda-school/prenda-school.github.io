# NPM best practices


#### TLDR
Always run `nvm use` before starting a project. Use `npm i` for keeping installed packages up-to-date in everyday development. Pay attention to package lock file updates from `npm i` and open isolated pull requests fo them. Use `npm ci` when you want to mimic automated jobs (like CI) or install packages exactly as the lock file describes.

### Node and NPM version management

We encourage using a version manager to switch Node and NPM versions between different projects. We suggest using the Node Version Manager project, [NVM](https://github.com/nvm-sh/nvm). After installation, `cd` into the directory and then run `nvm use`. For more information, please see the [NVM usage documentation](https://github.com/nvm-sh/nvm#usage). You can also use [ASDF](https://asdf-vm.com/) which is a version manager for multiple languages, including node.

In the case of Prenda World, the project is built on the Meteor framework which bundles and uses a set version of Node and NPM. The Meteor documentation advises using these bundled instances that are accessible under the Meteor program, `meteor node ...` and `meteor npm ...`. We maintain synchronization of the bundled Meteor versions with the project configuration file so that it is **equivalent** for you to use Node/NPM directly after using your version manager: `nvm use` and then `node ...` or `npm ...`.

### Package updates

* We encourage keeping npm packages up to date and using best practices when considering installing packages, updating packages, and removing packages.
* We should use proper [SEMVER](https://semver.org/) practices. This includes using your package.json to define what versions of the package are okay to install. We should try to default to only patch updates (with `~`) to minimize accidental updates of minor packages that _could_ break the application.
* We encourage use of `npm install` (or `npm i`, for short) after every pull, or reasonably often, to ensure developers are always working with the latest dependencies installed.
  * We require that updates to the package-lock (`package-lock.json`) made through the use of the routine `npm install` are submitted in dedicated PR's, not mixed with other code changes -- they are expected and apply to every engineer's environment.
  * These routine, "re"-installs are a separate concern from modifying dependencies, see below.
* We encourage the use of `npm ci` to simulate the behavior and environment in automated processes like continuous integration jobs. This command should never change the package-lock.
* We encourage seperation of modifying (installing project dependencies, i.e. changes to the package and lock file (`package.json`/`package-lock.json`).
  * "modifying" = installing, uninstalling, upgrading, downgrading, etc.
  * The exception is dependency modification for code you're working on or having to that is essentially tied to other code modifications, e.g. replacing one package for another and refactoring the code to use the new package instead of the old.

### Meteor Specific Practices

Meteor encourages using the version of Node and NPM bundled with the tool through its commands like `meteor node .` and `meteor npm ...`. Syncing the version of Node/NPM you are using, like outlined above, is an equivalent solution to this advice. 

### Package update tools

As mentioned above, we encourage _keeping packages up to date_. There are a couple of interfaces to see what NPM packages are out of date, as well as tools to keep the updates front of mind.

* [npm-check](https://github.com/dylang/npm-check) -> an interface for seeing all outdated packages broken out by semver with a mechinism to update
* [npm-check-updates](https://github.com/raineorshine/npm-check-updates) -> similar to npm-check
* [dependabot](https://github.com/dependabot/dependabot-core) -> Github owned bot that can create issues, or PR's to update out of date packages
