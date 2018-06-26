var mqtt = require("mqtt");

// Please change APP_ID and APP_KEY to those provided by WiiHey Customer Service
var APP_ID = "demo";
var APP_KEY = "demo123";

var PORT = 8883;
var HOST = "iot.wiihey.com";

var options = {
  port: PORT,
  host: HOST,
  username: APP_ID,
  password: APP_KEY,
  protocol: "mqtts",
  rejectUnauthorized: true
};

var client = mqtt.connect(options);

client.subscribe("apps/" + APP_ID + '/inbox');

client.on("connect", function() {
  console.log("Connection Established");
});

client.on("message", function(topic, message) {
  console.log("Received: " + message.toString());

  // Process Received Message
});

console.log('WiiHey DaaS Client Started');
