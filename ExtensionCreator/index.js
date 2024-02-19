import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import chalkRainbow from 'chalk-rainbow';
import readline from 'readline';
import fs from 'fs';

clear();

console.log(
    chalk.white(
        figlet.textSync('Extension', { 
            horizontalLayout: 'full',
            width: 150 
        })
    )
   
);

const prompts = readline.createInterface(process.stdin, process.stdout);
var thatsIt = false;
var imageLinks = [];


prompts.question('Name Your Extension: ', (response) => {

    console.log(
        chalk.white(
            figlet.textSync(response, { 
                horizontalLayout: 'full',
                width: 60
            })
        )
    );

    prompts.question('Background Color: ', (response2) => {

        prompts.question('Image Address to Image You Want to Use: ', (response3) => {
        
        var htmlContent = "<!DOCTYPE html><html><head><script type='text/javascript' src='buttonScript.js'></script><link href='cssContent.css' rel='stylesheet' type='text/css' /><link rel='preconnect' href='https://fonts.googleapis.com'><link rel='preconnect' href='https://fonts.gstatic.com' crossorigin><link href='https://fonts.googleapis.com/css2?family=Koulen&family=Rajdhani:wght@300&display=swap' rel='stylesheet'></head><body> <center><h1 id='titleLine'>"+response+"</h1></center><center><div class='btn-group'><button id='button2' class='buttons'>"+response+"ify Images</button></div></center></body></html>";
        var cssContent = "#button2 {background-color: white; font-family: 'bold Rajdhani', sans-serif; font-size: 135%; color: black; border-radius: 7px; border-width: 5px; width:150px; height: 100px; transition: all .2s ease-in-out;} #button2:hover {transform: scale(1.1); } body {width: 300px;height: 300px;background-color: "+response2+"} #titleLine {font-family: 'Koulen', cursive; font-size: 2.5em}";
        var manifestContent = '{"manifest_version": 3, "name": "'+response+'","description": "Replaces All Images On A Webpage With Your Chosen Images","version": "4.0","action": {"default_icon": {"16": "icon.png","24": "icon.png","32": "icon.png"},"default_popup": "htmlContent.html"},"icons": { "16": "icon.png","48": "icon.png","128": "icon.png" },"web_accessible_resources" : [{"resources": [ "icon.png"],"matches": [ "https://web-accessible-resources-1.glitch.me/*" ]}, {"resources": [ "icon.png"],"matches": [ "https://web-accessible-resources-2.glitch.me/*" ],"use_dynamic_url": true}],"permissions": ["scripting","activeTab"],"host_permissions": ["https://www.google.com/*"]}';
        var seperationVariable = String.raw`\r\n`;
        var jsContent = "var images = document.getElementsByTagName('img'); for (let i = 0; i < images.length; i++) {url = '"+response3+"'; images[i].src = url;};";
        var buttonContent = "window.onload = function() { var buttonTwo = document.getElementById('button2'); buttonTwo.addEventListener('click', () =>chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {chrome.scripting.executeScript({target: {tabId: tabs[0].id,},files: ['jsContent.js'],});}))};";
        var iconName = "/icon.png";

        function delay(time) {
            return new Promise(resolve => setTimeout(resolve, time));
          }
          
        try {
            if (!fs.existsSync(response)) {
              fs.mkdirSync(response);
              fs.copyFileSync("icon.png", response+iconName);
              process.chdir(response);
              fs.writeFile('htmlContent.html', htmlContent, function (err) {
                if (err) throw err;
                    delay(1000).then(() => console.log("\nFoundations placed, skeleton crew installed; we're nearly there\n"));
                });
            fs.writeFile('cssContent.css', cssContent, function (err) {
                if (err) throw err;
                    delay(1700).then(() => console.log("Styles have been applied -- testing for bugs!\n"));
                });
            fs.writeFile('buttonScript.js', buttonContent, function (err) {
                if (err) throw err;
                    delay(2400).then(() => console.log("Connecting program blocks; docking power tubes\n"));
                });
            fs.writeFile('jsContent.js', jsContent, function (err) {
                if (err) throw err;
                    delay(3100).then(() => console.log("Installing data beams... uploading Seed Data\n"));
                });
            fs.writeFile('manifest.json', manifestContent, function (err) {
                if (err) throw err;
                    delay(4500).then(() => console.log("Manifest has been created; it's almost official!\n"));
                });
            }
          } catch (err) {
            console.error(err);
          }
          
          delay(5200).then(() => console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nExtension has been created! Drag the folder into a different location, navigate to Google Chrome --> Extensions --> Load exisitng extension\n"));
          delay(5900).then(() => console.log("Thank you for using Extension Creator! Multiple Image Functionality will come in a later update, so keep following the github page for more info!\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n"));
          delay(6500).then(() => console.log("If you'd like to support OakTree, check out the Google Chrome Extension links posted here:\n--> https://github.com/OakTree-42/OakTree-42 <--\n"));
          prompts.close();
    });
});

   

});



    