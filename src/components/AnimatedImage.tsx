import { useRef, useState } from "react";

interface AnimatedImageProps {
  gifPath: string;
  staticPath: string;
  altText: string;
  title: string;
  onClick?: () => void;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ gifPath, staticPath, altText, title, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <img
      ref={imgRef}
      src={isHovered ? gifPath : staticPath} // Swap between GIF and static image
      alt={altText}
      title={title}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ 
        height:'50px', 
        margin:'0 8px', 
        borderRadius:'1rem',
        cursor:'pointer'
        }}
    />
  );
};

export default AnimatedImage;