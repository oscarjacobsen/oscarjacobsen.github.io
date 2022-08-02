
import {
  AmbientLight,
  AxesHelper,
  DirectionalLight,
  GridHelper,
  PerspectiveCamera,
  MeshLambertMaterial,
  Scene,
  Raycaster,
  Vector2,
  WebGLRenderer,
  MeshBasicMaterial
} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {IFCLoader} from "web-ifc-three/IFCLoader";
import {
  acceleratedRaycast,
  computeBoundsTree,
  disposeBoundsTree
} from 'three-mesh-bvh';
// import { IfcViewerAPI } from 'web-ifc-viewer';

const ifcModels = [];

//Creates the Three.js scene
const scene = new Scene();


//Object to store the size of the viewport
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};


//Creates the camera (point of view of the user)
const aspect = size.width / size.height;
const camera = new PerspectiveCamera(75, aspect);
camera.position.z = 2.4;
camera.position.y = 1.8;
camera.position.x = 2;


//Creates the lights of the scene
//const lightColor = 0xffffff;
const lightColor = 0x404040;


const ambientLight = new AmbientLight(lightColor, 6);
scene.add(ambientLight);

const directionalLight = new DirectionalLight(lightColor, 0);
directionalLight.position.set(2.4, 1.8, 2);
directionalLight.target.position.set(1, 0, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas");
const renderer = new WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//Creates grids and axes in the scene
// const grid = new GridHelper(50, 30);
// scene.add(grid);

//const axes = new AxesHelper();
//axes.material.depthTest = false;
//axes.renderOrder = 1;
//scene.add(axes);

//Creates the orbit controls (to navigate the scene)
const controls = new OrbitControls(camera, threeCanvas);
controls.enableDamping = true;
controls.target.set(-2, 0, 0);

//Animation loop
const animate = () => {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();

//Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});


// Sets up the IFC loading
const ifcLoader = new IFCLoader();
ifcLoader.ifcManager.setWasmPath("../");


// const input = document.getElementById("file-input");
//input.addEventListener(
//  "change",
//  (changed) => {
//    const file = changed.target.files[0];
//    var ifcURL = URL.createObjectURL(file);
//    ifcLoader.load(ifcURL, (ifcModel) => {
//      ifcModels.push(ifcModel);
//      scene.add(ifcModel)});
//  },
//  false
//);

// Sets up optimized picking
ifcLoader.ifcManager.setupThreeMeshBVH(
  computeBoundsTree,
  disposeBoundsTree,
  acceleratedRaycast);


  /////////////////
  // Loading OBJ //
  /////////////////

  function loadMtlObjFile(dirPath, mtlName, objName){

    var mtlLoader = new MTLLoader();

    mtlLoader.setPath(dirPath);
  mtlLoader.load(mtlName, function(materials){
    materials.preload();
    var objLoader = new OBJLoader;
    objLoader.setMaterials(materials);
  objLoader.setPath(dirPath)
  objLoader.load(objName, function(object){
    scene.add(object);
    return object
  })
  });
  };

  const objDir = './src/'
  const mtlName = 'oscar-jacobsen-cv-3d.mtl'
  const objName = 'oscar-jacobsen-cv-3d.obj'

  const objObject = loadMtlObjFile(objDir, mtlName, objName)

  
  ///////////////////
  // Load IFC file //
  //////////////////

  const ifcMat = new MeshLambertMaterial({
    transparent: true,
    opacity: 0.,
    color: 0xff88ff,
    depthTest: false
  })

  function loadIfcFile(ifcURL){
    ifcLoader.load(ifcURL, (ifcModel) => {
      ifcModel.material = ifcMat;
      ifcModels.push(ifcModel);
      scene.add(ifcModel)});
      return ifcModel;
  };
  
  var ifcModel = ""
  ifcModel = loadIfcFile('./oscar-jacobsen-cv-3d.ifc');


  


const raycaster = new Raycaster();
raycaster.firstHitOnly = true;
const mouse = new Vector2();

function cast(event) {

  // Computes the position of the mouse on the screen
  const bounds = threeCanvas.getBoundingClientRect();

  const x1 = event.clientX - bounds.left;
  const x2 = bounds.right - bounds.left;
  mouse.x = (x1 / x2) * 2 - 1;

  const y1 = event.clientY - bounds.top;
  const y2 = bounds.bottom - bounds.top;
  mouse.y = -(y1 / y2) * 2 + 1;

  // Places it on the camera pointing to the mouse
  raycaster.setFromCamera(mouse, camera);

  // Casts a ray
  return raycaster.intersectObjects(ifcModels);
}

const output = document.getElementById("id-output");
output.innerHTML = JSON.stringify({})


function getPset(ifc, modelID, ifc_pset){

var pset = {}

ifc_pset["HasProperties"].forEach(async function(prop) {
    
  var prop_id = prop["value"];
  var ifc_property = await ifc.getItemProperties(modelID, prop_id);
  ifc_property_name = ifc_property["Name"]["value"];
  ifc_property_value = ifc_property["NominalValue"]["value"]

  pset[ifc_property_name] = ifc_property_value

  console.log(pset);

  // output.innerHTML = JSON.stringify(propertyset, null, 2);
  
});
console.log("First got Pset");
console.log(pset);



return pset
}


async function pick(event) {
  const found = cast(event)[0];

  if (found) {
      const index = found.faceIndex;
      const geometry = found.object.geometry;
      const ifc = ifcLoader.ifcManager;
      const id = ifc.getExpressId(geometry, index);
      const modelID = found.object.modelID;

  const psets  = {}

  output.innerHTML = JSON.stringify({})

  var ifc_psets = await ifc.getPropertySets(modelID, id);

  ifc_psets.forEach(async function (ifc_pset, idx, arr){

    var ifc_pset_name = ifc_pset["Name"]["value"];

    const pset = {}

    ifc_pset["HasProperties"].forEach(async function(ifc_prop, idx2, arr2){

      var prop_id = ifc_prop["value"];
      var ifc_property = await ifc.getItemProperties(modelID, prop_id);
      var ifc_property_name = ifc_property["Name"]["value"];
      var ifc_property_value = ifc_property["NominalValue"]["value"]
      
      pset[ifc_property_name] = ifc_property_value

      if (idx2 === arr2.length - 1){

        psets[ifc_pset_name]

        if (idx === arr.length - 1){
          output.innerHTML = await JSON.stringify(await psets, null, 2);
        }

      }
    })

    psets[ifc_pset_name] = pset

    output.innerHTML = await JSON.stringify(await psets, null, 2);

  

      
  })}
}

window.onclick = pick;




// Creates subset material
const mat = new MeshLambertMaterial({
  transparent: true,
  opacity: 0.6,
  color: 0xff88ff,
  depthTest: false
})

const ifc = ifcLoader.ifcManager;
// Reference to the previous selection
let highlightModel = { id: - 1};

function highlight(event, material, model) {
  const found = cast(event)[0];
  if (found) {

      // Gets model ID
      model.id = found.object.modelID;

      // Gets Express ID
      const index = found.faceIndex;
      const geometry = found.object.geometry;
      const id = ifc.getExpressId(geometry, index);

      // Creates subset
      ifcLoader.ifcManager.createSubset({
          modelID: model.id,
          ids: [id],
          material: material,
          scene: scene,
          removePrevious: true
      })
  } else {
      // Remove previous highlight
      ifc.removeSubset(model.id, material);
  }
}

window.onmousemove = (event) => highlight(event, mat, highlightModel);