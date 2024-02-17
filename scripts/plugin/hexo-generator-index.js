/* Based on https://github.com/hexojs/hexo-generator-index */
'use strict';

const pagination = require('hexo-pagination');

hexo.config.index_generator = Object.assign({
  per_page: typeof hexo.config.per_page === 'undefined' ? 10 : hexo.config.per_page,
  order_by: '-date'
}, hexo.config.index_generator);

function generateIndex(locals) {
  const config = this.config;
  const langs = config.language.filter(lang => lang !== 'default');
  const posts = locals.posts.sort(config.index_generator.order_by);
  const results = [];

  posts.data.sort((a, b) => (b.sticky || 0) - (a.sticky || 0));

  const paginationDir = config.pagination_dir || 'page';
  const path = config.index_generator.path || '';

  results.push({
    path: path,
    layout: ['index', 'archive'],
    data: {}
  });

  langs.forEach(lang => {
    const langPosts = posts.filter(post => lang == post.lang);
    if (0 < langPosts.length) {
      results.push(...pagination(lang + '/' + path, langPosts, {
        perPage: config.index_generator.per_page,
        layout: ['index', 'archive'],
        format: paginationDir + '/%d/',
        data: {
          __index: true
        }
      }));
    }
  });

  console.log('>>> Generated index: ', results.map(r => r.path));
  return results;
};

hexo.extend.generator.register('index', generateIndex);
