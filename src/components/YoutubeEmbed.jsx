const YoutubeEmbed = ({ embedId, source, className }) => (
    <div className={"w-full "+className}>
      <iframe
        width="100%"
        height="100%"
        src={ embedId ? `https://www.youtube.com/embed/${embedId}` : source}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );

export default YoutubeEmbed;