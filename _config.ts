import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import readingInfo from "lume/plugins/reading_info.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import date from "lume/plugins/date.ts";
import shiki from "https://deno.land/x/lume_shiki/mod.ts";

import tailwindConfig from "./tailwind.config.ts";

import Mono from "./src/_components/Mono.tsx";
import InlineIcon from "./src/_components/InlineIcon.tsx";
import VertSpacer from "./src/_components/VertSpacer.tsx";

const site = lume({
  src: "./src",
});

site.use(
  readingInfo({
    extensions: [".md", ".mdx", ".njk"],
  }),
);
site.use(jsx());
site.use(
  shiki({
    highlighter: {
      langs: ["c", "bash"],
      themes: ["ayu-dark"],
    },
    theme: "ayu-dark",
  }),
);
site.use(
  mdx({
    components: {
      Mono: Mono,
      InlineIcon: InlineIcon,
      VertSpacer: VertSpacer,
    },
  }),
);
site.use(robots());
site.use(sitemap());
site.use(
  tailwindcss({
    extensions: [".mdx", ".jsx", ".tsx", ".md", ".html", ".njx", ".vto"],
    options: tailwindConfig,
  }),
);
site.use(postcss());
site.use(nunjucks());
site.use(date());

site.copy("fonts", "fonts");
site.copy("favicon.png", "favicon.png");
site.copy("pictures", "pictures");

export default site;
