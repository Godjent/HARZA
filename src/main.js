// Import_Modules
// Core Three.js Library
import * as THREE from 'three';

// Loaders
import { GLTFLoader, ShaderPass } from 'three/examples/jsm/Addons.js';
import { DRACOLoader } from "three/examples/jsm/Addons.js";

// GUI Tools
import GUI from "lil-gui";

// Post-Processing
import { EffectComposer } from "three/examples/jsm/Addons.js";
import { RenderPass } from "three/examples/jsm/Addons.js";
import { UnrealBloomPass } from "three/examples/jsm/Addons.js";
import { OutputPass } from "three/examples/jsm/Addons.js";
import { FilmPass } from "three/examples/jsm/Addons.js";
import { TAARenderPass } from 'three/examples/jsm/Addons.js';
import { SSAOShader } from 'three/examples/jsm/shaders/SSAOShader.js';

// Special Effects
import { Lensflare } from "three/examples/jsm/Addons.js";
import { LensflareElement } from "three/examples/jsm/Addons.js";

// Animation
import { gsap } from "gsap/gsap-core";

// Controls
import { OrbitControls } from "three/examples/jsm/Addons.js";

// Performance Monitoring
import Stats from "three/examples/jsm/libs/stats.module.js";


//Import_Files
import RCS_fShader from "/resources/materials/FX/RCS_fShader.glsl"
import RCS_vShader from "/resources/materials/FX/RCS_vShader.glsl"
import C_vShader from "/resources/materials/Cone_VShader.glsl"
import C_fShader from "/resources/materials/Cone_FShader.glsl"
import P_vShader from "/resources/materials/P_VShader.glsl"
import P_fShader from "/resources/materials/P_FShader.glsl"
import A_vShader from "/resources/materials/A_VShader.glsl"
import A_fShader from "/resources/materials/A_FShader.glsl"
import BG_FShader from "/resources/materials/BG_Shader/BG_FShader.glsl"
import BG_VShader from "/resources/materials/BG_Shader/BG_VShader.glsl"
import PostProcessShader from "/resources/materials/PostProcess_Shader/PostProcess.glsl"
import BufferAndAO from "/resources/materials/PostProcess_Shader/BufferAndAO.glsl"

//Import classes
import SolarPanelManager from "./solarPanelManager.js"
import SatelliteController from './satelliteController.js';
import { clamp } from 'three/src/math/MathUtils.js';






//Debug
const debugObject = {}
const gui = new GUI({
    width: 400
})

const stats = new Stats()
stats.showPanel(0)
document.body.appendChild(stats.dom)


//GlobalVariables
let StartEvent = 0
let EngineSwitch = 0
let ShipMovment = 0
let SpMeshes = {}
let CPUMeshes = null
let EngineMeshes = {}
let Driver_BG = null
let EmissionDriver = 0
let EmissionDriver_A = 0
let Model = null
let Animations = null
let Sequence = null
let Anim = null
let action;
const cUniforms = {
    uTime: {
        value: 0
    },
    driver: {
        value: 0
    },
    driver_1: {
        value: 0
    },
    driver_2: {
        value: 0
    },
    E_Driver: {
        value: 0
    },
    E_Driver_Soplo: {
        value: 0
    },
    E_Switch: {
        value: 0
    },
    click_driver: {
        value: 0
    },
    click_driver_eng: {
        value: 0
    },
    BG_driver: {
        value: 0.
    },
    Energy: {
        value: 0
    },
    Fuel: {
        value: 75
    },
    EnginePower: {
        value: 0
    },
    ModelScale: {
        value: 0.
    }
}

const aUniforms = {
    uColorTransition: {value: 1.},
    uPixelated: { value: false},
    uPixels: { value: 1.8},
    uLowres: {value: false},
    uShades: { value: 96.},
    uDistort: { value: false},
    uDistortValue: { value: 15.},
    uBW: { value: false},
    uDistortTransition: { value: 0.}
}


//Distortion
const CC = {
    k_Var: { value: -.09 },
    k_CubeValue: { value: -.15 },
    a_Offset: { value: 0.008 }
}
const cDebugEmis = {
    min: { value: -0.032 },
    max: { value: 1.05 }
}


//Functions
function lerp(start, end, t) {
    return start * (1 - t) + end * t
}
function distVec2(v1, v2) {
    var dx = v1.x - v2.x;
    var dy = v1.y - v2.y;

    return Math.sqrt(dx * dx + dy * dy);
}


//Canvas
const canvas = document.querySelector('canvas.webgl')


//Colors/
const red = new THREE.Color().setRGB(1, 1., 1.);
const pParams = {}
pParams.atmoDay = '#84aad2'
pParams.atmoNight = '#d89b55'

gui.addColor(pParams, 'atmoDay').onChange(() => {
    planetMaterial.uniforms.u_atmoDay.value.set(pParams.atmoDay)
    atmoMaterial.uniforms.u_atmoDay.value.set(pParams.atmoDay)
}
)
gui.addColor(pParams, 'atmoNight').onChange(() => {
    planetMaterial.uniforms.u_atmoNight.value.set(pParams.atmoNight)
    atmoMaterial.uniforms.u_atmoNight.value.set(pParams.atmoNight)
}
)

//Scene
const scene = new THREE.Scene()


//AmbientLight
const Alight = new THREE.AmbientLight(0xff9e9e, .0)


//MainLight
const Dlight = new THREE.DirectionalLight(red, 4)
Dlight.castShadow = true
Dlight.shadow.mapSize.set(1024, 1024)
Dlight.shadow.camera.near = -1500
Dlight.shadow.camera.far = 5
Dlight.shadow.bias = -0.0007
gui.add(Dlight, 'intensity').min(0).max(50).step(0.01)
scene.add(Dlight.target)


//H_light
const hLight = new THREE.HemisphereLight(0xff9e9e, 0x000000, .07)
hLight.position.set(0, 0, -1)
scene.add(hLight)


//Textures
const tLoader = new THREE.TextureLoader()
const pMap = tLoader.load('/resources/textures/Planet/Mars_Color.jpg')
const pAO = tLoader.load('/resources/textures/Planet/Mars_AO.jpg')
const pNormal = tLoader.load('/resources/textures/Planet/Mars_Normal.jpg')
const coneNoise = tLoader.load('/resources/textures/DirNoise.png')
coneNoise.wrapS = THREE.RepeatWrapping
coneNoise.wrapT = THREE.RepeatWrapping
coneNoise.colorSpace = THREE.LinearSRGBColorSpace
pMap.anisotropy = 4
const pMap2 = tLoader.load('8k_stars.png')
pMap.colorSpace = THREE.SRGBColorSpace


