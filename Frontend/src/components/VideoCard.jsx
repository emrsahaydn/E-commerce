export default function VideoCard({ thumbnail }) {
  return (
    <section className="w-full flex justify-center py-10">
      <div
        className="
          relative 
          w-[307px] h-[316px]       /* Mobile ölçüleri */
          md:w-[989px] md:h-[540px] /* Desktop ölçüleri */
          rounded-2xl overflow-hidden
        "
      >
        {/* Video Thumbnail */}
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className="w-full h-full object-cover"
        />

        {/* Play Button */}
        <button
          className="
            absolute inset-0 m-auto
            w-16 h-16 md:w-92 md:h-92
            bg-[#23A6F0]     
            rounded-full 
            flex items-center justify-center
            shadow-lg
          "
        >
          {/* Play ikonu */}
          <span
            className="
              ml-1
              w-0 h-0
              border-t-[10px] border-b-[10px] border-l-[16px]
              md:border-t-[12px] md:border-b-[12px] md:border-l-[20px]
              border-t-transparent border-b-transparent border-l-white
            "
          />
        </button>
      </div>
    </section>
  );
}
