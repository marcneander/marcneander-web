/* global gemini */
gemini.suite('page', suite => {
    suite
        .setUrl('/')
        .setCaptureElements('body')
        .before(actions => {
            actions.executeJS(function(window) {
                window.document.body.className = 'no-transition';
            });
        })
        .capture('plain');
});
