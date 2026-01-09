document.addEventListener('scroll', function (e) {
    const tocLinks = document.querySelectorAll('.toc a');
    if (tocLinks.length === 0) return;

    // 找到当前在屏幕顶部的标题
    const sections = Array.from(tocLinks).map(link => {
        return document.getElementById(decodeURI(link.getAttribute('href').substring(1)));
    }).filter(s => s !== null);

    let currentSection = sections[0];
    const scrollPos = window.scrollY + 120; // 这里的 120 是偏置值，根据你导航栏高度调整

    for (const section of sections) {
        if (scrollPos >= section.offsetTop) {
            currentSection = section;
        } else {
            break;
        }
    }

    // 给对应的目录项加类名
    tocLinks.forEach(link => {
        link.classList.remove('active');
        if (currentSection && link.getAttribute('href') === '#' + encodeURI(currentSection.id)) {
            link.classList.add('active');
        }
    });
}, { passive: true });