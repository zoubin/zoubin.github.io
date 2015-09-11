# New blog repo

## 基本配置
```bash
# Create repo on github and clone it to local disk

cd reading
hexo init
npm i
npm i --save hexo-deployer-git hexo-generator-feed

cp ../engineering/_config.yml ./

```

## 主题配置

```bash

# add `themes/` to `.gitignore`
cd themes
ln -s ../../tranquilpeak  # enable common theme

hexo new page "all-categories"
hexo new page "all-tags"
hexo new page "all-archives"

```

source/all-categories/index.md
```
title: "all-categories"
layout: "all-categories"
---
```

source/all-tags/index.md
```
title: "all-tags"
layout: "all-tags"
---
```

source/all-archives/index.md
```
title: "all-archives"
layout: "all-archives"
---
```

