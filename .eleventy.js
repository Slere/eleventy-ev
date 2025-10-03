
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/output.css");
    eleventyConfig.addPassthroughCopy({ "./node_modules/preline/dist": "assets/js/preline" });
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

     eleventyConfig.addGlobalData("permalink", (data) => {
    if (data && data.page && data.page.filePathStem && !data.page.filePathStem.endsWith("index")) {
      return `${data.page.filePathStem}/index.html`;
    }
    return undefined;
  });
    return {
        pathPrefix: "/eleventy-ev/",
        dir: {
            input: "src",
            output: "docs"
        }
    };
}