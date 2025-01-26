import { IconCanvas, IconCanvasProps } from "./IconCanvas";
interface IconsContainerProps {
  data: IconCanvasProps[]; 
}

export const IconsContainer = ({ data }: IconsContainerProps) => {
  return (
    <div className="icons-grid">
      {data.map((icon, index) => (
        <IconCanvas
          key={index}
          file={icon.file}
          onClick={icon.onClick}
          label={icon.label}
        />
      ))}
    </div>
  );
};