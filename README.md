# ginfinity
Garten Infinity Cross platform application

## Certified for use with:
* **node**: v12.18.4
* **npm**: v6.14.6
* **react-native**: sdk-39.0.3

## gInfinity Architecture
"gInfinity" is a Monorepo for IOS, Android, and Web. At its core, ![Expo](https://expo.io/) provides the foundation for all three platforms using ![react-native](https://reactnative.dev/). At a high level the plan is to use ![this](https://drive.google.com/file/d/1oBDGdjBPnhF1N-CbLEczyo1A9CwDletl/view?usp=sharing) living document found [here](https://docs.google.com/drawings/d/1Xz_D8CQ3Zj5QksqQb7ZWr8uBEy4HQh-2QqigRxrBVX8/edit). The latest ERD can be found [here](https://drive.google.com/file/d/1u5DIzY2n9ILm1fjJzMGsX9rfIkbDow68/view?usp=sharing)

## Up and Running
Assuming you have installed node & npm per the above certified versions
`npm install`

### Starting and stopping
Please expect Expo to open a "developer console" in your default browser.
For testing with a device you will need to select "tunnel"
and scan the QR code in the [expo go](https://expo.io/client) app.

**Start**: `expo start`
**Stop** `ctrl-c`

## Tests
* code coverage: `npm run coverage`
* Jest Tests
  * For local laptop: `npm run test`
  * Cross platform headless: TBD

### Linting
For IDE: plugin like `linter-eslint` should do.
Command-line: TBD

## Author
noel.miller@garten.co
