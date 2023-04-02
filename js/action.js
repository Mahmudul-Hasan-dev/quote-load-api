const loadquote = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => showdata(data))
}

const quotefield = document.getElementById('quote-body')
const showdata = (data) => {
    // console.log(quote)
    const div = document.createElement('div');
    div.innerText = `${data.quote}`
    quotefield.appendChild(div);
}
loadquote();