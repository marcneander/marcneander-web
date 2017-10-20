const goodbyeTitle = () => {
    const originalTitle = document.title;
    const title = '✌️ Bye!';

    window.onfocus = () => {
        document.title = originalTitle;
    };

    window.onblur = () => {
        document.title = title;
    };
};

module.exports = goodbyeTitle;
