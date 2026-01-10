
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/output.css");
    eleventyConfig.addPassthroughCopy({ "./node_modules/preline/dist": "assets/js/preline" });
    eleventyConfig.addPassthroughCopy({
        "./node_modules/@fontsource-variable/inter/files": "files"
    });
    eleventyConfig.addPassthroughCopy({
        "./node_modules/@fontsource-variable/figtree/files": "files"
    });
      eleventyConfig.addPassthroughCopy({
        "./node_modules/@fontsource-variable/ibm-plex-sans/files": "files"
    });
          eleventyConfig.addPassthroughCopy({
        "./node_modules/@fontsource-variable/oswald/files": "files"
    });
              eleventyConfig.addPassthroughCopy({
        "./node_modules/@fontsource-variable/montserrat/files": "files"
    });
     eleventyConfig.addPassthroughCopy({
        "./node_modules/@fontsource/bebas-neue/files": "files"
    });
    eleventyConfig.addPassthroughCopy({ "./src/assets": "assets/" });
    eleventyConfig.addFilter("breadcrumbs", function (url) {
        if (!url) return [];

        let segments = url.replace(/^\/|\/$/g, "").split("/");

        let breadcrumbs = [{
            label: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house size-4 "><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
            url: "/"
        }];
        let path = "";

        segments.forEach((segment, index) => {
            path += "/" + segment;

            breadcrumbs.push({
                label: segment.replace(/-/g, " "),
                url: index === segments.length - 1 ? null : path + "/",
            });
        });

        return breadcrumbs;
    });

    eleventyConfig.addFilter('replaceAll', function (str, find, replace) {
        if (!str) return '';
        return str.split(find).join(replace);
    });

    return {
        pathPrefix: "/eleventy-ev/",
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "docs"
        }
    };
}