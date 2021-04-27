const {dest, src} = require('gulp');
const GetGoogleFonts = require('get-google-fonts');

const fonts = async () => {
  const instance = new GetGoogleFonts({
    outputDir: './dist/fonts',
    cssFile: './fonts.css'
  });

  // Grabs fonts and CSS from google and puts in the public folder
  const result = await instance.download(
    'https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&family=Maitree:wght@400;700&display=swap'

  );

  return result;
};

module.exports = fonts;
