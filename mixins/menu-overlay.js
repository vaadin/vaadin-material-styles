import '../color.js';
import './overlay.js';
import { css, registerStyles } from '@vaadin/vaadin-themable-mixin/register-styles.js';
const menuOverlay = css`
`;
registerStyles('', menuOverlay, {moduleId: 'material-menu-overlay', include: ['material-overlay']});

export { menuOverlay };
