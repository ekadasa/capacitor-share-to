import { ShareTo } from 'capacitor-share-to';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    ShareTo.echo({ value: inputValue })
}
