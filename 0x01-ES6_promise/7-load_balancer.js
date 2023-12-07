export default function loadBalancer(chinaDownload, USDownload) {
  // race() method returns the first Promise to settle
  return Promise.race([chinaDownload, USDownload]);
}
