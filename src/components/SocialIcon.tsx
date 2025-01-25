import { DragControls, useGLTF, Text } from "@react-three/drei";
import { useState } from "react";

interface SocialIconProps {
  file: string;
  position: number[];
  rotation: number[];
  scale: number[];
  action: () => void;
  label?: string;
}

export const SocialIcon = ({ file, position, rotation, scale, action, label }: SocialIconProps) => {
  const result = useGLTF(file);

  const [isDragging, setIsDragging] = useState(false);

  const rootStyle = getComputedStyle(document.documentElement);
  const fontColor = rootStyle.getPropertyValue('--contrast-color').trim();
  const hoverColor = rootStyle.getPropertyValue('--main-color').trim();

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    if (!isDragging) {
      action();
    }
  };

  return (
    <>
      <DragControls onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <primitive
          object={result.scene}
          position={position}
          scale={scale}
          rotation={rotation}
          onClick={handleClick}
          onPointerEnter={() => document.body.style.cursor = "pointer"}
          onPointerLeave={() => document.body.style.cursor = "auto"}
        />
        {label && <Text
          position={[position[0], position[1], position[2]]}
          fontSize={0.2}
          color={isDragging ? hoverColor : fontColor}
          anchorX="center"
          anchorY="middle"
          onClick={handleClick}
          onPointerEnter={() => document.body.style.cursor = "pointer"}
          onPointerLeave={() => document.body.style.cursor = "auto"}
          fontWeight={"bold"}
        >
          {label}
        </Text>}
      </DragControls>
    </>
  );
};