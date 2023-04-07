/* global hexo */

function isRoot() {
  return this.page.path === 'index.html';
}

function getLangs() {
  return this.config.language.filter(lang => lang !== 'default');
}

function switchLang(lang) {
  if (typeof lang === 'undefined') return '';
  if (this.is_root()) return this.url_for(lang);
  if (this.page.lang === lang) return '';
  const langReg = new RegExp(`^${this.page.lang}/`);
  if (langReg.test(this.page.path)) {
    return this.url_for(this.page.path.replace(langReg, `${lang}/`));
  }
  return '';
}

function hasPagePrev(currentPage) {
  const lang = currentPage.lang;
  let prevPage = currentPage.prev
  if (!lang)
    return true;
  while (prevPage && prevPage.lang !== lang) {
    prevPage = prevPage.prev;
  }
  return !!prevPage;
}

function hasPageNext(currentPage) {
  const lang = currentPage.lang;
  let nextPage = currentPage.next
  if (!lang)
    return true;
  while (nextPage && nextPage.lang !== lang) {
    nextPage = nextPage.next;
  }
  return !!nextPage;
}

function getPagePrevPath(currentPage) {
  const lang = currentPage.lang;
  let prevPage = currentPage.prev
  if (!lang)
    return prevPage?.path;
  while (prevPage && prevPage.lang !== lang) {
    prevPage = prevPage.prev;
  }
  return prevPage ? prevPage.path : '/' + lang;
}

function getPageNextPath(currentPage) {
  const lang = currentPage.lang;
  let nextPage = currentPage.next
  if (!lang)
    return nextPage?.path;
  while (nextPage && nextPage.lang !== lang) {
    nextPage = nextPage.next;
  }
  return nextPage ? nextPage.path : '/' + lang;
}

hexo.extend.helper.register('is_root', isRoot);
hexo.extend.helper.register('get_langs', getLangs);
hexo.extend.helper.register('switch_lang', switchLang);

hexo.extend.helper.register('has_page_prev', hasPagePrev);
hexo.extend.helper.register('has_page_next', hasPageNext);
hexo.extend.helper.register('get_page_prev_path', getPagePrevPath);
hexo.extend.helper.register('get_page_next_path', getPageNextPath);
