module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-styled-components',
            options: {
                displayName: false
            }
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-layout',
            options: {
                component: require.resolve('./src/components/Layout')
            }
        },
        'gatsby-plugin-offline'
    ]
};
