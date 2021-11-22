const YoutubeEmbed = ({ embedId, source, className }) => (
    <div className={"w-full "+className}>
      <iframe
        width="853"
        height="480"
        src={ embedId ? `https://www.youtube.com/embed/${embedId}` : source}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );

export default YoutubeEmbed;