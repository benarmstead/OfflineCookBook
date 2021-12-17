const CACHE_VERSION = 1;

const all_direcs = [
'/SimpleCookBook/404.html',
'/SimpleCookBook/css',
'/SimpleCookBook/css/main.min.css',
'/SimpleCookBook/favicon',
'/SimpleCookBook/favicon/ms-icon-310x310.png',
'/SimpleCookBook/favicon/android-icon-192x192.png',
'/SimpleCookBook/favicon/favicon-96x96.png',
'/SimpleCookBook/favicon/favicon-32x32.png',
'/SimpleCookBook/favicon/apple-icon-76x76.png',
'/SimpleCookBook/favicon/favicon.ico',
'/SimpleCookBook/favicon/android-icon-96x96.png',
'/SimpleCookBook/favicon/android-icon-144x144.png',
'/SimpleCookBook/favicon/favicon-16x16.png',
'/SimpleCookBook/favicon/apple-icon-72x72.png',
'/SimpleCookBook/favicon/android-icon-72x72.png',
'/SimpleCookBook/favicon/apple-icon-precomposed.png',
'/SimpleCookBook/favicon/apple-icon-152x152.png',
'/SimpleCookBook/favicon/apple-icon-114x114.png',
'/SimpleCookBook/favicon/apple-icon-120x120.png',
'/SimpleCookBook/favicon/android-icon-36x36.png',
'/SimpleCookBook/favicon/apple-icon.png',
'/SimpleCookBook/favicon/android-icon-512x512.png',
'/SimpleCookBook/favicon/apple-icon-180x180.png',
'/SimpleCookBook/favicon/apple-icon-57x57.png',
'/SimpleCookBook/favicon/apple-icon-60x60.png',
'/SimpleCookBook/favicon/ms-icon-150x150.png',
'/SimpleCookBook/favicon/ms-icon-144x144.png',
'/SimpleCookBook/favicon/android-icon-48x48.png',
'/SimpleCookBook/favicon/ms-icon-70x70.png',
'/SimpleCookBook/favicon/apple-icon-144x144.png',
'/SimpleCookBook/fonts',
'/SimpleCookBook/fonts/muli-latin-700italic.woff',
'/SimpleCookBook/fonts/montserrat-bold.woff',
'/SimpleCookBook/fonts/muli-latin-400.woff2',
'/SimpleCookBook/fonts/muli-latin-600italic.woff',
'/SimpleCookBook/fonts/muli-latin-800italic.woff',
'/SimpleCookBook/fonts/muli-latin-300italic.woff',
'/SimpleCookBook/fonts/muli-latin-900.woff',
'/SimpleCookBook/fonts/muli-latin-200italic.woff2',
'/SimpleCookBook/fonts/muli-latin-900.woff2',
'/SimpleCookBook/fonts/montserrat-regular.woff',
'/SimpleCookBook/fonts/montserrat-bold.woff2',
'/SimpleCookBook/fonts/muli-latin-300italic.woff2',
'/SimpleCookBook/fonts/muli-latin-800.woff2',
'/SimpleCookBook/fonts/muli-latin-200.woff',
'/SimpleCookBook/fonts/muli-latin-800.woff',
'/SimpleCookBook/fonts/muli-latin-300.woff2',
'/SimpleCookBook/fonts/montserrat-regular.woff2',
'/SimpleCookBook/fonts/muli-latin-300.woff',
'/SimpleCookBook/fonts/muli-latin-600.woff',
'/SimpleCookBook/fonts/muli-latin-800italic.woff2',
'/SimpleCookBook/fonts/muli-latin-200italic.woff',
'/SimpleCookBook/fonts/muli-latin-900italic.woff2',
'/SimpleCookBook/fonts/muli-latin-600italic.woff2',
'/SimpleCookBook/fonts/muli-latin-400italic.woff',
'/SimpleCookBook/fonts/muli-latin-400.woff',
'/SimpleCookBook/fonts/montserrat-black.woff2',
'/SimpleCookBook/fonts/montserrat-black.woff',
'/SimpleCookBook/fonts/muli-latin-400italic.woff2',
'/SimpleCookBook/fonts/muli-latin-200.woff2',
'/SimpleCookBook/fonts/muli-latin-700.woff2',
'/SimpleCookBook/fonts/muli-latin-900italic.woff',
'/SimpleCookBook/fonts/muli-latin-700italic.woff2',
'/SimpleCookBook/fonts/muli-latin-600.woff2',
'/SimpleCookBook/fonts/muli-latin-700.woff',
'/SimpleCookBook/images',
'/SimpleCookBook/images/landscape.jpg',
'/SimpleCookBook/images/mountains.jpg',
'/SimpleCookBook/images/mountain.jpg',
'/SimpleCookBook/images/header',
'/SimpleCookBook/images/header/background.jpg',
'/SimpleCookBook/images/section',
'/SimpleCookBook/images/section/keyboard.png',
'/SimpleCookBook/images/section/root-server.png',
'/SimpleCookBook/images/section/processor.png',
'/SimpleCookBook/index.html',
'/SimpleCookBook/index.json',
'/SimpleCookBook/index.xml',
'/SimpleCookBook/js',
'/SimpleCookBook/js/lazysizes.min.31dd6a2d3a1ec0f78a8df007535cf23f03aeb5c70f026e6d6a19dac3b3acc340.js',
'/SimpleCookBook/js/fuse.min.94c78ad70b02749822921660cf4e9f0b3701bc0680c421afb784a78228de0275.js',
'/SimpleCookBook/js/enquire.min.dfb99dee1e029d51d6cfb672d847929890b1585402de17f5ed092edd72a688b4.js',
'/SimpleCookBook/js/helper',
'/SimpleCookBook/js/helper/fadeinout.min.js',
'/SimpleCookBook/js/helper/getParents.min.js',
'/SimpleCookBook/js/helper/closest.min.js',
'/SimpleCookBook/js/helper/fadeinout.min.93a331f96194789a542f33690bbe4f0c102c7e78ffc018217f5a1c33010bad91.js',
'/SimpleCookBook/js/helper/getParents.min.1618c696be7c98933f9a92677f518b512a74e55bdbb976b09936b4182e93181b.js',
'/SimpleCookBook/js/helper/prop.min.js',
'/SimpleCookBook/js/helper/prev.min.js',
'/SimpleCookBook/logo.png',
'/SimpleCookBook/manifest.json',
'/SimpleCookBook/public',
'/SimpleCookBook/public/js',
'/SimpleCookBook/public/js/lazysizes.min.31dd6a2d3a1ec0f78a8df007535cf23f03aeb5c70f026e6d6a19dac3b3acc340.js',
'/SimpleCookBook/public/js/fuse.min.94c78ad70b02749822921660cf4e9f0b3701bc0680c421afb784a78228de0275.js',
'/SimpleCookBook/public/js/enquire.min.dfb99dee1e029d51d6cfb672d847929890b1585402de17f5ed092edd72a688b4.js',
'/SimpleCookBook/public/js/helper',
'/SimpleCookBook/public/js/helper/fadeinout.min.js',
'/SimpleCookBook/public/js/helper/getParents.min.js',
'/SimpleCookBook/public/js/helper/closest.min.js',
'/SimpleCookBook/public/js/helper/fadeinout.min.93a331f96194789a542f33690bbe4f0c102c7e78ffc018217f5a1c33010bad91.js',
'/SimpleCookBook/public/js/helper/getParents.min.1618c696be7c98933f9a92677f518b512a74e55bdbb976b09936b4182e93181b.js',
'/SimpleCookBook/public/js/helper/prop.min.js',
'/SimpleCookBook/public/js/helper/prev.min.js',
'/SimpleCookBook/public/favicon',
'/SimpleCookBook/public/favicon/ms-icon-310x310.png',
'/SimpleCookBook/public/favicon/android-icon-192x192.png',
'/SimpleCookBook/public/favicon/favicon-96x96.png',
'/SimpleCookBook/public/favicon/favicon-32x32.png',
'/SimpleCookBook/public/favicon/apple-icon-76x76.png',
'/SimpleCookBook/public/favicon/favicon.ico',
'/SimpleCookBook/public/favicon/android-icon-96x96.png',
'/SimpleCookBook/public/favicon/android-icon-144x144.png',
'/SimpleCookBook/public/favicon/favicon-16x16.png',
'/SimpleCookBook/public/favicon/apple-icon-72x72.png',
'/SimpleCookBook/public/favicon/android-icon-72x72.png',
'/SimpleCookBook/public/favicon/apple-icon-precomposed.png',
'/SimpleCookBook/public/favicon/apple-icon-152x152.png',
'/SimpleCookBook/public/favicon/apple-icon-114x114.png',
'/SimpleCookBook/public/favicon/apple-icon-120x120.png',
'/SimpleCookBook/public/favicon/android-icon-36x36.png',
'/SimpleCookBook/public/favicon/apple-icon.png',
'/SimpleCookBook/public/favicon/android-icon-512x512.png',
'/SimpleCookBook/public/favicon/apple-icon-180x180.png',
'/SimpleCookBook/public/favicon/apple-icon-57x57.png',
'/SimpleCookBook/public/favicon/apple-icon-60x60.png',
'/SimpleCookBook/public/favicon/ms-icon-150x150.png',
'/SimpleCookBook/public/favicon/ms-icon-144x144.png',
'/SimpleCookBook/public/favicon/android-icon-48x48.png',
'/SimpleCookBook/public/favicon/ms-icon-70x70.png',
'/SimpleCookBook/public/favicon/apple-icon-144x144.png',
'/SimpleCookBook/public/css',
'/SimpleCookBook/public/css/main.min.css',
'/SimpleCookBook/public/sitemap.xml',
'/SimpleCookBook/public/images',
'/SimpleCookBook/public/images/landscape.jpg',
'/SimpleCookBook/public/images/mountains.jpg',
'/SimpleCookBook/public/images/mountain.jpg',
'/SimpleCookBook/public/images/header',
'/SimpleCookBook/public/images/header/background.jpg',
'/SimpleCookBook/public/images/section',
'/SimpleCookBook/public/images/section/keyboard.png',
'/SimpleCookBook/public/images/section/root-server.png',
'/SimpleCookBook/public/images/section/processor.png',
'/SimpleCookBook/public/recipes',
'/SimpleCookBook/public/recipes/category2',
'/SimpleCookBook/public/recipes/category2/test1',
'/SimpleCookBook/public/recipes/category2/test1/index.html',
'/SimpleCookBook/public/recipes/category2/index.xml',
'/SimpleCookBook/public/recipes/category2/index.html',
'/SimpleCookBook/public/recipes/index.xml',
'/SimpleCookBook/public/recipes/category1',
'/SimpleCookBook/public/recipes/category1/test1',
'/SimpleCookBook/public/recipes/category1/test1/index.html',
'/SimpleCookBook/public/recipes/category1/index.xml',
'/SimpleCookBook/public/recipes/category1/index.html',
'/SimpleCookBook/public/recipes/index.html',
'/SimpleCookBook/public/sw.js',
'/SimpleCookBook/public/fonts',
'/SimpleCookBook/public/fonts/muli-latin-700italic.woff',
'/SimpleCookBook/public/fonts/montserrat-bold.woff',
'/SimpleCookBook/public/fonts/muli-latin-400.woff2',
'/SimpleCookBook/public/fonts/muli-latin-600italic.woff',
'/SimpleCookBook/public/fonts/muli-latin-800italic.woff',
'/SimpleCookBook/public/fonts/muli-latin-300italic.woff',
'/SimpleCookBook/public/fonts/muli-latin-900.woff',
'/SimpleCookBook/public/fonts/muli-latin-200italic.woff2',
'/SimpleCookBook/public/fonts/muli-latin-900.woff2',
'/SimpleCookBook/public/fonts/montserrat-regular.woff',
'/SimpleCookBook/public/fonts/montserrat-bold.woff2',
'/SimpleCookBook/public/fonts/muli-latin-300italic.woff2',
'/SimpleCookBook/public/fonts/muli-latin-800.woff2',
'/SimpleCookBook/public/fonts/muli-latin-200.woff',
'/SimpleCookBook/public/fonts/muli-latin-800.woff',
'/SimpleCookBook/public/fonts/muli-latin-300.woff2',
'/SimpleCookBook/public/fonts/montserrat-regular.woff2',
'/SimpleCookBook/public/fonts/muli-latin-300.woff',
'/SimpleCookBook/public/fonts/muli-latin-600.woff',
'/SimpleCookBook/public/fonts/muli-latin-800italic.woff2',
'/SimpleCookBook/public/fonts/muli-latin-200italic.woff',
'/SimpleCookBook/public/fonts/muli-latin-900italic.woff2',
'/SimpleCookBook/public/fonts/muli-latin-600italic.woff2',
'/SimpleCookBook/public/fonts/muli-latin-400italic.woff',
'/SimpleCookBook/public/fonts/muli-latin-400.woff',
'/SimpleCookBook/public/fonts/montserrat-black.woff2',
'/SimpleCookBook/public/fonts/montserrat-black.woff',
'/SimpleCookBook/public/fonts/muli-latin-400italic.woff2',
'/SimpleCookBook/public/fonts/muli-latin-200.woff2',
'/SimpleCookBook/public/fonts/muli-latin-700.woff2',
'/SimpleCookBook/public/fonts/muli-latin-900italic.woff',
'/SimpleCookBook/public/fonts/muli-latin-700italic.woff2',
'/SimpleCookBook/public/fonts/muli-latin-600.woff2',
'/SimpleCookBook/public/fonts/muli-latin-700.woff',
'/SimpleCookBook/public/index.xml',
'/SimpleCookBook/public/index.json',
'/SimpleCookBook/public/404.html',
'/SimpleCookBook/public/logo.png',
'/SimpleCookBook/public/manifest.json',
'/SimpleCookBook/public/index.html',
'/SimpleCookBook/recipes',
'/SimpleCookBook/recipes/category2',
'/SimpleCookBook/recipes/category2/test1',
'/SimpleCookBook/recipes/category2/test1/index.html',
'/SimpleCookBook/recipes/category2/index.xml',
'/SimpleCookBook/recipes/category2/index.html',
'/SimpleCookBook/recipes/index.xml',
'/SimpleCookBook/recipes/category1',
'/SimpleCookBook/recipes/category1/test1',
'/SimpleCookBook/recipes/category1/test1/index.html',
'/SimpleCookBook/recipes/category1/index.xml',
'/SimpleCookBook/recipes/category1/index.html',
'/SimpleCookBook/recipes/index.html',
'/SimpleCookBook/sitemap.xml',
'/SimpleCookBook/sw.js',
]

