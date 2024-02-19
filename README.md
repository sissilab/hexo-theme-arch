# hexo-theme-arch

> This theme was forked from [hexo-theme-oranges](https://github.com/zchengsite/hexo-theme-oranges) ([English](https://github.com/zchengsite/hexo-theme-oranges/blob/master/README.md) | [简体中文](https://github.com/zchengsite/hexo-theme-oranges/blob/master/README-zh.md)).

[Demo blog site](https://sissilab.top/hexo-theme-arch-sample/)

## Features

- [x] Original existing functions from [hexo-theme-oranges](README-oranges.md?tab=readme-ov-file#configuration)
- [x] Support the publication of articles in ==multiple languages==
- [x] Support accessing url with context path suffix

## Usage

1. Enter hexo root directory and download theme via git submodule.

```shell
git submodule add -b multilang https://github.com/sissilab/hexo-theme-arch.git themes/arch
```

To update the theme in the future, just execute the `git pull` command in the theme root directory.

2. Remove `hexo-generator-*` and add `hexo-pagination` from `package.json`.

```shell
npm uninstall hexo-generator-archive
npm uninstall hexo-generator-category
npm uninstall hexo-generator-index
npm uninstall hexo-generator-tag

npm install hexo-pagination --save
```

3. Activate theme.

`_config.yml` can refer to [hexo-theme-arch-sample](https://github.com/sissilab/hexo-theme-arch-sample/blob/master/_config.yml).

```shell
# Set theme to arch in _config.yml
theme: arch
```

4. Configure theme.

Copy the `_config.yml` file in the theme folder to the blog root directory and rename it to `_config.arch.yml`.

`_config.arch.yml` can refer to [hexo-theme-arch-sample](https://github.com/sissilab/hexo-theme-arch-sample/blob/master/_config.arch.yml).

## Multiple Languages Guide

If you want to support the publication of articles in both <u>English (en)</u> and <u>Simplified Chinese (zh-CN)</u>, you can consider the following steps:

> Please find complete sample configuration in [hexo-theme-arch-sample](https://github.com/sissilab/hexo-theme-arch-sample).

1. Firstly follow the above [Usage](#Usage) to complete download and configuration of the theme.
2. Set `language: [en, zh-CN]` in `_config.yml`.
3. Enable navigation bar in `_config.arch.yml`. If you enable `Archives`, `Categories`, `Tags` or `About`, you need create the corresponding files:
    a. Enable `Categories`: 
    Create `source/en/categories/index.md` with the following content:
    ```markdown
    ---
    title: categories
    type: "categories"
    lang: en
    ---
    ```
    Create `source/zh-CN/categories/index.md` with the following content:
    ```markdown
    ---
    title: categories
    type: "categories"
    lang: zh-CN
    ---
    ```
    b. Enable `Tags`: 
    Create `source/en/tags/index.md` with the following content:
    ```markdown
    ---
    title: tags
    type: "tags"
    lang: en
    ---
    ```
    Create `source/zh-CN/tags/index.md` with the following content:
    ```markdown
    ---
    title: tags
    type: "tags"
    lang: zh-CN
    ---
    ```
    c. Enable `About`: 
    Create `source/en/about/index.md` with the following content:
    ```markdown
    ---
    title: about
    type: "about"
    lang: en
    ---
 
    Introduce yourself here!
    ```
    Create `source/zh-CN/about/index.md` with the following content:
    ```markdown
    ---
    title: about
    type: "about"
    lang: zh-CN
    ---
 
    在这里介绍你自己吧！
    ```
    d. Enable `Friends`: 
    Create `source/en/friends/index.md` with the following content:
    ```markdown
    ---
    title: friends
    type: "friends"
    lang: en
    ---
    ```
    Create `source/zh-CN/friends/index.md` with the following content:
    ```markdown
    ---
    title: friends
    type: "friends"
    lang: zh-CN
    ---
    ```
4. Add `post-en.md` and `post-zh-CN.md` under `scaffolds` folder.
    - `post-en.md` content:
    ```markdown
    ---
    title: {{ title }}
    lang: en
    date: {{ date }}
    tags: []
    categories: 
    ---

    ```
    - `post-zh-CN.md` content:
    ```markdown
    ---
    title: {{ title }}
    lang: zh-CN
    date: {{ date }}
    tags: []
    categories: 
    ---

    ```
5. Now you can create your posts based on the templates defined under `scaffolds` folder. If you want to create a post in both English version and Simplified Chinese version, you need run commands as follows:
    - Create a new post in English version: `hexo new post-en --path en/hello "Hello"`
    - Create a new post in Simplified Chinese version: `hexo new post-zh --path zh-CN/hello "Hello"`
6. Finally start your hexo service: `hexo s --debug`.

## Demo Screenshot

**English (en) Home page**:
![hexo-theme-arch-home-en.png](https://s2.loli.net/2024/02/17/64K2nQeVkHhcaEq.png)

**Chinese (zh-CN) Home page**:
![hexo-theme-arch-home-zh-CN.png](https://s2.loli.net/2024/02/17/ETQtzmcjPaZvibf.png)
