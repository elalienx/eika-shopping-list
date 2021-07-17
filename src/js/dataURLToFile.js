export default async function dataURLToFile(dataURL, filename) {
  let array = dataURL.split(","),
    mime = array[0].match(/:(.*?);/)[1],
    bstr = atob(array[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}
