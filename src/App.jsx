
import { useEffect, useState } from "react";

// Gallery image metadata.
// The files will be placed in public/images during development.
// After AWS deployment, CloudFront will serve these image URLs.
const images = [
  {
    id: 1,
    title: "Mountain Escape",
    category: "Nature",
    src: "/images/image-01.jpg",
  },
  {
    id: 2,
    title: "Forest Serenity",
    category: "Nature",
    src: "/images/image-02.jpg",
  },
  {
    id: 3,
    title: "Urban Architecture",
    category: "Architecture",
    src: "/images/image-03.jpg",
  },
  {
    id: 4,
    title: "Modern Skyline",
    category: "Architecture",
    src: "/images/image-04.jpg",
  },
  {
    id: 5,
    title: "Coastal Adventure",
    category: "Travel",
    src: "/images/image-05.jpg",
  },
  {
    id: 6,
    title: "Golden Hour",
    category: "Travel",
    src: "/images/image-06.jpg",
  },
];

// Available categories for filtering photographs.
const categories = ["All", "Nature", "Architecture", "Travel"];

function App() {
  // Track the currently selected category.
  const [activeCategory, setActiveCategory] = useState("All");

  // Track the photograph displayed in the image viewer.
  // null indicates that the viewer is closed.
  const [selectedImage, setSelectedImage] = useState(null);

  // Display all photographs or filter by the active category.
  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);

  // Handle keyboard interaction when the image viewer is open.
  useEffect(() => {
    if (!selectedImage) return;

    // Close the viewer when the Escape key is pressed.
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    }

    // Prevent background scrolling while viewing a photograph.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    // Restore normal browser behavior when the viewer closes.
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* Navigation bar */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f8f7f4]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          {/* Website branding */}
          <a
            href="#home"
            className="text-2xl font-extrabold tracking-tight"
          >
            cloud<span className="text-amber-600">gallery.</span>
          </a>

          {/* Navigation links */}
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600 sm:gap-10">
            <a
              href="#gallery"
              className="transition hover:text-amber-600"
            >
              Gallery
            </a>

            <a
              href="#about"
              className="transition hover:text-amber-600"
            >
              About
            </a>
          </nav>
        </div>
      </header>

      <main>

        {/* Hero section introducing the gallery */}
        <section
          id="home"
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28"
        >

          {/* Left side: introduction and call-to-action */}
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-amber-200 bg-amber-50 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-xs font-bold tracking-[0.18em] text-amber-800 uppercase">
                A curated photo collection
              </span>
            </div>

            <h1 className="max-w-xl text-5xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Moments worth
              <br />
              <span className="font-serif font-normal italic text-amber-600">
                keeping.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
              Explore a collection of beautiful photographs,
              thoughtfully organized and designed for secure,
              high-performance delivery with AWS.
            </p>

            {/* Navigate directly to the gallery section */}
            <a
              href="#gallery"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-slate-900 px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-amber-600"
            >
              Explore collection
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Right side: decorative collection overview */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-800 via-slate-900 to-black p-9 text-white shadow-2xl sm:p-12">

            {/* Decorative blurred background shapes */}
            <div className="absolute -top-16 -right-20 h-64 w-64 rounded-full bg-amber-500/25 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-orange-600/20 blur-3xl" />

            <div className="relative flex min-h-80 flex-col justify-between sm:min-h-96">

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.25em] text-amber-300 uppercase">
                  The collection
                </span>

                <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/70">
                  Vol. 01 / 2026
                </span>
              </div>

              <div>
                <p className="font-serif text-8xl tracking-tight text-white sm:text-9xl">
                  06<span className="text-amber-400">.</span>
                </p>

                <p className="mt-3 text-xl font-medium tracking-tight">
                  Six frames. Endless stories.
                </p>

                <p className="mt-3 max-w-xs text-sm leading-7 text-slate-400">
                  Nature, architecture and travel — captured
                  in one thoughtfully curated space.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.slice(1).map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-white/20 px-4 py-2 text-xs text-slate-300"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main gallery section */}
        <section
          id="gallery"
          className="border-t border-slate-200 bg-white py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            {/* Section heading */}
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-xs font-bold tracking-[0.25em] text-amber-600 uppercase">
                  Discover the collection
                </p>

                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  The gallery<span className="text-amber-600">.</span>
                </h2>
              </div>

              {/* Count updates when category selection changes */}
              <p className="text-sm text-slate-500">
                Showing {filteredImages.length} of {images.length} photographs
              </p>
            </div>

            {/* Category filter buttons */}
            <div
              className="mt-10 flex flex-wrap gap-3"
              aria-label="Filter photographs by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"

                  // Highlight the currently selected category.
                  className={`rounded-full px-6 py-3 text-sm font-medium transition ${
                    activeCategory === category
                      ? "bg-slate-900 text-white shadow-md"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-amber-500 hover:text-amber-600"
                  }`}

                  // Update state to display matching photographs.
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Responsive image grid:
                1 column on mobile,
                2 columns on tablets,
                3 columns on larger screens. */}
            <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

              {/* Generate a card for every filtered photograph */}
              {filteredImages.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                  onClick={() => setSelectedImage(image)}
                  aria-label={`View ${image.title}`}
                >

                  {/* Image wrapper controls dimensions and zoom effect */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    {/* Dark overlay appears when hovering over an image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                      <span className="rounded-full border border-white/70 bg-white/20 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm">
                        View photograph ↗
                      </span>
                    </div>
                  </div>

                  {/* Image title and category */}
                  <div className="flex items-center justify-between gap-3 p-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {image.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        {image.category}
                      </p>
                    </div>

                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-700 transition group-hover:border-amber-600 group-hover:bg-amber-600 group-hover:text-white"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* AWS technology information */}
        <section
          id="about"
          className="bg-[#f8f7f4] py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">

            <p className="mb-4 text-xs font-bold tracking-[0.25em] text-amber-600 uppercase">
              Behind the gallery
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for security.
              <br />
              Designed for speed.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              CloudGallery is a React-based image gallery designed
              to use private Amazon S3 storage and Amazon CloudFront
              for efficient content delivery.
            </p>

            {/* Technical feature cards explaining the AWS architecture */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <div className="mb-5 text-3xl">☁️</div>
                <h3 className="text-lg font-semibold">Amazon S3</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Private object storage for our website files
                  and image collection.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <div className="mb-5 text-3xl">🌍</div>
                <h3 className="text-lg font-semibold">CloudFront CDN</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Edge caching helps deliver content with
                  reduced latency and fewer origin requests.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7">
                <div className="mb-5 text-3xl">🔒</div>
                <h3 className="text-lg font-semibold">Origin Access Control</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Allows an authorized CloudFront distribution
                  to access private S3 objects securely.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Website footer */}
      <footer className="bg-slate-950 py-9 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 text-sm sm:flex-row lg:px-10">
          <p>© 2026 CloudGallery. All rights reserved.</p>
          <p>Made with React • Tailwind CSS • AWS</p>
        </div>
      </footer>

      {/* Full-screen image viewer.
          Rendered only when an image is selected. */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >

          {/* Stop clicks inside the dialog from closing it */}
          <div
            className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
            role="dialog"
            aria-modal="true"
            aria-label={`Viewing ${selectedImage.title}`}
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close button */}
            <button
              type="button"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-xl text-white transition hover:bg-white/30"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image viewer"
            >
              ✕
            </button>

            {/* Enlarged selected photograph */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[72vh] max-w-full rounded-xl object-contain shadow-2xl"
            />

            {/* Image information */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-white">
                {selectedImage.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
