require("jquery")
require("popper.js")
require("bootstrap")

import UrlHelper from './url_helper.js';
import AttractLoop from './attract_loop.js';

const NewAttractLoop = new AttractLoop();
new UrlHelper();

document.addEventListener('DOMContentLoaded', NewAttractLoop.init())