import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder, FreeCamera, WebXRExperienceHelper,WebXRFeaturesManager,WebXRPlaneDetector,WebXRAnchorSystem, Color3 } from "@babylonjs/core";
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
            light1.intensity = 100;

            var sphere: Mesh = Mesh.CreateSphere("spere1",16,2,scene);
            
            sphere.position.y = 2;
            
            
            
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
        
   
        
    



