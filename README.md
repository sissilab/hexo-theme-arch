# hexo-theme-arch

> This is a light and concise Hexo theme, specifically designed to facilitate of the publication of posts in multiple languages. And it was built upon [hexo-theme-oranges](https://github.com/zchengsite/hexo-theme-oranges) ([English](https://github.com/zchengsite/hexo-theme-oranges/blob/master/README.md) | [简体中文](https://github.com/zchengsite/hexo-theme-oranges/blob/master/README-zh.md)).

- [Sample Blog Preview: sissilab.top/hexo-theme-arch-sample](https://sissilab.top/hexo-theme-arch-sample/)
- Please find complete sample configuration in [hexo-theme-arch-sample](https://github.com/sissilab/hexo-theme-arch-sample)

## Features

- [x] Original existing functions from [hexo-theme-oranges](README-oranges.md?tab=readme-ov-file#configuration)
- [x] Support the publication of posts in multiple languages
- [x] Add switch-language icon <svg t="1670338371149" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1377" width="16" height="16"><path d="M890.688 576h-124.672c-6.2912 100.928-27.264 192.7296-58.5216 266.5792 95.36-56.512 164.16-153.1072 183.1936-266.5792z m0-128c-19.0336-113.472-87.8336-210.0672-183.1936-266.5792 31.2512 73.856 52.2304 165.6576 58.528 266.5792h124.672zM133.312 448h124.672c6.2912-100.928 27.264-192.7296 58.5216-266.5792C221.1456 237.9328 152.3456 334.528 133.312 448z m0 128c19.0336 113.472 87.8336 210.0672 183.1936 266.5792-31.2512-73.856-52.2304-165.6576-58.528-266.5792H133.312z m504.416 0h-251.456c6.6944 93.6 27.8848 178.176 59.2 240.7936 16.0448 32.1088 33.4656 55.6416 49.5488 69.248 5.5488 4.6912 10.2336 7.6032 13.8688 9.088 1.7024 0.704 2.528 0.8704 3.1104 0.8704 0.576 0 1.408-0.1664 3.1104-0.864 3.6352-1.4912 8.32-4.4032 13.8688-9.0944 16.0832-13.6064 33.504-37.1392 49.5552-69.248 31.3088-62.6176 52.4992-147.1936 59.2-240.7936z m0-128c-6.6944-93.6-27.8848-178.176-59.2-240.7936-16.0448-32.1088-33.4656-55.6416-49.5488-69.248-5.5488-4.6912-10.2336-7.6032-13.8688-9.088-1.7024-0.704-2.528-0.8704-3.1104-0.8704-0.576 0-1.408 0.1664-3.1104 0.864-3.6352 1.4912-8.32 4.4032-13.8688 9.0944-16.0832 13.6064-33.504 37.1392-49.5552 69.248-31.3088 62.6176-52.4992 147.1936-59.2 240.7936h251.4624zM512 1024c-282.7712 0-512-229.2288-512-512S229.2288 0 512 0s512 229.2288 512 512-229.2288 512-512 512z" p-id="1378" fill="#666666"></path></svg> in the lower right corner 
- [x] Support accessing url with context path suffix

## Installation & Usage

### 0. Prerequisites

Before started, you need to make sure the Hexo environment is ready. For more information, please refer to [Hexo documentation - Installation](https://hexo.io/docs/#Installation).

If it's the first time building your blog, you could follow the following [setup](https://hexo.io/docs/setup) commands to initialize Hexo.

```sh
# Once Hexo is installed, run the following commands to initialize Hexo in the target <folder>, like 'hexo-myblog'.
$ hexo init hexo-myblog
# Enter the target directory "hexo-myblog", after it has been initialized successfully.
$ cd hexo-myblog
$ npm install
```

### 1. Downloading Theme

Now, if you have just followed the above instruction and already successfully built your blog locally with a sample blog, you need to turn the target directory 'hexo-myblog' into a Git repository via `git init`.

There're several ways to download this theme and associate it with your blog:

```sh
# Download hexo-theme-arch via git submodule.
$ git submodule add -b multilang https://github.com/sissilab/hexo-theme-arch.git themes/arch
```

or

You can directly download the source code and put it onto `themes/arch`.

### 2. Dependencies

```sh
# Remove hexo-generator-*: because these hexo generator plugins have been reimplemented in 'hexo-theme-arch'.
$ npm uninstall hexo-generator-archive hexo-generator-category hexo-generator-index hexo-generator-tag

# [Optional] Remove the default hexo theme 'hexo-theme-landscape'
$ npm uninstall hexo-theme-landscape

# Add 'hexo-pagination' and 'hexo-deployer-git'
$ npm install hexo-pagination --save
$ npm install hexo-deployer-git --save
```

### 3. Activating Theme in `_config.yml`

Modify the basic required modifications in primary configuration `_config.yml`:

```sh
# Set theme to hexo-theme-arch
theme: arch

# Choose the languages you want to publish in array format
# More supported languages are listed below: themes/arch/languages/
language: [en, zh-CN]

permalink: :lang/:title/

new_post_name: :lang/:title.md
```

### 4. Configuring Theme in `_config.arch.yml`

The configuration file for the theme is `_config.yml` in the repository. We often recommend that you could copy the theme's `_config.yml` to your blog's root directory as `_config.arch.yml` and configure it according to the documentation of configuration options therein (see [Alternate Theme Config](https://hexo.io/docs/configuration#Alternate-Theme-Config)).

### 5. Multiple Languages Setup for Navbar

In order to support multiple languages for navbar, you have to generate corresponding language config files in `source` folder. 

Let's take the case of the previous language config (`language: [en, zh-CN]`) in `_config.yml`. It means that we want to support `en` (English) and `zh-CN` (Chinese Simplified) at the same time. There are 2 ways to generate them. 

#### 5.1. Auto-generated via Script

For Linux, you could execute `themes/arch/bin/init-navbar.sh <lang 1> <lang 2> ... <lang n>` to automatically generate them.

```sh
# Generate the required config files for 'en' and 'zh-CN' in the source directory
$ themes/arch/bin/init-navbar.sh en zh-CN
```

#### 5.2. Manual Created

When you want to add a language, you need to create corresponding language folder in the `source` directory and all navbar config 
folders with respective `index.md`, like `source/{lang}/{navbar}/index.md`.

The all navbars for `{navbar}` include: `about`, `categories`, `friends`, `tags`.

The file content format of respective `index.md` is as follows:
```

---
title: {navbar}
type: "{navbar}"
lang: {lang}
---

```

For the case of `language: [en, zh-CN]`:

<details>
<summary>1. Enable **About**:</summary>
1. Create `source/en/about/index.md` with the following content:
    ```markdown
    ---
    title: about
    type: "about"
    lang: en
    ---

    Introduce yourself here!
    ```
2. Create `source/zh-CN/about/index.md` with the following content:
    ```markdown
    ---
    title: about
    type: "about"
    lang: zh-CN
    ---

    在这里介绍你自己吧！
    ```
</details>

<details>
<summary>2. Enable **Categories**: </summary>
1. Create `source/en/categories/index.md` with the following content:
    ```markdown
    ---
    title: categories
    type: "categories"
    lang: en
    ---

    ```
2. Create `source/zh-CN/categories/index.md` with the following content:
    ```markdown
    ---
    title: categories
    type: "categories"
    lang: zh-CN
    ---
    
    ```
</details>

<details>
<summary>3. Enable **Friends**: </summary>
1. Create `source/en/friends/index.md` with the following content:
    ```markdown
    ---
    title: friends
    type: "friends"
    lang: en
    ---
    
    ```
2. Create `source/zh-CN/friends/index.md` with the following content:
    ```markdown
    ---
    title: friends
    type: "friends"
    lang: zh-CN
    ---
    
    ```
</details>

<details>
<summary>4. Enable **Tags**: </summary>
1. Create `source/en/tags/index.md` with the following content:
    ```markdown
    ---
    title: tags
    type: "tags"
    lang: en
    ---
    
    ```
2. Create `source/zh-CN/tags/index.md` with the following content:
    ```markdown
    ---
    title: tags
    type: "tags"
    lang: zh-CN
    ---
    
    ```
</details>

### 6. Creating Posts in Different Languages

There are several ways to create your posts in different languages. You can choose whichever you prefer. It's important to keep in mind that you must keep identical file name in same path starting with corresponding language folder if you want to publish same posts in different languages.

Some cases' directory structure:

```
source/
└─ _posts/
    ├─ en/
    │   ├─ Hello-World.md
    │   └─ design-pattern/
    │       ├─ singleton.md
    │       └─ abstract-factory.md
    └─ zh-CN/
        ├─ Hello-World.md
        └─ design-pattern/
            ├─ singleton.md
            └─ abstract-factory.md
```

#### 6.1. Hexo Command

```sh
# => source/_posts/en/Hello-World.md
$ hexo new "Hello World" --lang en

# => source/_posts/zh-CN/Hello-World.md
$ hexo new "Hello World" --lang zh-CN
```

#### 6.2. Customized Scaffolds

1. Create `scaffolds/post-en.md` for `en` with the following content:
```markdown
---
title: {{ title }}
lang: en
date: {{ date }}
tags: []
categories: 
---

```
2. Create `scaffolds/post-zh-CN.md` for `zh-CN` with the following content:
```markdown
---
title: {{ title }}
lang: zh-CN
date: {{ date }}
tags: []
categories: 
---

```
3. Now you can create your posts based on the templates defined under `scaffolds` folder.
    1. Create a new post in `en` (English) version: `hexo new post-en --path en/{post file name} "{post title}"`, e.g. `hexo new post-en --path en/hello "Hello"`.
    2. Create a new post in `zh-CN` (Chinese Simplified) version: `hexo new post-zh-cn --path zh-CN/{post file name} "{post title}"`, e.g. `hexo new post-zh-cn --path zh-CN/hello "你好"`. (Tip: the template file name of `scaffolds` directory should be in lower case.)

### 7. Run

- `npm run dev` / `hexo s --debug`: Starts a local server in debug mode
- `npm run build` / `hexo clean && hexo generate`: Cleans the cache file (`db.json`) and generated files (`public`) → Generates static files
- `npm run clean` / `hexo clean`: Cleans the cache file (`db.json`) and generated files (`public`)
- `npm run deploy` / `hexo deploy`: Deploys your website

When we start a local server, we can access our Hexo with `http://localhost:4000/`:
- Accessing `http://localhost:4000` will redirect to `http://localhost:4000/en/` (as `en` is located in the 1st position of `language: [en, zh-CN]`)
- English site: `http://localhost:4000/en/`
- Chinese Simplified site: `http://localhost:4000/zh-CN/`

## Context Path

Hexo, by default, serves content on the root context path ("/"). When we run a local server, by default, this is at `http://localhost:4000/`. If we want to change the context path from "/" to "/hexo-theme-arch-sample", we can just modify the `url` in `_config.yml` from `url: http://example.com/` to `url: http://example.com/hexo-theme-arch-sample`, and restart the server again.

## Demo Screenshot

**English (en) Home page**:
![hexo-theme-arch-home-en.png](https://s2.loli.net/2024/02/17/64K2nQeVkHhcaEq.png)

**Chinese (zh-CN) Home page**:
![hexo-theme-arch-home-zh-CN.png](https://s2.loli.net/2024/02/17/ETQtzmcjPaZvibf.png)
