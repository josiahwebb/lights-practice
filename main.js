import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'lil-gui'

/**
 * Base
 */
// Debug GUI
const gui = new dat.GUI()
gui.add(gui, 'reset')

let preset = {}
const settingsObj = {
  value: '',
  savePreset() {
    preset = gui.save();
    loadButton.enable();
  },
  loadPreset() {
    gui.load( preset );
  }
}
gui.add(settingsObj, 'value')
gui.add(settingsObj, 'savePreset')
const loadButton = gui.add( settingsObj, 'loadPreset' ).disable();

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


let colorObj = {
  scheme: 'monochrome',
  color: 0xff0000
}

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight({
  color: 0xffffff,
  intensity: .2
})
// scene.add(ambientLight)

// Helper Functions
const addHelperToGui = (value, helperObj) => {
  const {help} = helperObj
  value ? scene.add(help) : scene.remove(help)
  window.requestAnimationFrame(() => spotLightHelper.help.update())
}

const updateHelper = helper => {
  window.requestAnimationFrame(() => helper.help.update())
}

// Spot Lights
const spotLight = new THREE.SpotLight(0xff0000, 1.5, 10, Math.PI * .2, .5, 0)
spotLight.position.x = 0
spotLight.position.y = 5
spotLight.position.z = 2.5
scene.add(spotLight)
scene.add(spotLight.target)
// const spotLightFolder = gui.addFolder('Spot 1')
// spotLightFolder.add(spotLight, 'intensity', 0, 1, .001).onChange(() => updateHelper(spotLightHelper))
// spotLightFolder.add(spotLight, 'distance', 0, 100, 1).onChange(() => updateHelper(spotLightHelper))
// spotLightFolder.add(spotLight, 'angle', 0, Math.PI, .001).onChange(() => updateHelper(spotLightHelper))
// spotLightFolder.add(spotLight, 'penumbra', 0, 1, .001).onChange(() => updateHelper(spotLightHelper))
// spotLightFolder.add(spotLight, 'decay', 0, 5, .01).onChange(() => updateHelper(spotLightHelper))
// spotLightFolder.addColor(spotLight, 'color').onChange(() => updateHelper(spotLightHelper))
// spotLightFolder.add(spotLight.position, 'x', -5, 5, .25).onChange(() => updateHelper(spotLightHelper))
// spotLightFolder.add(spotLight.position, 'y', -5, 5, .25).onChange(() => updateHelper(spotLightHelper))
// spotLightFolder.add(spotLight.position, 'z', -5, 5, .25).onChange(() => updateHelper(spotLightHelper))
// const spotLightHelper = {
//   help: new THREE.SpotLightHelper(spotLight),
//   helper: false
// }
// spotLightFolder.add(spotLightHelper, 'helper').onChange(v => addHelperToGui(v, spotLightHelper))
// updateHelper(spotLightHelper)
// scene.add(spotLightHelper.help)

const spotLight2 = new THREE.SpotLight(0x00ff00, 1.5, 10, Math.PI * .2, .5, 0)
spotLight2.position.x = 1.8
spotLight2.position.y = 5
spotLight2.position.z = -1.8
scene.add(spotLight2)
scene.add(spotLight2.target)
// const spotLightFolder2 = gui.addFolder('Spot 2')
// spotLightFolder2.add(spotLight2, 'intensity', 0, 1, .001).onChange(() => updateHelper(spotLightHelper2))
// spotLightFolder2.add(spotLight2, 'distance', 1, 20, 1).onChange(() => updateHelper(spotLightHelper2))
// spotLightFolder2.add(spotLight2, 'angle', 0, 1, .001).onChange(() => updateHelper(spotLightHelper2))
// spotLightFolder2.add(spotLight2, 'penumbra', 0, 1, .001).onChange(() => updateHelper(spotLightHelper2))
// spotLightFolder2.add(spotLight2, 'decay', 0, 5, .01).onChange(() => updateHelper(spotLightHelper2))
// spotLightFolder2.addColor(spotLight2, 'color').onChange(() => updateHelper(spotLightHelper2))
// spotLightFolder2.add(spotLight2.position, 'x', -5, 5, .25).onChange(() => updateHelper(spotLightHelper2))
// spotLightFolder2.add(spotLight2.position, 'y', -5, 5, .25).onChange(() => updateHelper(spotLightHelper2))
// spotLightFolder2.add(spotLight2.position, 'z', -5, 5, .25).onChange(() => updateHelper(spotLightHelper2))
// const spotLightHelper2 = {
//   help: new THREE.SpotLightHelper(spotLight2),
//   helper: false
// }
// spotLightFolder2.add(spotLightHelper2, 'helper').onChange(v => addHelperToGui(v, spotLightHelper2))
// scene.add(spotLightHelper2.help)