const BASE_CACHE_FILES = all_direcs;
const OFFLINE_CACHE_FILES = all_direcs;
const NOT_FOUND_CACHE_FILES = all_direcs;

const OFFLINE_PAGE = '/offline/index.html';
const NOT_FOUND_PAGE = '/404.html';

const CACHE_VERSIONS = {
    assets: 'assets-v' + CACHE_VERSION,
    content: 'content-v' + CACHE_VERSION,
    offline: 'offline-v' + CACHE_VERSION,
    notFound: '404-v' + CACHE_VERSION,
};

// Define MAX_TTL's in SECONDS for specific file extensions
const MAX_TTL = {
    '/': 3600,
    html: 3600,
    json: 86400,
    js: 86400,
    css: 86400,
};

const CACHE_BLACKLIST = [
    (str) => {
        return !str.startsWith('https://benarmstead.co.uk/SimpleCookBook');
    },
];

const SUPPORTED_METHODS = [
    'GET',
];

/**
 * isBlackListed
 * @param {string} url
 * @returns {boolean}
 */
function isBlacklisted(url) {
    return (CACHE_BLACKLIST.length > 0) ? !CACHE_BLACKLIST.filter((rule) => {
        if(typeof rule === 'function') {
            return !rule(url);
        } else {
            return false;
        }
    }).length : false
}

