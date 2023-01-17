var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/dd0lynx/dd0lynx.github.io', // Update to point to your repository  
        user: {
            name: 'Daniel D', // update to use your name
            email: 'danieldazure@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)