const spotLight3 = new THREE.SpotLight(0x0000ff, 1.5, 10, Math.PI * .2, .5, 0)
spotLight3.position.x = -1.8
spotLight3.position.y = 5
spotLight3.position.z = -1.8
scene.add(spotLight3)
scene.add(spotLight3.target)
// const spotLightFolder3 = gui.addFolder('Spot 3')
// spotLightFolder3.add(spotLight3, 'intensity', 0, 1, .001).onChange(() => updateHelper(spotLightHelper3))
// spotLightFolder3.add(spotLight3, 'distance', 0, 100, 1).onChange(() => updateHelper(spotLightHelper3))
// spotLightFolder3.add(spotLight3, 'angle', 0, Math.PI, .001).onChange(() => updateHelper(spotLightHelper3))
// spotLightFolder3.add(spotLight3, 'penumbra', 0, 1, .001).onChange(() => updateHelper(spotLightHelper3))
// spotLightFolder3.add(spotLight3, 'decay', 0, 5, .01).onChange(() => updateHelper(spotLightHelper3))
// spotLightFolder3.addColor(spotLight3, 'color').onChange(() => updateHelper(spotLightHelper3))
// spotLightFolder3.add(spotLight3.position, 'x', -5, 5, .25).onChange(() => updateHelper(spotLightHelper3))
// spotLightFolder3.add(spotLight3.position, 'y', -5, 5, .25).onChange(() => updateHelper(spotLightHelper3))
// spotLightFolder3.add(spotLight3.position, 'z', -5, 5, .25).onChange(() => updateHelper(spotLightHelper3))
// const spotLightHelper3 = {
//   help: new THREE.SpotLightHelper(spotLight3),
//   helper: false
// }
// spotLightFolder3.add(spotLightHelper3, 'helper').onChange(v => addHelperToGui(v, spotLightHelper3))
// updateHelper(spotLightHelper3)
// scene.add(spotLightHelper3.help)

// Point Light
const pointLight = new THREE.PointLight(spotLight.color, 5, 2, .5)
pointLight.position.y = -1.5
console.log(spotLight.color);
scene.add(pointLight)
const pointLightHelper = new THREE.PointLightHelper(pointLight)
scene.add(pointLightHelper)

/**
 * Objects
 */
// Material
const material = new THREE.MeshStandardMaterial()
material.roughness = .4
material.metalness = .8
const materialFolder = gui.addFolder('Material')
materialFolder.add(material, 'roughness', 0, 1, .001)
materialFolder.add(material, 'metalness', 0, 1, .001)

// Object
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(.5, 32, 32),
  material
)
sphere.castShadow = true
sphere.receiveShadow = true

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  material// new THREE.MeshPhongMaterial({ color: 0xffffff })
)
floor.rotation.x = - Math.PI * .5
floor.position.y = -1.5
floor.receiveShadow = true

const room = new THREE.Mesh(
  // new THREE.BoxGeometry(20, 20, 20),
  // new THREE.SphereGeometry(10),
  new THREE.OctahedronGeometry(10),
  // new THREE.MeshPhongMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide })
  material
)
room.material.side = THREE.DoubleSide
room.receiveShadow = true

const octo = new THREE.Mesh(
  new THREE.OctahedronGeometry(),
  material
)
octo.castShadow = true


// const floorFolder = gui.addFolder('Floor')
// floorFolder.add(floor.material, 'metalness', 0, 1, .001)

scene.add(octo, room)


/**
 * Fetch Colors GUI and logic
 */
// Fetch Colors

const colorFolder = gui.addFolder('Select Color')
colorFolder.add(colorObj, 'scheme', ['monochrome', 'monochrome-dark', 'monochrome-light', 'analogic', 'complement', 'analogic-complement', 'triad', 'quad'])
  .onChange(v => {
    colorObj.scheme = v
    fetchColorData(colorObj)
    console.log(colorObj);
    console.log(spotLight2.color, spotLight3.color);
  });
colorFolder.addColor(colorObj, 'color').onChange(v => {
  colorObj.color = v
  spotLight.color = new THREE.Color(colorObj.color)
  fetchColorData(colorObj)
  console.log(colorObj);
  console.log(spotLight2.color, spotLight3.color);
})

function fetchColorData(colorObj) {
  let {scheme, color} = colorObj
  color = color.toString(16)
  fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=2`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const {colors} = data
        spotLight2.color = new THREE.Color(colors[0].hex.value)
        spotLight3.color = new THREE.Color(colors[1].hex.value)
      })
}

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base Cam
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 100 );
camera.position.x = -1
camera.position.y = 2
camera.position.z = 6
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.minDistance = 2
controls.maxDistance = 10

/**
 * Renderer
 */
const renderer = new THREE.WebGL1Renderer({canvas})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.render(scene, camera)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  // Update objects

  // Update controls
  controls.update()

  // Renderer
  renderer.render(scene, camera)

  // call tick again on next frame
  window.requestAnimationFrame(tick)
}

tick()