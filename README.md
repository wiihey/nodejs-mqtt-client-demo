# Getting Started

## Step 1: Get prerequisites

You are going to need following tools:

Install [Git](https://git-scm.com/downloads)
Install [Node.js and NPM](https://nodejs.org/en/)

You can verify your installation by running the following in a Terminal window:

```
$ git --version
git version 2.17.1
$ node -v
v10.4.1
$ npm -v
6.1.0
```

## Step 2: Download Sample Project

We have provided a simple sample to get you started. In the Terminal window run following command to clone the sample repository to your local machine:

`git clone https://github.com/wiihey/nodejs-mqtt-client-demo.git`

## Build and Run

Change to the directory that holds the sample:

`cd nodejs-mqtt-client-demo`

You need to install the dependencies to build the sample. Run the following command:

`npm install`

Wait for a while. Once it is finished, you can run the app:

`node src/index.js`

When the app starts, it displays `WiiHey DaaS Client Started` in the terminal window.

```
$ node src/index.js 
WiiHey DaaS Client Started
Connected to WiiHey DaaS Platform
```

## Configure APP-ID and APP-KEY

You will get a pair of APP-ID and APP-KEY when purchasing WiiHey DaaS Service. You should configure them in the code.

```
// Please change APP_ID and APP_KEY to those provided by WiiHey Customer Service
var APP_ID = "demo";
var APP_KEY = "demo123";
```

Please find above code in `src/index.js` and modify according to your APP-ID and APP-KEY.

## Work with Devices

When Device sends message to WiiHey DaaS Platform, you may see output like this:
```
Received: {"DeviceID":"3","State":"close","BatteryLevel":9971,"CSQ":31,"IMEI":"868575022027272","CCID":"89860414111890171008","Timestamp":1529997979}
```

