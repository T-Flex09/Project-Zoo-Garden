fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });

['load', 'resize'].forEach(event => {
    window.addEventListener(event, () => {
        let currentYear = Date().split(' ')[3];
        document.getElementById('copyright-text').innerHTML = 
        '<p style=\"font-size: 1.2rem; color: #fff;\">' + 
        ((document.body.clientWidth > 1300) ? 'Copyright ' : '') + '&copy;' + currentYear + '</p>';
    });
});
