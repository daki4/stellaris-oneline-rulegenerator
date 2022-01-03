function oneline(text, output) {
    text = text.split('');
    text.map(x => console.log(x));
    let o_text = text.map(x => x.replace('\n', '\\n')).join('');
    output.value = o_text;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert("Copied the text: " + text);
}