export let config = {
    html: {
        output: {
            prefix: '<li>',
            suffix: '</li>'
        },
        header: {
            prefix: '<h2>',
            suffix: '</h2>'
        },
        subhed: {
            prefix: '<h3>',
            suffix: '</h3>'
        }
    },
    wlsOrder: [
        'hockey',
        'baseball',
        'football',
        'google',
        'digital',
        'stream',
        'other',
        'side'
    ],
    wlsSide: {
        fileName: 'side',
        default: 'bp',
        options: [
            'bp',
            'tnr',
            'dev2',
            'js',
            'wp',
            'mlb',
            'travel',
            'money',
            'matchup mlb',
            'matchup cfb'
         ]
    },
    data: {
        baseDir: './data/',
        fileExt: '.json'
    } 
};
