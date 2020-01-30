export default function CheckImageUrl(url) {
    let testRegex = /^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png|bmp)$/i;
    if (testRegex.test(url)) {
      return true;
    } else return false;
  }