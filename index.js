var axios = require("axios");
var unshort = require("unshorten.it");

module.exports = async function(gag_id) {
  if (!gag_id) {
    var gag = await unshort("https://9gag.com/shuffle");
    var gag_id = gag.split("/").reverse()[0];
  }
  var headers = {
    'Host': 'api.9gag.com',
    'user-agent': '9GAG/6920200 (Xiaomi Redmi Note 7 Pro;Android 10)',
    '9gag-9gag_token': 'Y29tLm5pbmVnYWcuYW5kcm9pZC5hcHAqNzVqaXdmNGhw',
    '9gag-timestamp': '1605762948028',
    '9gag-app_id': 'com.ninegag.android.app',
    '9gag-device_uuid': 'v6-1605760737061-17c8efdf-00ea-42bf-8a09-2dc50b9c417a',
    '9gag-request-signature': '4721536ef9d0f73d237356f370e87e24e9019799',
    'x-package-id': 'com.ninegag.android.app',
    'x-package-version': '6920200',
    'x-device-uuid': 'v6-1605760737061-17c8efdf-00ea-42bf-8a09-2dc50b9c417a',
    'accept-encoding': 'gzip'
  };

  var rgag = await axios({
    url: 'https://api.9gag.com/v2/post?entryIds='+gag_id+'&entryTypes=animated%2Cphoto%2Cvideo%2Carticle',
    headers: headers
  });
  return rgag.data.data.posts[0];
}
