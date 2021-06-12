export const archiveForwarder = async () => {
  const url = new URL(location.href);

  url.hostname = `archive.${url.hostname}`;

  const { status } = fetch(url, { method: 'HEAD' });

  if (status === 200) {
    location.href = url.toString();
  }
};
