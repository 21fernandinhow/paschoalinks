import { Canvas } from "@react-three/fiber"
import { SocialIcon } from "./SocialIcon"

export const IconsContainer = () => {

    return (
        <Canvas shadows>
            <ambientLight intensity={5} />
            <directionalLight position={[0, 2, 2]} intensity={5} castShadow />
            <SocialIcon
                file={"/youtube_button.glb"}
                position={[-0.9, -0.3, 0]}
                scale={[0.7, 0.7, 0.7]}
                rotation={[0.1, 0.2, 0]}
                action={() => window.open(
                    "https://www.youtube.com/c/PabloPaschoalin?sub_confirmation=1", 
                    "_blank"
                )}
            />
            <SocialIcon
                file={"/twitch_logo.glb"}
                position={[1, -0.3, 0]}
                scale={[-1.75, 1.75, 1.75]}
                rotation={[-0.1, -0.25, 0]}
                action={() => window.open(
                    "https://www.twitch.tv/paschoalin", 
                    "_blank"
                )}
            />
            <SocialIcon
                file={"/amazon_logo.glb"}
                position={[-0.35, -1.3, 0]}
                scale={[0.002, 0.002, 0.002]}
                rotation={[0.1, 0.3, 0]}
                action={() => window.open(
                    "https://amzn.to/33Uawnp", 
                    "_blank"
                )}
            />
        </Canvas>
    )
}