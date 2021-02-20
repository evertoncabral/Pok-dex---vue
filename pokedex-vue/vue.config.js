module.exports = {
	lintOnSave: true,
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
                @import "@/styles/functions";
                @import "@/styles/colors";
                `,
			},
		},
	},
};
