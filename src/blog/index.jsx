export const layout = "base.vto";
export const title = "blog | x3lfyn";
export const isBlogPage = true;
export const description = "yet another silly blog";

export default ({ search }, {}) => (
  <div>
    <br />
    {search.pages("post").map((post) => {
      return (
        <>
          <h4 className="my-1">
            <a href={post.url}>{post.title}</a>
          </h4>
          <div className="font-mono text-sm m-0 text-fg-dark">
            {post.date.toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}{" "}
            | {post.readingInfo.minutes} minutes to read
          </div>
          <p className="my-1">{post.description}</p>
        </>
      );
    })}
  </div>
);