/**
 * getFileExtension
 * @param {string} url
 * @returns {string}
 */
function getFileExtension(url) {
    let extension = url.split('.').reverse()[0].split('?')[0];
    return (extension.endsWith('/')) ? '/' : extension;
}

/**
 * getTTL
 * @param {string} url
 */
function getTTL(url) {
    if (typeof url === 'string') {
        let extension = getFileExtension(url);
        if (typeof MAX_TTL[extension] === 'number') {
            return MAX_TTL[extension];
        } else {
            return null;
        }
    } else {
        return null;
    }
}

/**
 * installServiceWorker
 * @returns {Promise}
 */
function installServiceWorker() {
    return Promise.all(
        [
            caches.open(CACHE_VERSIONS.assets)
                .then(
                    (cache) => {
                        return cache.addAll(BASE_CACHE_FILES);
                    }
                ),
            caches.open(CACHE_VERSIONS.offline)
                .then(
                    (cache) => {
                        return cache.addAll(OFFLINE_CACHE_FILES);
                    }
                ),
            caches.open(CACHE_VERSIONS.notFound)
                .then(
                    (cache) => {
                        return cache.addAll(NOT_FOUND_CACHE_FILES);
                    }
                )
        ]
    )
        .then(() => {
            return self.skipWaiting();
        });
}