//Geo_Planet
let pRotation = .25;
let pPosition = new THREE.Vector3(0, 0, -1300);


//PlanetMat
const SphereGeo = new THREE.SphereGeometry(525, 64, 64)

const planetMaterial = new THREE.ShaderMaterial({
    vertexShader: P_vShader,
    fragmentShader: P_fShader,
    uniforms: {
        u_planetMap: new THREE.Uniform(pMap),
        uTextureTest: new THREE.Uniform(pMap2),
        u_pNormal: new THREE.Uniform(pNormal),
        u_pAO: new THREE.Uniform(pAO),
        u_sDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        u_atmoDay: new THREE.Uniform(new THREE.Color(pParams.atmoDay)),
        u_atmoNight: new THREE.Uniform(new THREE.Color(pParams.atmoNight)),
    }
})
const Planet = new THREE.Mesh(SphereGeo, planetMaterial)
Planet.castShadow = true
Planet.position.copy(pPosition)
Planet.rotateOnAxis(new THREE.Vector3(0, 0, 1), pRotation)
scene.add(Planet)


//Atmosphere
const atmoMaterial = new THREE.ShaderMaterial({
    vertexShader: A_vShader,
    fragmentShader: A_fShader,
    uniforms: {
        u_sDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1)),
        u_atmoDay: new THREE.Uniform(new THREE.Color(pParams.atmoDay)),
        u_atmoNight: new THREE.Uniform(new THREE.Color(pParams.atmoNight))
    },
    side: THREE.BackSide,
    //side: THREE.DoubleSide,
    transparent: true
})
const M_atmo = new THREE.Mesh(SphereGeo, atmoMaterial)
let atmoRes = 1.04
M_atmo.scale.set(atmoRes, atmoRes, atmoRes)
scene.add(M_atmo)
M_atmo.position.copy(pPosition)
M_atmo.rotateOnAxis(new THREE.Vector3(0, 0, 1), pRotation)


//BG_Planet
const BG_Plane = new THREE.PlaneGeometry(5, 5, 1, 1)
const BG_Material = new THREE.ShaderMaterial({
    vertexShader: BG_VShader,
    fragmentShader: BG_FShader,
    uniforms: {
        u_driver: {
            value: 0
        },
        u_sDirection: new THREE.Uniform(new THREE.Vector3(0, 0, 1))
    },
    transparent: true

})
const BG_Mesh = new THREE.Mesh(BG_Plane, BG_Material)
BG_Mesh.position.set(0, 0, -1400)
BG_Mesh.scale.set(550, 550, 550)
scene.add(BG_Mesh)


//Sun
const sSpherical = new THREE.Spherical(1, 0.402123859659494, 3.141592653589793)
const sDirection = new THREE.Vector3()


//DebugSun
const dSun = new THREE.Mesh(new THREE.IcosahedronGeometry(.1, 2), new THREE.MeshBasicMaterial())
scene.add(dSun)


//Flares 
const Flare = tLoader.load('/resources/textures/Flare.jpg')
Flare.transparent = true
Flare.colorSpace = THREE.SRGBColorSpace
Flare.toneMappingExposure = .1
const lensflare = new Lensflare();
lensflare.addElement(new LensflareElement(Flare, 1024, 0, new THREE.Color().setRGB(1., 1., 1.)));


//UpdateSun
const uSun = () => {
    sDirection.setFromSpherical(sSpherical)
    dSun.position.copy(sDirection).multiplyScalar(1255)
    Dlight.position.copy(sDirection)
    dSun.scale.set(25, 25, 25)
    planetMaterial.uniforms.u_sDirection.value.copy(sDirection)
    atmoMaterial.uniforms.u_sDirection.value.copy(sDirection)
    lensflare.position.copy(sDirection).multiplyScalar(1255)
}
uSun()

gui.add(sSpherical, 'phi').min(0).max(Math.PI).onChange(uSun)
gui.add(sSpherical, 'theta').min(-Math.PI).max(Math.PI).onChange(uSun)


//MatsSputnik
debugObject.Color1 = '#0f4bff'
gui.addColor(debugObject, 'Color1').onChange(() => {
    Cone.uniforms.C1.value.set(debugObject.Color1)
}
)

debugObject.Color2 = '#ffe5e5'
gui.addColor(debugObject, 'Color2').onChange(() => {
    Cone.uniforms.C2.value.set(debugObject.Color2)
}
)

const Cone = new THREE.ShaderMaterial({
    uniforms: {
        DirNoise: { value: coneNoise },
        u_time: {
            value: 0
        },
        u_sMovment: {
            value: 0
        },
        C1: {
            value: new THREE.Color(0x0040ff)
        },
        C2: {
            value: new THREE.Color(0x69a7ce)
        },
        MinV: { value: 0 },
        MaxV: { value: 1 }
    },

    vertexShader: C_vShader,
    fragmentShader: C_fShader,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
})

const rcsFX = new THREE.ShaderMaterial(
    {
        uniforms:
        {
            noise: { value: coneNoise },
            u_time: {
                value: 0
            },
            animDriver: {
                value: 0
            },
        },
        vertexShader: RCS_vShader,
        fragmentShader: RCS_fShader,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
    }
)

//DebugPlane
const Plane_Debug_Shader = new THREE.PlaneGeometry(50, 50, 1, 1)
const Plane_Debug_Mesh = new THREE.Mesh(Plane_Debug_Shader, rcsFX)
Plane_Debug_Mesh.position.set(0, 0, -24)
console.log(Plane_Debug_Mesh)


//Primitives
const geometry = new THREE.SphereGeometry(1.5, 32, 32)
const material = new THREE.MeshBasicMaterial({
    color: red
})
const mesh = new THREE.Mesh(geometry, material)
Dlight.add(lensflare)
scene.add(Alight)
scene.add(Dlight)


///ScenesLoader
const dLoader = new DRACOLoader()
dLoader.setDecoderConfig({
    type: 'js'
});
dLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

