const { pluginPrismic } = require("eleventy-plugin-prismic")

module.exports = function(eleventyConfig) {
  /**
	 * @type {import("eleventy-plugin-prismic").PrismicPluginOptions}
	 */
	const prismicPluginOptions = {
		endpoint: "spookity",
	};

	eleventyConfig.addPlugin(pluginPrismic, prismicPluginOptions);

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: 'src',
    }
  }
}