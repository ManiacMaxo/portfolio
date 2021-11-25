module.exports = {
    rewrites() {
        return [
            {
                source: '/studio/:path*',
                destination:
                    process.env.NODE_ENV === 'development'
                        ? 'http://localhost:3333/studio/:path*'
                        : '/studio/index.html'
            }
        ]
    }
}