/**
 * cleanupLegacyCache
 * @returns {Promise}
 */
function cleanupLegacyCache() {

    let currentCaches = Object.keys(CACHE_VERSIONS)
        .map(
            (key) => {
                return CACHE_VERSIONS[key];
            }
        );

    return new Promise(
        (resolve, reject) => {

            caches.keys()
                .then(
                    (keys) => {
                        return legacyKeys = keys.filter(
                            (key) => {
                                return !~currentCaches.indexOf(key);
                            }
                        );
                    }
                )
                .then(
                    (legacy) => {
                        if (legacy.length) {
                            Promise.all(
                                legacy.map(
                                    (legacyKey) => {
                                        return caches.delete(legacyKey)
                                    }
                                )
                            )
                                .then(
                                    () => {
                                        resolve()
                                    }
                                )
                                .catch(
                                    (err) => {
                                        reject(err);
                                    }
                                );
                        } else {
                            resolve();
                        }
                    }
                )
                .catch(
                    () => {
                        reject();
                    }
                );

        }
    );
}

function precacheUrl(url) {
    if(!isBlacklisted(url)) {
        caches.open(CACHE_VERSIONS.content)
            .then((cache) => {
                cache.match(url)
                    .then((response) => {
                        if(!response) {
                            return fetch(url)
                        } else {
                            // already in cache, nothing to do.
                            return null
                        }
                    })
                    .then((response) => {
                        if(response) {
                            return cache.put(url, response.clone());
                        } else {
                            return null;
                        }
                    });
            })
    }
}



