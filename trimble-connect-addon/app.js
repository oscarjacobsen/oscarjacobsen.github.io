import * as Extensions from "trimble-connect-project-workspace-api";
import {TrimbleConnectWorkspace} from "./index.js"




/** Instantiate extension .
   *  @param window - Parent window object.
   *  @param callback - Listen the events with args from the parent.
   *  @param timeout - Connect timeout in milliseconds.
   *  @returns TCExtensionAPI - Object with the interaction methods.
*/

const API = await Extensions.connect(
  window.parent,
  (event, args) => {
    switch (event) {
      case "extension.command":
        //"Command executed by the user: args.data"
        break;
      case "extension.accessToken":
        //"Accestoken or status: args.data"
        break;
      case "extension.userSettingsChanged":
        //"User settings changed!"
        break;
      default:
    }
  },
  30000
);


const mainMenuObject = {
    title: "Test extension app",
    icon: "http://oscarjacobsen.no/trimble-connect-addon/favicon.png",
    command: "main_nav_menu_cliked",
    subMenus: [
      {
        title: "Sub menu 1",
        icon: "http://oscarjacobsen.no/trimble-connect-addon/favicon.png",
        command: "submenu_1_clicked",
      },
      {
        title: "Sub menu 2",
        icon: "http://oscarjacobsen.no/trimble-connect-addon/favicon.png",
        command: "submenu_2_clicked",
      },
    ],
  };

// Updating the menu object.
var menu = API.ui.setMenu(mainMenuObject)
// Where <mainMenuObject> is the menu object and ExtensionMainMenu is the object type which you can find it in the documentation.

// Updating the active submenu.
//API.ui.setActiveMenuItem("<submenuCommand>:string");

// Get the current project info
//API.project.getCurrentProject().then((connectProject) => {
    //Current project info: projectInfo.
//});

//Get the current user language info.
//API.user.getUserSettings().then((userSettings) => {
    //Current user language: userSettings.language
//});

//Updating the status message.
//this.API.extension.setStatusMessage("<statusMessage>:string");

//Request for the access token.
//API.extension.getPermission("accesstoken").then((accessToken) => {
    //Current user access token or status: accessToken
//});