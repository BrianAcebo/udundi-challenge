module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
            'vue-style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    additionalData: `@import "../assets/styles/variables.scss"`
                }
            }]
        }]
    },
    // plugin omitted
}