self.addEventListener(
    'install', event => {
        event.waitUntil(
            Promise.all([
                installServiceWorker(),
                self.skipWaiting(),
            ])
        );
    }
);

// The activate handler takes care of cleaning up old caches.
self.addEventListener(
    'activate', event => {
        event.waitUntil(
            Promise.all(
                [
                    cleanupLegacyCache(),
                    self.clients.claim(),
                    self.skipWaiting(),
                ]
            )
                .catch(
                    (err) => {
                        event.skipWaiting();
                    }
                )
        );
    }
);

self.addEventListener(
    'fetch', event => {

        event.respondWith(
            caches.open(CACHE_VERSIONS.content)
                .then(
                    (cache) => {

                        return cache.match(event.request)
                            .then(
                                (response) => {

                                    if (response) {

                                        let headers = response.headers.entries();
                                        let date = null;

                                        for (let pair of headers) {
                                            if (pair[0] === 'date') {
                                                date = new Date(pair[1]);
                                            }
                                        }

                                        if (date) {
                                            let age = parseInt((new Date().getTime() - date.getTime()) / 1000);
                                            let ttl = getTTL(event.request.url);

                                            if (ttl && age > ttl) {

                                                return new Promise(
                                                    (resolve) => {

                                                        return fetch(event.request.clone())
                                                            .then(
                                                                (updatedResponse) => {
                                                                    if (updatedResponse) {
                                                                        cache.put(event.request, updatedResponse.clone());
                                                                        resolve(updatedResponse);
                                                                    } else {
                                                                        resolve(response)
                                                                    }
                                                                }
                                                            )
                                                            .catch(
                                                                () => {
                                                                    resolve(response);
                                                                }
                                                            );

                                                    }
                                                )
                                                    .catch(
                                                        (err) => {
                                                            return response;
                                                        }
                                                    );
                                            } else {
                                                return response;
                                            }

                                        } else {
                                            return response;
                                        }

                                    } else {
                                        return null;
                                    }
                                }
                            )
                            .then(
                                (response) => {
                                    if (response) {
                                        return response;
                                    } else {
                                        return fetch(event.request.clone())
                                            .then(
                                                (response) => {

                                                    if(response.status < 400) {
                                                        if (~SUPPORTED_METHODS.indexOf(event.request.method) && !isBlacklisted(event.request.url)) {
                                                            cache.put(event.request, response.clone());
                                                        }
                                                        return response;
                                                    } else {
                                                        return caches.open(CACHE_VERSIONS.notFound).then((cache) => {
                                                            return cache.match(NOT_FOUND_PAGE);
                                                        })
                                                    }
                                                }
                                            )
                                            .then((response) => {
                                                if(response) {
                                                    return response;
                                                }
                                            })
                                            .catch(
                                                () => {

                                                    return caches.open(CACHE_VERSIONS.offline)
                                                        .then(
                                                            (offlineCache) => {
                                                                return offlineCache.match(OFFLINE_PAGE)
                                                            }
                                                        )

                                                }
                                            );
                                    }
                                }
                            )
                            .catch(
                                (error) => {
                                    console.error('  Error in fetch handler:', error);
                                    throw error;
                                }
                            );
                    }
                )
        );

    }
);


self.addEventListener('message', (event) => {

    if(
        typeof event.data === 'object' &&
        typeof event.data.action === 'string'
    ) {
        switch(event.data.action) {
            case 'cache' :
                precacheUrl(event.data.url);
                break;
            default :
                console.log('Unknown action: ' + event.data.action);
                break;
        }
    }

});