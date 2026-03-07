import { archiveForwarder } from './modules/archive-fowarder';

const archiveForwarderHook = document.getElementById('archive-forwarder');

if (archiveForwarderHook instanceof HTMLDivElement) {
  archiveForwarder();
}
