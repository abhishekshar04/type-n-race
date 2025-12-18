import { useParams } from "react-router-dom";

export default function Room() {
  const { roomId } = useParams();
  return <div className="p-8 text-xl">Room: {roomId}</div>;
}
