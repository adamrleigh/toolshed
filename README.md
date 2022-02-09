# 🛠 Toolshed 🛠


Simply put, Toolshed is a decentralised [item library](https://en.wikipedia.org/wiki/Borrowing_center). Users can post items and requests, and message other users to arrange a lend.

Whilst there are no restrictions on the kinds of items that can be shared, the main targets are items such as power tools that are used infrequently and gather dust for months on end.

By sharing items within the local community, users save money and reduce waste whilst fostering community spirit. 
The design philosophy of Toolshed is a platform rather than a service - Toolshed connects you with your community and facilitate sharing that works for you.



Toolshed was developed in an 8 day sprint as part of Northcoders final project phase by @adamrleigh @eobr @Eth4nF @hevmag @k-huggs.

Link to Graduation Showcase (Toolshed features from 0:41-13:41): https://youtu.be/NuYAaqwzwyE?t=46 


## Techstack

- Front end
  - React Native
  - Expo go

- Back end
  - Firebase
  - Node.js  

## Usage

### Requirements

- Node v17+
- npm v8+
- A firebase app with authentication, storage, and database enabled ([click here for a guide on creating a firebase app](https://firebase.google.com/docs/web/setup?continue=https%3A%2F%2Ffirebase.google.com%2Flearn%2Fpathways%2Ffirebase-web%23article-https%3A%2F%2Ffirebase.google.com%2Fdocs%2Fweb%2Fsetup))
- Either a Physical or emulated phone/tablet with Expo go v5+

### Running Toolshed

N.B. If you have not already, download expo go [on your device](https://expo.dev/expo-go), or follow [these steps](https://docs.expo.dev/workflow/android-studio-emulator/) to setup an emulator with expo go.

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
