import { useEffect, useRef } from 'react'
import * as BABYLON from 'babylonjs'
import floorPng from '@/assets/images/floor.png'
import roofJpg from '@/assets/images/roof.jpg'
import cubehousePng from '@/assets/images/cubehouse.png'
const BabylonDemo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  // https://doc.babylonjs.com/features/introductionToFeatures/chap2/combine
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true })
    // Create a basic BJS Scene object 创建一个基本的BJS场景对象
    const createScene = () => {
      const scene = new BABYLON.Scene(engine)

      /** ** Set camera and light *****/
      const camera = new BABYLON.ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0))
      camera.attachControl(canvas, true)
      const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 1, 0), scene)

      const ground = buildGround()
      const box = buildBox()
      buildBox2()
      buildRoof2()
      const roof = buildRoof()

      return scene
    }

    /** ****Build Functions***********/
    const buildGround = () => {
      // color
      const groundMat = new BABYLON.StandardMaterial('groundMat')
      groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0)

      const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 10, height: 10 })
      ground.material = groundMat
    }

    const buildBox = () => {
      // texture
      const boxMat = new BABYLON.StandardMaterial('boxMat')
      boxMat.diffuseTexture = new BABYLON.Texture(cubehousePng)

      // options parameter to set different images on each side
      const faceUV = []
      faceUV[0] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1.0) // rear face
      faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1.0) // front face
      faceUV[2] = new BABYLON.Vector4(0.25, 0, 0.5, 1.0) // right side
      faceUV[3] = new BABYLON.Vector4(0.75, 0, 1.0, 1.0) // left side
      // top 4 and bottom 5 not seen so not set

      /** ** World Objects *****/
      const box = BABYLON.MeshBuilder.CreateBox('box', { faceUV, wrap: true })
      box.material = boxMat
      box.position.y = 0.5

      return box
    }

    const buildBox2 = () => {
      const boxMat = new BABYLON.StandardMaterial('boxMat')
      boxMat.diffuseTexture = new BABYLON.Texture(cubehousePng)
      const faceUV = []
      faceUV[0] = new BABYLON.Vector4(0.6, 0.0, 1.0, 1.0) // rear face
      faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.4, 1.0) // front face
      faceUV[2] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0) // right side
      faceUV[3] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0) // left side
      // top 4 and bottom 5 not seen so not set

      /** ** World Objects *****/
      const box = BABYLON.MeshBuilder.CreateBox('box', { width: 2, faceUV, wrap: true })
      box.material = boxMat
      box.position = new BABYLON.Vector3(2, 0.5, 2)
      return box
    }

    const buildRoof = () => {
      // texture
      const roofMat = new BABYLON.StandardMaterial('roofMat')
      roofMat.diffuseTexture = new BABYLON.Texture(roofJpg)

      const roof = BABYLON.MeshBuilder.CreateCylinder('roof', { diameter: 1.3, height: 1.2, tessellation: 3 })

      roof.material = roofMat
      roof.scaling.x = 0.75
      roof.rotation.z = Math.PI / 2
      roof.position.y = 1.22

      return roof
    }

    const buildRoof2 = () => {
      // texture
      const roofMat = new BABYLON.StandardMaterial('roofMat')
      roofMat.diffuseTexture = new BABYLON.Texture(roofJpg)

      const roof = BABYLON.MeshBuilder.CreateCylinder('roof', { diameter: 1.3, height: 1.2, tessellation: 3 })
      roof.material = roofMat
      roof.scaling = new BABYLON.Vector3(0.75, 2, 1)
      roof.rotation.z = Math.PI / 2
      roof.position = new BABYLON.Vector3(2, 1.22, 2)
      return roof
    }

    const scene = createScene()

    engine.runRenderLoop(() => {
      scene.render()
    })
    window.addEventListener('resize', () => {
      engine.resize()
    })
  }, [])

  return (
    <div className='w100% h100%'>
      {/* CanvasDemo */}
      <canvas ref={canvasRef} className='w100% h100%' />
    </div>
  )
}

export default BabylonDemo
