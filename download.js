const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');

const download = async (name) => {
  const file = fs.createWriteStream(name);
  const request = await https.get(
    `https://exclusible.mypinata.cloud/ipfs/QmazecMHaNN1SbfG1JTQfbv9fnNmcH77LDKExJYLhoU6HV/${name}`,
    function (response) {
      response.pipe(file);

      // after download completed close filestream
      file.on('finish', () => {
        file.close();
        console.log(`Download Completed ${name}`);
      });
    }
  );
};

module.exports = download;

// download('1.png');