let solarPanelManager;
let satelliteController;
let rcsIndex;
let rcsLeft = []
let thrustich = 0;
let enginePower;
let rcsArray = []
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dLoader)
gltfLoader.load('/resources/mesh/draco/Sputnik_mesh_3.glb', (gltf) => {

    Model = gltf.scene

    SpMeshes = [Model.children[2], Model.children[3]]
    EngineMeshes = Model.children[5]
    CPUMeshes = Model.children[4]

    gltf.scene.traverse((child) => {
        child.castShadow = true
        child.receiveShadow = true
    }
    )

    Model.children[1].castShadow = false
    Model.children[1].receiveShadow = false

    gltf.scene.setRotationFromAxisAngle(new THREE.Vector3(1, 0, 0), -.25)
    gltf.scene.children[1].material = Cone


    //Engine        
    const EngineMat = EngineMeshes.material.emissiveMap
    EngineMeshes.material.emissiveIntensity = EmissionDriver

    const bBase = Model.children[0].children[1];
    var Lolich = bBase.material.emissiveIntensity
    Lolich = 0


    //ModMaterial
    const ShaderEdit_Engine = Model.children[5].material
    ShaderEdit_Engine.onBeforeCompile = (shader) => {
        shader.uniforms.Switch = cUniforms.E_Switch
        shader.uniforms.e_driver = cUniforms.E_Driver_Soplo
        shader.uniforms.click_driver = cUniforms.click_driver_eng
        shader.uniforms.uTime = cUniforms.uTime
        shader.uniforms.driver = cUniforms.driver_1
        shader.vertexShader = shader.vertexShader.replace('#include <common>', `#include <common>
            uniform float uTime;
            uniform float e_driver;
            uniform float Switch;
            uniform float driver;
            uniform float click_driver;
            varying vec3 vModelPosition;

            `)
        shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `
             vModelPosition = vec3(position);
             #include <begin_vertex>
             `);
        shader.fragmentShader = shader.fragmentShader.replace('#include <common>', `#include <common>
            uniform float uTime;
            uniform float e_driver;
            uniform float Switch;
            uniform float driver;
            uniform float click_driver;
            varying vec3 vModelPosition;


            vec3 hash( vec3 p ) // replace this by something better
            {
	            p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
                dot(p,vec3(269.5,183.3,246.1)),
                dot(p,vec3(113.5,271.9,124.6)));
	            return -1.0 + 2.0*fract(sin(p)*43758.5453123);
            }

            float noise( in vec3 p )
            {
                vec3 i = floor( p );
                vec3 f = fract( p );
	
	            vec3 u = f*f*(3.0-2.0*f);

                return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ), 
                        dot( hash( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),
                    mix( dot( hash( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ), 
                        dot( hash( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
                    mix( mix( dot( hash( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ), 
                        dot( hash( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),
                    mix( dot( hash( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ), 
                        dot( hash( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
            }`)
        shader.fragmentShader = shader.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>

            vec3 C1 = vec3(.057, .0335, .0243);
            vec3 C2 = vec3(.224, .0137, .0108);


            float TimeBrightness = mix(
            0.3, 
            1., 
            clamp(sin(uTime * 2.) + cos(uTime * 3.), 0., 1.));


            vec4 emissiveColor1 = vec4(0.74, 0.14, 0.0, 1.); //orange
            vec3 viewDir = normalize(vModelPosition - vViewPosition);
            float fresnel = dot(viewDir, normal);
            fresnel = pow(fresnel, 2.0);
            fresnel = 1. - fresnel;
            fresnel = smoothstep(.1, 1.5, fresnel);

            //Noise
            float nTile = 25.;
            float Noise_Distort = noise(vModelPosition * nTile + vec3(uTime, 0., 0.));
            Noise_Distort = pow(Noise_Distort, 2.);
            Noise_Distort *= .02;

            float Noise_Grains = noise(vModelPosition * 450. + vec3(0., 0., uTime * 5.));
            Noise_Grains = pow(Noise_Grains, 2.7);
            Noise_Grains = clamp(Noise_Grains, 0., 1.);



            //CellsPattern
            float pY = pow(abs(fract((vModelPosition.x + Noise_Distort) * 15. + uTime * .25)), 50.);
            float cells = pY;
            cells *= pow((1. - fresnel), 28.);
            cells *= Noise_Grains;
            cells *= TimeBrightness;
            //StripesPattern
            float stripes = sin((vModelPosition.y * 355.));
            stripes = clamp(stripes, 0., 1.);
            stripes *= 0.01;
            stripes *= TimeBrightness;


            //Heat
            float heatMask = vModelPosition.x + 1.5;
            heatMask = smoothstep(.17, 0., heatMask);
            heatMask = smoothstep( 0., 2.5, heatMask);


            //Click_FX
            float Click_FX = clamp(sin(click_driver * 25.), 0. , 1.);


            //Colors
            vec3 CellsColor = cells * vec3(0.74, 0.14, 0.0);
            vec3 FresnelColor = fresnel * vec3(0.64, 0.1, 0.05);
            vec3 StripesColor = stripes * vec3(.5,.5,1.);
            vec3 heatColor = heatMask * vec3(0.74, 0.14, 0.0) * (e_driver / 4.);
            vec3 NGrainsColor = mix(C1, C2, Noise_Grains) * .11;
            vec3 bgColor = vec3(0.74, 0.14, 0.0) * .05; 
            vec3 Click_Color = Click_FX * bgColor * 35.;
            
            vec3 FxColor = ((CellsColor + StripesColor) * 4. + (NGrainsColor)) + bgColor;
            FxColor = max(FxColor, FresnelColor) * driver;
            FxColor = mix(FxColor, FxColor + Click_Color, click_driver );
            vec3 Color = mix(FxColor, FxColor + heatColor, Switch);
            //Color = vec3(NGrainsColor);
            
            
        //     totalEmissiveRadiance = emissiveColor1.rgb;
        //     totalEmissiveRadiance *= (fresnel + stripes);
        //    // totalEmissiveRadiance *= (cells);
        //     totalEmissiveRadiance = Color;
            totalEmissiveRadiance = Color;
            `)
    }
    const ShaderEdit_CPU = Model.children[4].material
    ShaderEdit_CPU.onBeforeCompile = (shader) => {
        shader.uniforms.uTime = cUniforms.uTime
        shader.uniforms.driver = cUniforms.driver_2
        shader.vertexShader = shader.vertexShader.replace('#include <common>', `#include <common>
            uniform float uTime;
            uniform float driver;
            varying vec3 vModelPosition;

            `)
        shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `
             vModelPosition = vec3(position);
             #include <begin_vertex>
             `);
        shader.fragmentShader = shader.fragmentShader.replace('#include <common>', `#include <common>
            uniform float uTime;
            uniform float driver;
            varying vec3 vModelPosition;


            vec3 hash( vec3 p ) // replace this by something better
            {
	            p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
                dot(p,vec3(269.5,183.3,246.1)),
                dot(p,vec3(113.5,271.9,124.6)));
	            return -1.0 + 2.0*fract(sin(p)*43758.5453123);
}

            float noise( in vec3 p )
            {
                vec3 i = floor( p );
                vec3 f = fract( p );
	            vec3 u = f*f*(3.0-2.0*f);
                return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ), 
                        dot( hash( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),
                    mix( dot( hash( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ), 
                        dot( hash( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
                    mix( mix( dot( hash( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ), 
                        dot( hash( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),
                    mix( dot( hash( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ), 
                        dot( hash( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
}

            `)
        shader.fragmentShader = shader.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>

            vec3 C1 = vec3(.057, .0335, .0243);
            vec3 C2 = vec3(.224, .0137, .0108);


            float TimeBrightness = mix(
            0.3, 
            1., 
            clamp(sin(uTime * 2.) + cos(uTime * 3.), 0., 1.));


            vec4 emissiveColor1 = vec4(0.74, 0.14, 0.0, 1.); //orange
            vec3 viewDir = normalize(vModelPosition - vViewPosition);
            float fresnel = dot(viewDir, normal);
            fresnel = pow(fresnel, 2.0);
            fresnel = 1. - fresnel;
            fresnel = smoothstep(.1, 1.5, fresnel);

            //Noise
            float nTile = 25.;
            float Noise_Distort = noise(vModelPosition * nTile + vec3(uTime, 0., 0.));
            Noise_Distort = pow(Noise_Distort, 2.);
            Noise_Distort *= .02;

            float Noise_Grains = noise(vModelPosition * 450. + vec3(0., 0., uTime * 5.));
            Noise_Grains = pow(Noise_Grains, 2.7);
            Noise_Grains = clamp(Noise_Grains, 0., 1.);



            //CellsPattern
            float pY = pow(abs(fract((vModelPosition.x + Noise_Distort) * 15. + uTime * .25)), 50.);
            float cells = pY;
            cells *= pow((1. - fresnel), 28.);
            cells *= Noise_Grains;
            cells *= TimeBrightness;
            //StripesPattern
            float stripes = sin((vModelPosition.y * 355.));
            stripes = clamp(stripes, 0., 1.);
            stripes *= 0.01;
            stripes *= TimeBrightness;


            //Colors
            vec3 CellsColor = cells * vec3(0.74, 0.14, 0.0);
            vec3 FresnelColor = fresnel * vec3(0.64, 0.1, 0.05);
            vec3 StripesColor = stripes * vec3(.5,.5,1.);
            vec3 NGrainsColor = mix(C1, C2, Noise_Grains) * .11;
            vec3 bgColor = vec3(0.74, 0.14, 0.0) * .05; 
            
            vec3 Color = (CellsColor + StripesColor) * 4. + (NGrainsColor);
            Color = max(Color, FresnelColor);
            //Color = vec3(NGrainsColor);
            
        
            totalEmissiveRadiance = emissiveColor1.rgb;
           totalEmissiveRadiance *= (fresnel + stripes);
           // totalEmissiveRadiance *= (cells);
            totalEmissiveRadiance = Color + bgColor;
            totalEmissiveRadiance *= driver;
            `)
    }
    const ShaderEdit_Spanels = Model.children[2].children[0].material
    ShaderEdit_Spanels.onBeforeCompile = (shader) => {
        shader.uniforms.uTime = cUniforms.uTime
        shader.uniforms.click_driver = cUniforms.click_driver
        shader.uniforms.driver = cUniforms.driver
        shader.vertexShader = shader.vertexShader.replace('#include <common>', `#include <common>
            uniform float uTime;
            uniform float driver;
            uniform float click_driver;
            varying vec3 vModelPosition;

            `)
        shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `
             vModelPosition = vec3(position);
             #include <begin_vertex>
             `);
        shader.fragmentShader = shader.fragmentShader.replace('#include <common>', `#include <common>
            uniform float uTime;
            uniform float driver;
            uniform float click_driver;
            varying vec3 vModelPosition;
            vec3 hash( vec3 p ) // replace this by something better
            {
	        p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
            dot(p,vec3(269.5,183.3,246.1)),
            dot(p,vec3(113.5,271.9,124.6)));
	        return -1.0 + 2.0*fract(sin(p)*43758.5453123);
            }

            float noise( in vec3 p )
            {
                vec3 i = floor( p );
                vec3 f = fract( p );
	            vec3 u = f*f*(3.0-2.0*f);
            return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ), 
                        dot( hash( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),
                    mix( dot( hash( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ), 
                        dot( hash( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
                    mix( mix( dot( hash( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ), 
                        dot( hash( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),
                    mix( dot( hash( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ), 
                        dot( hash( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
}`)
        shader.fragmentShader = shader.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>

            vec3 C1 = vec3(.057, .0335, .0243);
            vec3 C2 = vec3(.224, .0137, .0108);


            float TimeBrightness = mix(
            0.3, 
            1., 
            clamp(sin(uTime * 2.) + cos(uTime * 3.), 0., 1.));


            vec4 emissiveColor1 = vec4(0.74, 0.14, 0.0, 1.); //orange
            vec3 viewDir = normalize(vModelPosition - vViewPosition);
            float fresnel = dot(viewDir, normal);
            fresnel = pow(fresnel, 2.0);
            fresnel = 1. - fresnel;
            fresnel = smoothstep(.1, 1.5, fresnel);

            //Noise
            float nTile = 25.;
            float Noise_Distort = noise(vModelPosition * nTile + vec3(uTime, 0., 0.));
            Noise_Distort = pow(Noise_Distort, 2.);
            Noise_Distort *= .02;

            float Noise_Grains = noise(vModelPosition * 450. + vec3(0., 0., uTime * 5.));
            Noise_Grains = pow(Noise_Grains, 2.7);
            Noise_Grains = clamp(Noise_Grains, 0., 1.);



            //CellsPattern
            float pY = pow(abs(fract((vModelPosition.y + Noise_Distort) * 15. + uTime * .25)), 50.);
            float cells = pY;
            cells *= pow((1. - fresnel), 28.);
            cells *= Noise_Grains;
            cells *= TimeBrightness;
            //StripesPattern
            float stripes = sin((vModelPosition.y * 355.));
            stripes = clamp(stripes, 0., 1.);
            stripes *= 0.01;
            stripes *= TimeBrightness;


            //Click_FX
            float Click_FX = clamp(sin(click_driver * 25.), 0. , 1.);

            //Colors
            vec3 CellsColor = cells * vec3(0.74, 0.14, 0.0);
            vec3 FresnelColor = fresnel * vec3(0.64, 0.1, 0.05);
            vec3 StripesColor = stripes * vec3(.5,.5,1.);
            vec3 NGrainsColor = mix(C1, C2, Noise_Grains) * .11;
            vec3 bgColor = vec3(0.74, 0.14, 0.0) * .05; 
            vec3 FX_Color = Click_FX * bgColor * 35.;
            
            vec3 Color = (CellsColor + StripesColor) * 4. + (NGrainsColor);
            Color = max(Color, FresnelColor);
            Color = mix(Color, Color + FX_Color, click_driver);
            //Color = vec3(NGrainsColor);
            
        
            totalEmissiveRadiance = emissiveColor1.rgb;
           totalEmissiveRadiance *= (fresnel + stripes);
           // totalEmissiveRadiance *= (cells);
            totalEmissiveRadiance = Color + bgColor;
            totalEmissiveRadiance *= driver;
            `)
    }


    console.log(Model)

    //RCS_VFX_SORT
    //Назначаю инстанс материала для всех RCS мешиков
    //и создаю массив с двигателями
    function RCS_VFX(mesh, mat, word, array) {
        for(let i = 0; i < mesh.children.length; i++)
        {
            if(mesh.children[i].name.includes(word))
            {
                mesh.children[i].material = mat.clone()
                array.push(mesh.children[i])
            }
        }
    }
    RCS_VFX(Model, rcsFX, 'RCS', rcsArray)

    //Функция для активации RCS
    function rcsStarter(meshes, check, duration) {
        for (let i = 0; i < meshes.length; i++) {
        if (check == true) {
            gsap.to(meshes[i].material.uniforms.animDriver, {
                duration: duration,
                'value': 1
            })
        }
        else {
            gsap.to(meshes[i].material.uniforms.animDriver, {
                duration: duration,
                'value': 0
            })
        }}
    }

    //Массивы с группами RCS двигателей
    let rcsQ = [rcsArray[8], rcsArray[9], rcsArray[10], rcsArray[11]]
    let rcsE = [rcsArray[4], rcsArray[5], rcsArray[6], rcsArray[7]]
    let rcsNoseUp = [rcsArray[2], rcsArray[1]]
    let rcsNoseDown = [rcsArray[0], rcsArray[3]]
    let rcsLeft = [rcsArray[4], rcsArray[8], rcsArray[11], rcsArray[7]]
    let rcsRight = [rcsArray[10], rcsArray[6], rcsArray[5], rcsArray[9]]
    let rcsUp = [rcsArray[2], rcsArray[3]]
    let rcsDown = [rcsArray[0], rcsArray[1]]
    let rcsFullLeft = [rcsArray[9], rcsArray[8], rcsArray[4], rcsArray[5]]
    let rcsFullRight = [rcsArray[6], rcsArray[7], rcsArray[10], rcsArray[11]]


    //Ициализация классов
    Animations = gltf.animations
    solarPanelManager = new SolarPanelManager(Model, Animations)
    satelliteController = new SatelliteController(Model, Camera, scene)


    //Логика включения двигателей и захват значения тяги
    let drtn = .01
    satelliteController.addEventListener('rcsIndexChange', (event) => {
       
        switch(event.value){
        case 1:
            rcsStarter(rcsE, true, drtn)
            break;
        case 2:
            rcsStarter(rcsQ, true, drtn)
            break;
        case 3:
            rcsStarter(rcsNoseUp, true, drtn)
            break;
        case 4:
            rcsStarter(rcsNoseDown, true, drtn)
            break;
        case 5:
            rcsStarter(rcsLeft, true, drtn)
            break;
        case 6:
            rcsStarter(rcsRight, true, drtn)
            break;
        case 7:
            rcsStarter(rcsUp, true, drtn)
            break;
        case 8:
            rcsStarter(rcsDown, true, drtn)
            break;
        case 9:
            rcsStarter(rcsFullLeft, true, drtn)
            break;
        case 10:
            rcsStarter(rcsFullRight, true, drtn)
            break;
        case 0:
            rcsStarter(rcsArray, false, drtn)
            break;
        }
    });
    satelliteController.addEventListener('thrustChange', (event) => {
        thrustich = event.value
    });

    console.log(Model)
    scene.add(Model)
}
)


//Raycaster
const Raycaster = new THREE.Raycaster()
const rOrigin = new THREE.Vector3()
const rDirection = new THREE.Vector3()
rDirection.normalize()

Raycaster.set(rOrigin, rDirection)




//Camera&Sizes
const dpRatio = Math.min(window.devicePixelRatio, 2)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const Camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
Camera.position.z = 3
Camera.position.z = 180
scene.add(Camera)


//Controls&SatelliteControl
const Orbit = new OrbitControls(Camera, canvas)
Orbit.enableDamping = true
Orbit.maxPolarAngle = Math.PI / 1.4


//Render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: false
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(dpRatio)
renderer.toneMapping = THREE.CineonToneMapping
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMappingExposure = 1.85
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
console.log('Pixel ratio is' + ' ' + renderer.getPixelRatio())

//PostProcess
const Composer = new EffectComposer(renderer)
Composer.setSize(sizes.width, sizes.height)
Composer.setPixelRatio(dpRatio)

const renderPass = new RenderPass(scene, Camera)
Composer.addPass(renderPass)

const TAA = new TAARenderPass(scene, Camera)
TAA.sampleLevel = 2
TAA.unbiased = true
Composer.addPass(TAA)


//BloomShit&Composer
const ubp = new UnrealBloomPass()
Composer.addPass(ubp)
ubp.strength = .1
ubp.radius = .3
ubp.threshold = 0


const F_Effect = new FilmPass(
    .3,   // intensity
    false,  // grayscale
)
Composer.addPass(F_Effect)



const renderTarget = new THREE.WebGLRenderTarget(sizes.width, sizes.height, {
    depthBuffer: true,
    depthTexture: new THREE.DepthTexture(),
    format: THREE.RGBFormat
});

renderTarget.depthTexture.magFilter = THREE.NearestFilter
renderTarget.depthTexture.minFilter = THREE.NearestFilter
renderTarget.depthTexture.type = THREE.UnsignedIntType
renderTarget.depthTexture.format = THREE.DepthFormat;

console.log(renderTarget.depthTexture)

const PostProcShader = {
    uniforms: {
        tDiffuse: { value: null },
        tNoise:  new THREE.Uniform(coneNoise),
        u_time: {value: 1.0},
        u_resolution: new THREE.Uniform(new THREE.Vector2()),
        uPixelated: {value: true},
        uPixels: { value: 2.5},
        uLowres: {value: true},
        uShades: { value: 192.},
        uDistort: { value: true},
        uDistortValue: { value: 15.},
        uBW: { value: true},
        uColorTransition: { value: 1.},
        uDistortTransition: { value: 1.},
        uDepth: new THREE.Uniform(renderTarget.depthTexture),
        uCameraPlanes: new THREE.Vector2(2000, .1)
    },
    vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 Position;


        void main()
        {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix 
            * vec4(position, 1.0);
            Position = gl_Position.rgb;

            vUv = uv;

            //vFragDepth = 1.0 + gl_Position.w;
        }
    `,
    fragmentShader: PostProcessShader
}


const tintPass = new ShaderPass(PostProcShader)
tintPass.needsUpdate = true;
Composer.addPass(tintPass)

function pProcessUpdate(){

    Composer.passes[4].uniforms.uPixelated.value = aUniforms.uPixelated.value

    Composer.passes[4].uniforms.uPixels.value = aUniforms.uPixels.value

    Composer.passes[4].uniforms.uLowres.value = aUniforms.uLowres.value

    Composer.passes[4].uniforms.uShades.value = aUniforms.uShades.value

    Composer.passes[4].uniforms.uBW.value = aUniforms.uBW.value

    Composer.passes[4].uniforms.uDistort.value = aUniforms.uDistort.value

    Composer.passes[4].uniforms.uDistortValue.value = aUniforms.uDistortValue.value

    Composer.passes[4].uniforms.uColorTransition.value = aUniforms.uColorTransition.value

    Composer.passes[4].uniforms.uDistortTransition.value = aUniforms.uDistortTransition.value

    Composer.passes[4].uniforms.u_resolution.value = new THREE.Vector2(renderer.domElement.height, renderer.domElement.width)

    Composer.passes[4].uniforms.uCameraPlanes.value = new THREE.Vector2(Camera.far, Camera.near)

}



const oPass = new OutputPass(scene, Camera)
Composer.addPass(oPass)



window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    Camera.aspect = sizes.width / sizes.height
    Camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(dpRatio)

    Composer.setSize(sizes.width, sizes.height)

    console.log('Resize')

    console.log(sizes.width + 'x' + sizes.height)
}
)


//Mouse
const Mouse = new THREE.Vector2()
window.addEventListener('mousemove', (event) => {
    Mouse.x = event.clientX / sizes.width * 2 - 1
    Mouse.y = -(event.clientY / sizes.height) * 2 + 1
}
)


//CSS&HTML_TRASH
let pTime = 0
var SP_VFX = 0
var CPU_VFX = 0
var Eng_VFX = 0
let E_bool = false
let E_test = 0
let S_Bool = false
let S_test = 0

const Elements2Hide = [document.querySelector('.Zagolovok'), document.querySelector('.text')]
const StartButton = document.querySelector('.text')
const Buttons = [document.querySelector('.Dvig'),
document.querySelector('.Knopka_1'),
document.querySelector('.Solar'),
document.querySelector('.Knopka_2'),
document.querySelector('.Module')]

Buttons[0].style.opacity = 0;
Buttons[2].style.opacity = 0;


//UI
const UI = document.querySelector('.UI')
UI.style.opacity = 0

const UI_Energy = document.querySelector('.Akkum')
const UI_Energy_Obvodka = document.querySelector('.Obvodka')

const UI_Thrust = document.querySelector('.Verh_Kontur')
const UI_Thrust_Kontur = document.querySelector('.Niz_Kontur')
UI_Thrust.style.width = 0 + "%"
UI_Thrust_Kontur.style.width = 0 + "%"

const UI_Fuel = document.querySelector('.Bak')
UI_Fuel.style.width = cUniforms.Fuel.value + '%'

const UI_MD = document.querySelector('.MD')
UI_MD.style.opacity = 5 + '%'

const UI_RD = document.querySelector('.RD')
UI_RD.style.opacity = 5 + '%'

const UI_SP = document.querySelector('.SP')
UI_SP.style.opacity = 5 + '%'


//Engine_Knopka
window.addEventListener('click', () => {
    if (Eng_VFX == 1 && E_test == 0) {
        E_test += 1
        document.querySelector('.Knopka_1 > b1').innerHTML = 'ЗАПУСТИТЬ'
        gsap.fromTo(cUniforms.click_driver_eng, { value: 1 }, { duration: .3, value: 0 })
        Buttons[0].style.opacity = 1
        Buttons[0].style.pointerEvents = 'all';
    } else if (Eng_VFX == 1 && E_test == 2) {
        E_test += 1
        document.querySelector('.Knopka_1 > b1').innerHTML = 'ВЫКЛЮЧИТЬ'
        gsap.fromTo(cUniforms.click_driver_eng, { value: 1 }, { duration: .3, value: 0 })
        Buttons[0].style.opacity = 1
        Buttons[0].style.pointerEvents = 'all';
    }
    else if(Eng_VFX == 1 && E_test == 1)
    {
        E_test -= 1
        gsap.fromTo(cUniforms.click_driver_eng, { value: 1 }, { duration: .3, value: 0 })
        Buttons[0].style.opacity = 0
    }
}
)

Buttons[1].addEventListener('click', () => {
    if (E_test == 1) {
        E_test += 1
        gsap.to(cUniforms.E_Switch, {
            duration: .2,
            ease: "power3.inOut",
            value: 1
        })
        Buttons[0].style.pointerEvents = 'none';
        Buttons[0].style.opacity = 0;
    } else if (E_test == 3) {
        E_test = 0
        gsap.to(cUniforms.E_Switch, {
            duration: 3.3,
            ease: "power3.inOut",
            value: 0
        })
        cUniforms.E_Driver.value = 0
        Buttons[0].style.pointerEvents = 'none';
        Buttons[0].style.opacity = 0;
    }
}
)


//Solar_Knopka
window.addEventListener('click', () => {
    if (SP_VFX == 1 && S_test == 0) {
        S_test += 1
        gsap.fromTo(cUniforms.click_driver, { value: 1 }, { duration: .3, value: 0 })
        document.querySelector('.Knopka_2 > b2').innerHTML = 'ОТКРЫТЬ'
        Buttons[2].style.pointerEvents = 'all';
        Buttons[2].style.opacity = 1
    }
    else if (SP_VFX == 1 && S_test == 2) {
        document.querySelector('.Knopka_2 > b2').innerHTML = 'ЗАКРЫТЬ'
        gsap.fromTo(cUniforms.click_driver, { value: 1 }, { duration: .3, value: 0 })
        Buttons[2].style.pointerEvents = 'all';
        Buttons[2].style.opacity = 1
    }
    else if(SP_VFX == 1 && S_test == 1)
    {   
        S_test -= 1
        gsap.fromTo(cUniforms.click_driver, { value: 1 }, { duration: .3, value: 0 })
        Buttons[2].style.opacity = 0
    }
}
)

Buttons[3].addEventListener('click', () => {
    if (S_test == 1) {
        S_test += 1
        Buttons[2].style.opacity = 0;
        Buttons[2].style.pointerEvents = 'none';
        solarPanelManager.openPanels();
    }
    else if (S_test == 2) {
        S_test = 0
        Buttons[2].style.opacity = 0;
        Buttons[2].style.pointerEvents = 'none';
        solarPanelManager.closePanels();
    }
}
)

console.log('Состав класса' + ' ')

//UI_Interactions
function UI_Update()
{   

    //Energy
    UI_Energy.style.width = cUniforms.Energy.value + '%'
    if(S_test == 0)
    {gsap.to(cUniforms.Energy, {duration: 600, value: 0})
    UI_Energy_Obvodka.style.opacity = 15 + '%'
    UI_SP.style.opacity = 5 + '%'}
    else if(S_test == 2)
    {gsap.to(cUniforms.Energy, {duration: 600, value: 100})
    UI_Energy_Obvodka.style.opacity = 35 + '%'
    UI_SP.style.opacity = 100 + '%'}

    //Engine
    UI_Thrust_Kontur.style.width = cUniforms.EnginePower.value + "%"
    if(E_test == 2)
    {
    gsap.to(cUniforms.EnginePower, {duration: 5, value: 100})
    UI_MD.style.opacity = 100 + '%'}
    else
    {
    gsap.to(cUniforms.EnginePower, {duration: 2, value: 0})
    UI_MD.style.opacity = 5 + '%'}
    UI_Thrust.style.width = thrustich + '%'

    //Fuel
    if(thrustich > 0){
    cUniforms.Fuel.value -= .007
    UI_Fuel.style.width = cUniforms.Fuel.value + '%';}


    //Knopki_Dvig_Solar
    const Pos1 = new THREE.Vector3(-1.6, 1.2, -0.0007)
    const Pos2 = new THREE.Vector3(.65, 1.1, -0.0007)

    const dvigPos = Pos1.clone()
    const solarPos = Pos2.clone()

    const dvigElement = document.querySelector('.Dvig')
    const solarElement = document.querySelector('.Solar')

    dvigPos.project(Camera)
    solarPos.project(Camera)
    
    const d_tX = (dvigPos.x * .5 + .5) * sizes.width;
    const d_tY = (-dvigPos.y * .5 + .5) * sizes.height;

    const s_tX = (solarPos.x * .5 + .5) * sizes.width;
    const s_tY = (-solarPos.y * .5 + .5) * sizes.height;
    
    dvigElement.style.left = `${d_tX}px`;
    dvigElement.style.top = `${d_tY}px`;
    solarElement.style.left = `${s_tX}px`;
    solarElement.style.top = `${s_tY}px`;   
    
}


//Start
//Немного оптимизации
function opti(){
    // scene.remove(BG_Mesh)
    // if(Model){
    // scene.remove(Model)
    // }
    // scene.remove(Planet)
    // scene.remove(M_atmo)
    document.querySelector('.Zagolovok').style.opacity = 0
    document.querySelector('.UI').style.opacity = 0
    document.querySelector('.Test_Start').style.opacity = 0
    BG_Mesh.geometry.dispose()
    BG_Material.dispose()
    Camera.position.z = 3
    cUniforms.ModelScale.value = 1
    }
// scene.add(Plane_Debug_Mesh)
// Plane_Debug_Mesh.material = AO_Shader
 //opti()

let ClickStart = false;
let Start_Anim = 0

//Задержки по стейтам
const Start_Duration = 7
const Start_Delay = 7
const One = .1
const Two = .4
const Three = .7
const Intro_Time = Math.ceil(One + Two + Three) * 2500;


//alert(Intro_Time)
StartButton.addEventListener('click', () => {
        if (Start_Anim == 0) {
            
            
            Start_Anim += 1
            ClickStart = true
            
            Elements2Hide[0].style.opacity = 0;
            Elements2Hide[1].style.opacity = 0;
            Elements2Hide[1].style.pointerEvents = 'none';
            //gsap.to(UI.style, {duration: 2, opacity: 1})
            gsap.to(cUniforms.BG_driver, { duration: .5, value: 0 })

            
            //Camera,FOV and Model
            gsap.to(Camera.position, {duration: Start_Duration, delay: Start_Delay
                , ease: "power4.inOut",x:1, y:0, z: -3.5})
            gsap.to(Camera.position, {duration:Start_Duration, delay: Start_Delay
                , ease: "power3.inOut", x: 4})
            gsap.to(Camera, {duration: Start_Duration, delay: Start_Delay
                , ease: "power3.inOut", fov: 60})
            gsap.to(cUniforms.ModelScale, {duration: Start_Duration, delay: Start_Delay
                , ease: "power3.inOut", value: 1})
            

            //PostFX_Anim_Start
            var animSeq = gsap.timeline()
            
            setTimeout(() => {
            aUniforms.uDistort.value = true
            aUniforms.uDistortTransition.value = 0
            animSeq.to(aUniforms.uDistortTransition, {duration: .3, value: 1.})
            animSeq.fromTo(aUniforms.uDistortTransition,
            {value: -1.5}, {duration: .1, delay: .1, value: 0.})
            
            

            setTimeout(() => {

            aUniforms.uPixelated.value = true
            aUniforms.uBW.value = true   
            aUniforms.uLowres.value = true
            aUniforms.uShades.value = 96.
            
            
            
            animSeq.to(aUniforms.uDistortValue, {duration: 1, 
            ease: "power3.inOut", value: 555.})

            //SUN
            sSpherical.set(1, 1., 2.)
            uSun()
            
            //ImageUpdateFX_1st_Stage
            animSeq.to(aUniforms.uPixels, {duration: .3, 
                delay: One, value: 1.8})
            animSeq.to(aUniforms.uShades, 
                {duration: .5, value: 96.}, "<")
            animSeq.to(aUniforms.uDistortValue, 
                {duration: .4, value: 5.}, "<")
            
            //ImageUpdateFX_2nd_Stage
            animSeq.to(aUniforms.uPixels, {duration: .9, 
                delay: Two, value: 2.5})
            animSeq.to(aUniforms.uShades, 
                {duration: 1.5, value: 168.}, "<")
            animSeq.to(aUniforms.uDistortValue, 
                {duration: .5, value: .01}, "<")
            
            //ImageUpdateFX_3rd_Stage
            animSeq.to(aUniforms.uShades, {duration: 1.5, value: 256.})      
            animSeq.fromTo(aUniforms.uDistortTransition,
                {value: .99}, {duration: 1.8, ease: "power3.inOut", value: 0.}, "<")
            animSeq.fromTo(aUniforms.uDistortValue,
                {value: 155.}, {duration: 1.5, value: 0.2}, "<")
            animSeq.to(aUniforms.uColorTransition, 
                {duration: 1.3, value: 0.}, "<")
            animSeq.to(aUniforms.uPixels, 
                {duration: 4, value: 3.9}, "<") 

            animSeq.to(aUniforms.uDistortValue, 
                {duration: .5, value: .01})  

            //ImageUpdateFX_4th_Stage
            setTimeout(() => {
            aUniforms.uPixelated.value = true
                
            animSeq.fromTo(aUniforms.uDistortValue,
            {value: 155.}, {duration: 2.5, value: 0.01})

            animSeq.to(aUniforms.uPixels, 
            {duration: 4, value: 18.9}, "<")

            aUniforms.uDistort.value = true
            aUniforms.uBW.value = false
            aUniforms.uLowres.value = false
            }, Intro_Time + 2000);


            }, 400);
            }, 900)
        }
    }
)

console.log(ClickStart + 'START!!!111')


//Anim
const clock = new THREE.Clock()
let intersects = {}
let rcObjects = []

//DEBUG_DRAWCALLS
renderer.info.autoReset = false;

function opti_Debug() {
    renderer.info.reset();
    console.log( renderer.info.render );
}



//EVENT_TICK
const tick = () => {
    stats.begin()
    //Camera

    // opti_Debug()

    if(Model){
        //Model.add(Camera)
        Orbit.target.copy(Model.position)
        Orbit.position0.copy(Model.position)
        Orbit.update()
        Model.scale.set(
            cUniforms.ModelScale.value, 
            cUniforms.ModelScale.value, 
            cUniforms.ModelScale.value)
    } 


    //MouseIntersections
    
    Raycaster.setFromCamera(Mouse, Camera)

    if(Model != null){
    rcObjects = [SpMeshes, 
    EngineMeshes, CPUMeshes]
    intersects = Raycaster.intersectObject(scene)
    }
    if (Model != null && intersects != 0) {
        if (intersects[0].object.name.includes('S_Panels')) {
            SP_VFX = 1
        } else {
            SP_VFX = 0
        }
        if (intersects[0].object.name.includes('CPU')) {
            CPU_VFX = 1
        } else {
            CPU_VFX = 0
        }
        if (intersects[0].object.name.includes('Engine')) {
            Eng_VFX = 1
        } else {
            Eng_VFX = 0
        }
    }

    ///VFX
    //Spanels
    if (SP_VFX > 0 || S_test == 1) {
        gsap.to(cUniforms.driver, {
            duration: .15,
            ease: "power2.inOut",
            value: 1
        })
    } else {
        gsap.to(cUniforms.driver, {
            duration: .1,
            ease: "power2.inOut",
            value: 0
        })
    }
    //CPU
    if (CPU_VFX > 0) {
        gsap.to(cUniforms.driver_2, {
            duration: .15,
            ease: "power2.inOut",
            value: 1
        })
    } else {
        gsap.to(cUniforms.driver_2, {
            duration: .1,
            ease: "power2.inOut",
            value: 0
        })
    }
    //Engine
    if(E_test == 2 && thrustich > 25) {
        gsap.to(cUniforms.E_Driver_Soplo, {
            duration: .5,
            ease: "power2.inOut",
            value: 1
        })
    }
    else {
        gsap.to(cUniforms.E_Driver_Soplo, {
            duration: .5,
            ease: "power2.inOut",
            value: 0
        })
    }

    if (Eng_VFX > 0 || E_test == 1 || E_test == 3) {
        gsap.to(cUniforms.driver_1, {
            duration: .15,
            ease: "power2.inOut",
            value: 1
        })
    } else {
        gsap.to(cUniforms.driver_1, {
            duration: .1,
            ease: "power2.inOut",
            value: 0
        })
    }

    if (E_test == 2 || E_test == 3) {
        cUniforms.E_Driver.value = clamp(thrustich/100, 0, 1)
    } else {
        gsap.to(cUniforms.E_Driver, {
            duration: .2,
            ease: "power2.inOut",
            value: 0
        })
    }
    //

    const distMouse = distVec2(Mouse, new THREE.Vector2(0, 0))

    if (Start_Anim < 1 && distMouse < 0.5 && distMouse > -0.5) {
        var normalizedValue = distMouse * 2;
        cUniforms.BG_driver.value = lerp(1, 0, normalizedValue);
        // Interpolating from 0 to 1
    }
    else { gsap.to(cUniforms.BG_driver, { duration: .5, value: 0 }) }

    if (Model) {
        var Lolicheskoe = Model.children[0].children[1]
        Lolicheskoe.material.emissiveIntensity = 0
    }

    const eTime = clock.getElapsedTime()
    const delta = eTime - pTime
    pTime = eTime

    window.requestAnimationFrame(tick)
    Planet.setRotationFromAxisAngle(new THREE.Vector3(0, 1, 0), eTime * .01)
    EmissionDriver_A = (Math.sin(eTime * 3) * 3) + 3
    BG_Material.uniforms.u_driver.value = cUniforms.BG_driver.value
    cUniforms.uTime.value = eTime
    
    rcsFX.uniforms.u_time.value = eTime
    
    //PostProcessUpd
    pProcessUpdate()
    Composer.passes[4].uniforms.u_time.value = eTime
    Composer.passes[4].uniforms.u_resolution.value 
    = new THREE.Vector2(sizes.width, sizes.height)
    
    Cone.uniforms.u_sMovment.value = cUniforms.E_Driver.value
    Cone.uniforms.u_time.value = eTime

    renderer.setRenderTarget(renderTarget)
    renderer.render(scene, Camera)
    renderer.setRenderTarget(null)
    Composer.render()


    //UI_Animation
    UI_Update()


    if (solarPanelManager) {
        solarPanelManager.update(delta);
    } 
    if (satelliteController) {
        satelliteController.update(delta);
    }

    stats.end()
}
tick()

//BG
pMap2.mapping = THREE.EquirectangularReflectionMapping
pMap2.brightness = 0.0
scene.background = pMap2
scene.environmentIntensity = .05
pMap2.colorSpace = THREE.SRGBColorSpace


// Clear color
debugObject.clearColor = '#ff0000'
gui.addColor(debugObject, 'clearColor').onChange(() => {
    renderer.setClearColor(debugObject.clearColor)

}
)
