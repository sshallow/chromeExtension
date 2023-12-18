function extractWordsFromSearchQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    if (!query) return [];
    return query.split(/\s+/);
}

function displayWords(words) {
    // 寻找Google搜索结果页面的侧边栏区域
    const sidebar = document.getElementById('b_context');
    if (!sidebar) return;

    // 创建新的div来显示单词列表
    const wordList = document.createElement('div');
    wordList.style.margin = '-20px';
    wordList.style.padding = '20px';
    wordList.style.backgroundColor = '#f1f1f1';
    wordList.style.border = '1px solid #d4d4d4';
    wordList.innerHTML = `<strong>你的Notion:</strong><br>${words.join('<br>')}`;

    // 找到侧边栏中的第一个子元素
    const firstChild = sidebar.firstChild;

    // 将新创建的div插入为侧边栏的第一个子元素
    sidebar.insertBefore(wordList, firstChild);
}

const words = extractWordsFromSearchQuery();
if (words.length > 0) {
    displayWords(words);
}
