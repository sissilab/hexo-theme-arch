/* Based on https://github.com/wzpan/hexo-generator-search */
'use strict';

const nunjucks = require('nunjucks');
const pathFn = require('path');
const fs = require('fs');
const merge = require('utils-merge');

function generateSearchXml(locals) {
  const config = this.config;
  const searchConfig = config.search;
  const langs = config.language.filter(lang => lang !== 'default'); // [ 'zh-CN', 'en' ]

  const searchTmplSrc = searchConfig.template || pathFn.join(__dirname, '../../templates/search.xml');

  const env = new nunjucks.Environment();
  env.addFilter('uriencode', function (str) {
    return encodeURI(str);
  });
  env.addFilter('noControlChars', function (str) {
    return str && str.replace(/[\x00-\x1F\x7F]/g, '');
  });

  const searchTmpl = nunjucks.compile(fs.readFileSync(searchTmplSrc, 'utf8'), env);

  const template = searchTmpl;
  let searchfield = searchConfig.field;
  let content = searchConfig.content;
  if (content == undefined) content = true;

  var posts, pages;

  if (searchfield.trim() != '') {
    searchfield = searchfield.trim();
    if (searchfield == 'post') {
      posts = locals.posts.sort('-date');
    } else if (searchfield == 'page') {
      pages = locals.pages;
    } else {
      posts = locals.posts.sort('-date');
      pages = locals.pages;
    }
  } else {
    posts = locals.posts.sort('-date');
  }

  let rootURL;
  if (config.root == null) {
    rootURL = "/";
  } else {
    rootURL = config.root;
  }

  const result = [];
  langs.forEach(lang => {
    const langPosts = posts.filter(post => lang === post.lang);
    if (0 < langPosts.length) {
      const xml = template.render({
        config: config,
        posts: langPosts,
        pages: pages,
        content: content,
        url: rootURL
      });
      result.push({
        path: lang + '/' + searchConfig.path,
        data: xml
      });
    }
  });

  return result;
}

function generateSearchJson(locals) {
  const config = this.config;
  const searchConfig = config.search;
  let searchfield = searchConfig.field;
  let content = searchConfig.content;

  let posts, pages;

  if (searchfield.trim() != '') {
    searchfield = searchfield.trim();
    if (searchfield == 'post') {
      posts = locals.posts.sort('-date');
    } else if (searchfield == 'page') {
      pages = locals.pages;
    } else {
      posts = locals.posts.sort('-date');
      pages = locals.pages;
    }
  } else {
    posts = locals.posts.sort('-date');
  }

  let res = new Array()
  let index = 0

  if (posts) {
    posts.each(function (post) {
      if (post.indexing != undefined && !post.indexing) return;
      var temp_post = new Object()
      if (post.title) {
        temp_post.title = post.title
      }
      if (post.path) {
        temp_post.url = config.root + post.path
      }
      if (content != false && post._content) {
        temp_post.content = post._content
      }
      if (post.tags && post.tags.length > 0) {
        let tags = [];
        post.tags.forEach(function (tag) {
          tags.push(tag.name);
        });
        temp_post.tags = tags
      }
      if (post.categories && post.categories.length > 0) {
        let categories = [];
        post.categories.forEach(function (cate) {
          categories.push(cate.name);
        });
        temp_post.categories = categories
      }
      res[index] = temp_post;
      index += 1;
    });
  }
  if (pages) {
    pages.each(function (page) {
      if (page.indexing != undefined && !page.indexing) return;
      let temp_page = new Object()
      if (page.title) {
        temp_page.title = page.title
      }
      if (page.path) {
        temp_page.url = config.root + page.path
      }
      if (content != false && page._content) {
        temp_page.content = page._content
      }
      if (page.tags && page.tags.length > 0) {
        let tags = new Array()
        let tag_index = 0
        page.tags.each(function (tag) {
          tags[tag_index] = tag.name;
        });
        temp_page.tags = tags
      }
      if (page.categories && page.categories.length > 0) {
        temp_page.categories = []
        (page.categories.each || page.categories.forEach)(function (item) {
          temp_page.categories.push(item);
        });
      }
      res[index] = temp_page;
      index += 1;
    });
  }

  const json = JSON.stringify(res);

  return {
    path: searchConfig.path,
    data: json
  };
}

const config = hexo.config.search = merge({
  path: 'search.xml',
  field: 'post'
}, hexo.config.search);

// Set default search path
if (!config.path) {
  config.path = 'search.xml';
}

// Add extension name if don't have
if (!pathFn.extname(config.path)) {
  config.path += '.xml';
}

if (pathFn.extname(config.path) == '.xml') {
  hexo.extend.generator.register('xml', generateSearchXml);
}

if (pathFn.extname(config.path) == '.json') {
  hexo.extend.generator.register('json', generateSearchJson);
}
