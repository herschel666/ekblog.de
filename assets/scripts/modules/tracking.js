const TRACKER_URL = 'https://analytics.e5l.de/cctv.gif';

const TRACKER_ID =
  'ebc722246078b3a5588af466eb781b8944d306ef659e5ddb8d43383346e6f208_a064f4308cda5beebd28bec4ee89ef2e';

export const tracking = () => {
  const url = new URL(TRACKER_URL);
  const { pathname, search } = location;

  url.searchParams.append('id', TRACKER_ID);
  url.searchParams.append('resource', `${pathname}${search}`);
  url.searchParams.append('referrer', document.referrer);

  Object.assign(new Image(), { src: url.toString() });
};
