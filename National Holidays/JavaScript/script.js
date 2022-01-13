var items = document.querySelectorAll('li');
for (let i = 0; i < items.length; i ++) {
    if (i % 2 === 0) {
        var change = items[i];
        change.className = 'list-items-purple';
    }
}