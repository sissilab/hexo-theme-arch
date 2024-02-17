/* Based on https://github.com/hexojs/hexo-generator-tag */
'use strict';

const pagination = require('hexo-pagination');

hexo.config.category_generator = Object.assign({
  per_page: typeof hexo.config.per_page === 'undefined' ? 10 : hexo.config.per_page
}, hexo.config.category_generator);

function generateCategory(locals) {
  const config = this.config;
  const langs = config.language.filter(lang => lang !== 'default');
  const perPage = config.category_generator.per_page;
  const paginationDir = config.pagination_dir || 'page';
  const orderBy = config.category_generator.order_by || '-date';
  const categories = locals.categories;

  const pages = categories.reduce((result, category) => {
    if (!category.length) return result;

    langs.forEach(lang => {
      result = result.concat(pagination(lang + '/' + category.path,
        category.posts.filter(post => lang == post.lang).sort(orderBy),
        {
          perPage,
          layout: ['category', 'archive', 'index'],
          format: paginationDir + '/%d/',
          data: {
            category: category.name
          }
        }));
    });

    return result;
  }, []);

  console.log('>>> Generated category: ', pages.map(p => p.path));
  return pages;
};

hexo.extend.generator.register('category', generateCategory);
