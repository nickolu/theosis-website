export default function Footer() {
  return (
    <footer className="w-full py-4 px-6 border-t border-stone/20 bg-abyss/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs text-bone/40 font-body">
          Website Design and Development by{" "}
          <a
            href="https://cunningjams.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bone/60 hover:text-brass transition-colors"
          >
            CunningJams.com
          </a>
          {" "}&bull;{" "}
          Artwork created by{" "}
          <a
            href="https://www.instagram.com/radvicioust/?hl=en"
            target="_blank"
            className="text-bone/60 hover:text-brass transition-colors"
          >
            Radin Pradipta
          </a>
          {" "}and{" "}
          <span
            className="text-bone/60 hover:text-brass transition-colors"
          >
            Casey Alexander
          </span>
        </p>
      </div>
    </footer>
  );
}
