import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b border-textBase/20 bg-base">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-primaryStrong"
        >
          Type-N-Race
        </Link>

        <div className="flex items-center gap-3">
          <Link to="/practice">
            <Button
              size="lg"
              className="
                border-2 border-textBase
                text-textBase
                bg-transparent
                transition-colors
                hover:blur-in-md
                hover:bg-orange-300
              "
            >
              Practice
            </Button>
          </Link>

          <Link to="/compete">
            <Button
              size="lg"
              className="
                border-2 border-textBase
                text-textBase
                transition-colors
                hover:blur-in-md
                
              "
            >
              Compete
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
