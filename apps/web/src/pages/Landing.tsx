import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <h1 className="text-4xl font-bold">
        Practice Typing. Compete with Friends.
      </h1>

      <p className="max-w-xl text-muted-foreground">
        A minimal typing platform to improve speed and challenge your friends
        in private rooms.
      </p>

      <div className="flex gap-4">
        <Link to="/practice">
          <Button variant="outline">Practice</Button>
        </Link>

        <Link to="/compete">
          <Button>Compete</Button>
        </Link>
      </div>
    </div>
  );
}
