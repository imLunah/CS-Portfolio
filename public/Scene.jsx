/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 scene.gltf 
Author: ZLM Crafter (https://sketchfab.com/zlmalliance)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/destiny-2-ghost-2-3d-7aa34f05b481464ab39030c653efec46
Title: Destiny 2 Ghost | 天命2 機靈 3D 模型
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.bluepower} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.GhostCube} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
