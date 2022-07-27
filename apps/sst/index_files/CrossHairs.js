import "three"

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var plane = new THREE.Plane();
var planeNormal = new THREE.Vector3();

document.addEventListener("mousemove", onMouseMove, false);

function getPoint(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    planeNormal.copy(camera.position).normalize();
    plane.setFromNormalAndCoplanarPoint(planeNormal, scene.position);
    raycaster.setFromCamera(mouse, camera);
    raycaster.ray.intersectPlane(plane, point);
}

function onMouseMove(event) {
    getPoint(event);
    if (draw.checked) setPoint();
}

class CrossHairs extends THREE.Object3D {

    constructor(camera, domElement) {

        super();