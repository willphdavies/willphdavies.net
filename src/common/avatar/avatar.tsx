import Image from "next/image";
import "./avatar.scss";

interface AvatarProps {
  src: string;
}
export function Avatar(props: AvatarProps) {
  const { src } = props;
  return (
    <div className="avatar">
      <Image src={src} width={100} height={100} alt="Avatar" />
    </div>
  );
}
