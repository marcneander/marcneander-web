export default function goodbyeTitle() {
    let originalTitle = document.title;
    const title = 'Bye!';

    window.onfocus = () => {
        document.title = originalTitle;
    };

    window.onblur = () => {
        originalTitle = document.title;

        document.title = title;
    };
}
