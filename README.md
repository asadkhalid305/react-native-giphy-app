# React Native Giphy App 🤌

## An app to interact with amazing gifs that are being fetched from giphy.com

## Features
✔️ Shows random gifs\
✔️ Let you search gifs\
✔️ Show gif details


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purpose.

You'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)), and [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)  installed on your computer.

```
git@2.17.1 or higher
node@v12.x.x or higher
npm@6.14.x or higher
expo-cli@4.12.0 or higher
```


### How To Use 

From your command line, clone and run the app:

```bash
# Clone this repository
git clone https://github.com/asadkhalid305/react-native-giphy-app

# Go into the repository
cd react-native-giphy-app/

# Setup default environment variables

# For Linux and macOS
cp env.example .env
# For Windows
copy env.example .env

# Install dependencies
npm install

# Start a local dev server
npm start
```

### Getting Giphy API Key

Generate a Giphy API key by following these [instructions](https://developers.giphy.com/docs/api/#:~:text=Apply%20for%20an%20API%20Key(s)).

1. Create a file called .env in the root directory of your project (if not done already in section: [How To Use](#how-to-use))

2. Inside the .env file, add key `GIPHY_API_KEY` and assign your Giphy API key like this.

```env
// .env
GIPHY_API_KEY="YOUR GIPHY API KEY"
```

**Warning:** Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.

### See the App Running

If you are starting **react-native** app first time on your machine via **expo-cli**, I would recommend to go through these [details](https://docs.expo.dev/workflow/expo-cli/) to know about what is it and how to use it. 

If you know it already and want to run this app either on Android or iOS emulators or actual devices, please have a look at this [info](https://reactnative.dev/docs/environment-setup#:~:text=Running%20your%20React%20Native%20application).

## Deployment

> What if you want to show this app to someone?

Say no to *Play or App Store*. Instead you can deploy your build with few clicks on [Expo Dev](https://expo.dev/) and share the link to anyone who can download your application's APK and install it right away. 

To know how, follow these [instructions](https://docs.expo.dev/workflow/publishing/#:~:text=To%20publish%20a%20project%2C%20click%20the%20Publish%20button%20in%20Expo%20Dev%20Tools.%20(It%E2%80%99s%20in%20the%20left%20side%20bar.)%20If%20you%27re%20using%20command%20line%2C%20run%20expo%20publish.%20No%20setup%20is%20required%2C%20go%20ahead%20and%20create%20a%20new%20project%20and%20publish%20it%20without%20any%20changes%20and%20you%20will%20see%20that%20it%20works.).

## Contribute
If you'd like to make this app better for other users, have a look at [Issues](https://github.com/asadkhalid305/react-native-giphy-app/issues) or create issues that you think need to be done to make it better project for learning and fun.

Have you created something awesome for your fork and want to share it? Feel free to open a [pull request](https://github.com/asadkhalid305/react-native-giphy-app/pulls).

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->