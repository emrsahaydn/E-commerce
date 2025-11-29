import f1 from "../assets/featuredPosts/f1.jpg";
import f2 from "../assets/featuredPosts/f2.jpg";
import f3 from "../assets/featuredPosts/f3.jpg";


const posts = [
  {
    img: f1,
    title: "Loudest à la Madison #1 (L'integral)",
    subtitle: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
  {
    img: f2,
    title: "Loudest à la Madison #1 (L'integral)",
    subtitle: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
  {
    img: f3,
    title: "Loudest à la Madison #1 (L'integral)",
    subtitle: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  },
];


function FeaturedPostsSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-20">
      {/* ÜST BAŞLIK */}
      <div className="text-center mb-12">
        <p className="text-xs md:text-sm text-blue-500 font-semibold">
          Practice Advice
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
          Featured Posts
        </h2>
        <p className="text-xs md:text-sm text-gray-500 mt-2 max-w-xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* KARTLAR - FLEX ONLY */}
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {posts.map((p, i) => (
          <div
            key={i}
            className="flex flex-col bg-white border border-gray-200 shadow-sm hover:shadow-md transition w-full md:w-[348px]"
          >
            {/* GÖRSEL + NEW BADGE */}
            <div className="relative w-full h-[300px]">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1">
                NEW
              </span>
            </div>

            {/* İÇERİK */}
            <div className="flex flex-col p-4 md:p-5 gap-3">
              {/* Google Trending New satırı */}
              <p className="text-xs text-gray-400">
                <span className="text-blue-500">Google</span>{" "}
                <span className="mx-1">•</span>
                <span>Trending</span>{" "}
                <span className="mx-1">•</span>
                <span>New</span>
              </p>

              {/* Başlık */}
              <h3 className="text-sm md:text-base font-semibold text-gray-900">
                {p.title}
              </h3>

              {/* Alt açıklama */}
              <p className="text-xs md:text-sm text-gray-500">
                {p.subtitle}
              </p>

              {/* Alt satır: tarih + yorum sayısı */}
              <div className="flex items-center justify-between text-[11px] md:text-xs text-gray-400 mt-2">
                <span>22 April 2021</span>
                <span>10 comments</span>
              </div>

              {/* Learn More */}
              <button className="mt-3 text-xs md:text-sm text-blue-500 font-semibold flex items-center gap-1">
                Learn More
                <span className="text-lg leading-none">›</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedPostsSection;
