# hexo-theme-arch

> This theme was forked from [hexo-theme-oranges](https://github.com/zchengsite/hexo-theme-oranges) ([English](https://github.com/zchengsite/hexo-theme-oranges/blob/master/README.md) | [简体中文](https://github.com/zchengsite/hexo-theme-oranges/blob/master/README-zh.md)).

[Demo blog site](https://sissilab.top/hexo-theme-arch-sample/)

## Features

- [x] Original existing functions from [hexo-theme-oranges](README-oranges.md?tab=readme-ov-file#configuration)
- [x] Support the publication of articles in multiple languages
- [x] Add switch-language icon <svg t="1670338371149" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1377" width="16" height="16"><path d="M890.688 576h-124.672c-6.2912 100.928-27.264 192.7296-58.5216 266.5792 95.36-56.512 164.16-153.1072 183.1936-266.5792z m0-128c-19.0336-113.472-87.8336-210.0672-183.1936-266.5792 31.2512 73.856 52.2304 165.6576 58.528 266.5792h124.672zM133.312 448h124.672c6.2912-100.928 27.264-192.7296 58.5216-266.5792C221.1456 237.9328 152.3456 334.528 133.312 448z m0 128c19.0336 113.472 87.8336 210.0672 183.1936 266.5792-31.2512-73.856-52.2304-165.6576-58.528-266.5792H133.312z m504.416 0h-251.456c6.6944 93.6 27.8848 178.176 59.2 240.7936 16.0448 32.1088 33.4656 55.6416 49.5488 69.248 5.5488 4.6912 10.2336 7.6032 13.8688 9.088 1.7024 0.704 2.528 0.8704 3.1104 0.8704 0.576 0 1.408-0.1664 3.1104-0.864 3.6352-1.4912 8.32-4.4032 13.8688-9.0944 16.0832-13.6064 33.504-37.1392 49.5552-69.248 31.3088-62.6176 52.4992-147.1936 59.2-240.7936z m0-128c-6.6944-93.6-27.8848-178.176-59.2-240.7936-16.0448-32.1088-33.4656-55.6416-49.5488-69.248-5.5488-4.6912-10.2336-7.6032-13.8688-9.088-1.7024-0.704-2.528-0.8704-3.1104-0.8704-0.576 0-1.408 0.1664-3.1104 0.864-3.6352 1.4912-8.32 4.4032-13.8688 9.0944-16.0832 13.6064-33.504 37.1392-49.5552 69.248-31.3088 62.6176-52.4992 147.1936-59.2 240.7936h251.4624zM512 1024c-282.7712 0-512-229.2288-512-512S229.2288 0 512 0s512 229.2288 512 512-229.2288 512-512 512z" p-id="1378" fill="#666666"></path></svg> in the lower right corner 
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

> - Please find complete sample configuration in [hexo-theme-arch-sample](https://github.com/sissilab/hexo-theme-arch-sample).
> - Accessing http://localhost:4000/hexo-theme-arch-sample/ will redirect to http://localhost:4000/hexo-theme-arch-sample/en/ (as `en` is located in the 1st position of `language: [en, zh-CN]`)
> - English site: http://localhost:4000/hexo-theme-arch-sample/en/
> - Simplified Chinese site: http://localhost:4000/hexo-theme-arch-sample/zh-CN/

1. Firstly follow the above [Usage](#Usage) to complete download and configuration of the theme.
2. Set `language: [en, zh-CN]` in `_config.yml`.
3. Enable navigation bar in `_config.arch.yml`. If you enable `Categories`, `Tags`, `About` or `Friends`, you need create the corresponding files:
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

## Demo Screenshot2

**English (en) Home page**:
![hexo-theme-arch-home-en.png](https://s2.loli.net/2024/02/17/64K2nQeVkHhcaEq.png)

**Chinese (zh-CN) Home page**:
![hexo-theme-arch-home-zh-CN.png](https://s2.loli.net/2024/02/17/ETQtzmcjPaZvibf.png)
