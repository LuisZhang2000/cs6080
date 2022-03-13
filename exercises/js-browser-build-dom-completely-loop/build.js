const body = document.body;
const div = document.createElement('div');
const p_text = ['Hello there,', 'I am a llama, hear my sirens roar:'];
const li_text = ['The', 'Duck', 'Lemonade', 'Stand'];

for (let i = 0; i < p_text.length; i++) {
    let p = document.createElement('p');
    let text = document.createTextNode(p_text[i]);
    p.appendChild(text);
    div.appendChild(p);
}

const ul = document.createElement('ul');

for (let i = 0; i < li_text.length; i++) {
    let li = document.createElement('li');
    let text = document.createTextNode(li_text[i]);
    li.appendChild(text);
    ul.appendChild(li);
}

div.append(ul);

body.appendChild(div);
