import { archiveForwarder } from './modules/archive-fowarder';
import { tracking } from './modules/tracking';

const archiveForwarderHook = document.getElementById('archive-forwarder');

if (archiveForwarderHook instanceof HTMLDivElement) {
  archiveForwarder();
}

tracking();
