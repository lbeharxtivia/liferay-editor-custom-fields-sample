declare const Liferay;

import initFramework from '@liferay-editor-custom-fields/framework';

const init: () => void = () => {
    initFramework();
    Liferay.on('EditorCustomFields_WebContentFields_OnLoad', ()=>{});
    Liferay.on('EditorCustomFields_FragmenConfig_OnLoad', ()=>{});
    Liferay.on('EditorCustomFields_Image_OnChange', ()=>{});
}
export default init;
