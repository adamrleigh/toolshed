# 🛠 Toolshed 🛠

Link to Graduation Showcase (Toolshed features from 0:41-13:41): https://youtu.be/NuYAaqwzwyE?t=46 
Link to Backend Repo: https://github.com/eobr/toolshed-backend

Toolshed is a decentralised community item library. It's mantra is to promote sharing of resources and build community spirit whilst saving the user money and reducing unnecessary waste, by facilitating lending and borrowing in a board of posts/requests and user-to-user chatrooms.

Toolshed was developed in an 8 day sprint as part of Northcoders final project phase by @adamrleigh @eobr @Eth4nF @hevmag @k-huggs.

## Techstack

- Front end
  - React Native
  - Expo go

- Back end
  - Firebase
  - Node.js  

## Running

### Requirements

- Node v17+
- npm v8+
- A firebase app with authentication, storage, and database enabled ([click here for a guide on creating a firebase app](https://firebase.google.com/docs/web/setup?continue=https%3A%2F%2Ffirebase.google.com%2Flearn%2Fpathways%2Ffirebase-web%23article-https%3A%2F%2Ffirebase.google.com%2Fdocs%2Fweb%2Fsetup))
- Either a Physical or emulated phone/tablet with Expo go v5+

### Usage

N.B If you have not already, download expo go [on your device](https://expo.dev/expo-go), or follow [these steps](https://docs.expo.dev/workflow/android-studio-emulator/) to setup an emulator with expo go

1. Clone the repo by running:
```
git clone https://github.com/adamrleigh/toolshed.git
```

2. Install dependencies by running: 
```
npm i
```

3. Create a new file 'firebaseConfig.JSON' at the root of the cloned repo. 
In the browser, navigate to the settings of your firebase app and copy the data within the firebaseConfig JSON object to the newly created file. Export this file as:

```
export const firebaseConfig = {
  CREDENTIALS HERE
}
```

3. Start the app by running:
```
npm start
```

4. Press 'a' to load the app on the connnected device
