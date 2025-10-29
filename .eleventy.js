
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/output.css");
    eleventyConfig.addPassthroughCopy({ "./node_modules/preline/dist": "assets/js/preline" });
    eleventyConfig.addPassthroughCopy({
        "./node_modules/@fontsource-variable/inter/files": "files"
    });
    eleventyConfig.addPassthroughCopy({
        "./node_modules/@fontsource-variable/figtree/files": "files"
    });
    eleventyConfig.addPassthroughCopy({ "./src/assets": "assets/" });
    eleventyConfig.addFilter("breadcrumbs", function (url) {
        if (!url) return [];

        let segments = url.replace(/^\/|\/$/g, "").split("/");

        let breadcrumbs = [{ label: "Home", url: "/" }];
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
       // pathPrefix: "/eleventy-ev/",
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "docs"
        }
    };
}