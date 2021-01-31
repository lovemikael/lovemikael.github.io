import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder, FreeCamera, WebXRExperienceHelper,WebXRFeaturesManager,WebXRPlaneDetector,WebXRAnchorSystem, Color3, HingeJoint, StandardMaterial, SceneLoader } from "@babylonjs/core";
import {HelloWorld} from "./classes/HelloWorld";
import { version } from "webpack";
class App{
    constructor(){

        var createScene = async function name() {
            var scene = new Scene(engine);
            var camera: ArcRotateCamera = new ArcRotateCamera("camera1", 0,Math.PI/3,10,Vector3.Zero(), scene);
            camera.setTarget(new Vector3(0,2,5));
            camera.attachControl(canvas, true);

            var light1: HemisphericLight = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
            light1.intensity = 0.5;

            
            // SceneLoader.Append("https://raw.githubusercontent.com/lovemikael/Multiplayer/main/","adamHead.gltf",scene,function () {
            //     console.log("Mesh loaded.");
            // });
            var sphere: Mesh = Mesh.CreateSphere("spere1",16,0.5,scene);
            var box: Mesh = Mesh.CreateBox("box",0.5,scene);
            box.position.y = 1;
            box.position.z = 1;
            
            sphere.position.y = 1.5;
            sphere.position.z = 1.5;
            var boxMaterial = new StandardMaterial("boxmaterial",scene);
            boxMaterial.diffuseColor = Color3.Red();
            sphere.material = boxMaterial;

            
            const xr = await scene.createDefaultXRExperienceAsync({
                uiOptions: {sessionMode: "immersive-ar"}
            });

            
            
            return scene;
        }

        var canvas = <HTMLCanvasElement>document.getElementById('renderCanvas');
        var engine = new Engine(canvas, true);
        
        createScene().then(scene => {
            engine.runRenderLoop(() => scene.render());
        })
    } 
}

new App();
        
   
        
    



