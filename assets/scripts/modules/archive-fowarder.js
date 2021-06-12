export const archiveForwarder = async () => {
  const url = new URL(location.href);

  url.hostname = `archive.${url.hostname}`;

  const { status } = fetch(url, { method: 'HEAD' });
  
  console.log('status', typeof status, status);
  console.log('url', url.toString());

  if (status === 200) {
    location.href = url.toString();
  }
};
