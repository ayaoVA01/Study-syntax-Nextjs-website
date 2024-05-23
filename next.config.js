/** @type {import('next').NextConfig} */



// config the domain name like https / http when use image online
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'img.freepik.com'
            }
        ]
    }
}

module.exports = nextConfig
