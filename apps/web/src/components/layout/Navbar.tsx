import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-bold">
          Type-N-Race
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/practice">
            <Button variant="ghost">Practice</Button>
          </Link>

          <Link to="/compete">
            <Button>Compete</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
