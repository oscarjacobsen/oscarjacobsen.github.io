﻿import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';
import {
    IFCWALLSTANDARDCASE,
    IFCSLAB,
    IFCFURNISHINGELEMENT,
    IFCDOOR,
    IFCWINDOW,
    IFCPLATE,
    IFCMEMBER
} from 'web-ifc';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("./");
    const model = await viewer.IFC.loadIfcUrl(url);
    model.removeFromParent();
    await setupAllCategories();
    await viewer.shadowDropper.renderShadow(model.modelID);
}

const input = document.getElementById("file-input");
input.addEventListener(
    "change",
    (changed) => {
        const file = changed.target.files[0];
        var ifcURL = URL.createObjectURL(file);
        //loadIfc(ifcURL);
        ifcLoader.load(ifcURL, (ifcModel) => {
            ifcModelMesh = ifcModel;
            ifcModels.push(ifcModel);
            scene.add(ifcModel)
            //});
        },
            false
        );

        //loadIfc('../../../IFC/01.ifc');

        window.ondblclick = () => viewer.IFC.selector.pickIfcItem(true);
        window.onmousemove = () => viewer.IFC.selector.prePickIfcItem();
        viewer.clipper.active = true;

        window.onkeydown = (event) => {
            if (event.code === 'KeyP') {
                viewer.clipper.createPlane();
            }
            else if (event.code === 'KeyO') {
                viewer.clipper.deletePlane();
            }
        }

        const scene = viewer.context.getScene();

        // List of categories names
        const categories = {
            IFCWALLSTANDARDCASE,
            IFCSLAB,
            IFCFURNISHINGELEMENT,
            IFCDOOR,
            IFCWINDOW,
            IFCPLATE,
            IFCMEMBER,
        };

        // Gets the name of a category
        function getName(category) {
            const names = Object.keys(categories);
            return names.find(name => categories[name] === category);
        }

        // Gets all the items of a category
        async function getAll(category) {
            return viewer.IFC.loader.ifcManager.getAllItemsOfType(0, category, false);
        }

        // Creates a new subset containing all elements of a category
        async function newSubsetOfType(category) {
            const ids = await getAll(category);
            return viewer.IFC.loader.ifcManager.createSubset({
                modelID: 0,
                scene,
                ids,
                removePrevious: true,
                customID: category.toString(),
            });
        }

        // Stores the created subsets
        const subsets = {};

        async function setupAllCategories() {
            const allCategories = Object.values(categories);
            for (let i = 0; i < allCategories.length; i++) {
                const category = allCategories[i];
                await setupCategory(category);
            }
        }

        // Creates a new subset and configures the checkbox
        async function setupCategory(category) {
            subsets[category] = await newSubsetOfType(category);
            setupCheckBox(category);
        }

        // Sets up the checkbox event to hide / show elements
        function setupCheckBox(category) {
            const name = getName(category);
            const checkBox = document.getElementById(name);
            checkBox.addEventListener('change', (event) => {
                const checked = event.target.checked;
                const subset = subsets[category];
                if (checked) scene.add(subset);
                else subset.removeFromParent();
            });
        }


