import * as Extensions from "trimble-connect-project-workspace-api";


/** Instantiate extension .
   *  @param window - Parent window object.
   *  @param callback - Listen the events with args from the parent.
   *  @param timeout - Connect timeout in milliseconds.
   *  @returns TCExtensionAPI - Object with the interaction methods.
*/
this.API = await Extensions.connect(
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


// Updating the menu object.
this.API.ui.setMenu("<mainMenuObject>:ExtensionMainMenu")
// Where <mainMenuObject> is the menu object and ExtensionMainMenu is the object type which you can find it in the documentation.

// Updating the active submenu.
this.API.ui.setActiveMenuItem("<submenuCommand>:string");

// Get the current project info
this.API.project.getCurrentProject().then((connectProject) => {
    //Current project info: projectInfo.
});

//Get the current user language info.
this.API.user.getUserSettings().then((userSettings) => {
    //Current user language: userSettings.language
});

//Updating the status message.
this.API.extension.setStatusMessage("<statusMessage>:string");

//Request for the access token.
this.API.extension.getPermission("accesstoken").then((accessToken) => {
    //Current user access token or status: accessToken
});