const addToBody = function () {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const spinningImg = document.createElement('div');
    spinningImg.setAttribute('id','spinning');
    
    const title = document.createElement('h1');
    title.setAttribute('id', 'pageTitle');
    title.textContent = "Weather App";

    header.appendChild(title);

    const userInput = document.createElement('input');
    userInput.setAttribute('type', 'text');
    userInput.setAttribute('id', 'userInput');
    userInput.setAttribute('placeholder', 'City');

    header.appendChild(userInput);

    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    container.appendChild(content);

    document.body.appendChild(header);
    document.body.appendChild(container);
    document.body.appendChild(spinningImg);
};

export { addToBody };