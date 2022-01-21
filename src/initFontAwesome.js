import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub, faGitlab  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

function initFontAwesome() {
    library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub, faGitlab, faEnvelope );
}
export default initFontAwesome;