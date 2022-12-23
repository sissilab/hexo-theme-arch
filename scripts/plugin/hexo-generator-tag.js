/* Based on https://github.com/hexojs/hexo-generator-tag */
'use strict';

const pagination = require('hexo-pagination');

hexo.config.tag_generator = Object.assign({
  per_page: hexo.config.per_page == null ? 10 : hexo.config.per_page
}, hexo.config.tag_generator);

function generateTag(locals) {
  const config = this.config;
  const langs = config.language.filter(lang => lang !== 'default');
  const perPage = config.tag_generator.per_page;
  const paginationDir = config.pagination_dir || 'page';
  const orderBy = config.tag_generator.order_by || '-date';
  const tags = locals.tags;

  const pages = tags.reduce((result, tag) => {
    if (!tag.length) return result;

    langs.forEach(lang => {
      result = result.concat(pagination(lang + '/' + tag.path,
        tag.posts.filter(post => lang == post.lang).sort(orderBy),
        {
          perPage: perPage,
          layout: ['tag', 'archive', 'index'],
          format: paginationDir + '/%d/',
          data: {
            tag: tag.name
          }
        }));
    });

    return result;
  }, []);

  return pages;
};

hexo.extend.generator.register('tag', generateTag);
