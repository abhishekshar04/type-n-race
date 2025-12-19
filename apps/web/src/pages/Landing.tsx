import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <>
      <HeroFullScreen />
      <PhilosophySection />
      <FeatureSection />
      <FinalCTA />
    </>
  );
}

/* ================= HERO ================= */

function HeroFullScreen() {
  return (
    <section className="flex py-24 flex-col items-center justify-center bg-base px-6 text-center">
      <h1 className="max-w-4xl text-5xl font-bold leading-tight text-textBase sm:text-6xl">
        Typing that values
        <br />
        <span className="text-primaryStrong">focus</span>, not noise.
      </h1>

      <p className="mt-8 max-w-xl text-lg text-textMuted">
        A thoughtfully designed typing platform for people who
        care about accuracy, rhythm, and meaningful improvement.
      </p>

      <div className="mt-14 flex gap-6">
        <Link to="/practice">
          <Button
            size="lg"
            className="
              border-2 border-textBase
              bg-transparent
              text-textBase
              transition-colors
              hover:blur-in-md
              hover:bg-orange-300
            "
          >
            Start Practicing
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
              Compete with friends
            </Button>
        </Link>
      </div>
    </section>
  );
}

/* ================= PHILOSOPHY ================= */

function PhilosophySection() {
  return (
    <section className="bg-base px-6 py-28">
      <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-textBase">
            Built with intention
          </h2>
          <p className="mt-4 text-textMuted leading-relaxed">
            Most typing websites overwhelm you with charts,
            leaderboards, and distractions.
            <br />
            <br />
            This platform is different. It prioritizes calm,
            correctness, and control.
          </p>
        </div>

        <div className="rounded-xl border border-textBase/20 p-8">
          <ul className="space-y-4 text-textBase">
            <li>• No fake metrics or inflated WPM</li>
            <li>• Per-character accuracy tracking</li>
            <li>• Private competition, not public pressure</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ================= FEATURES ================= */

function FeatureSection() {
  return (
    <section className="bg-base px-6 py-28">
      <div className="mx-auto max-w-5xl grid gap-8 sm:grid-cols-3">
        <Feature
          title="Minimal Interface"
          description="Every element earns its place on the screen."
        />
        <Feature
          title="Honest Statistics"
          description="Accuracy and WPM that actually mean something."
        />
        <Feature
          title="Focused Competition"
          description="Invite-only rooms. No noise. No pressure."
        />
      </div>
    </section>
  );
}

function Feature({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-textBase/20 p-6">
      <h3 className="font-semibold text-textBase">{title}</h3>
      <p className="mt-3 text-sm text-textMuted leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/* ================= FINAL CTA ================= */

function FinalCTA() {
  return (
    <section className="bg-primaryStrong px-6 py-28 ">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold">
          Type with purpose.
        </h2>

        <p className="mt-6 text-lg opacity-90">
          Practice alone or race with friends.
          Designed to feel calm, not competitive.
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <Link to="/practice">
            <Button
              size="lg"
              className="
                border-2 border-textBase
                bg-transparent
                text-textBase
                transition-colors
                hover:bg-orange-300
                hover:blur-in-md
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
    </section>
  );
}
