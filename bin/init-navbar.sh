#!/bin/bash

### This script is used to generate navbar config files for different languages. ###

SOURCE_DIR="source"
NAVBARS=("about" "categories" "friends" "tags")

if [ "$#" -eq 0 ]; then
    echo -e "Please specify language parameters: init-navbar.sh <lang 1> <lang 2> ... <lang n> \n e.g. init-navbar.sh en \n      init-navbar.sh en zh-CN"
    exit 1
fi

LANGS=()
for param in "$@"; do
    LANGS+=("$param")
done

if [ ! -d $SOURCE_DIR ]; then
    echo "Error: Directory '$SOURCE_DIR' does not exist in the current directory."
    exit 1
fi

for navbar in "${NAVBARS[@]}"; do
    for lang in "${LANGS[@]}"; do
        dir="$SOURCE_DIR/$lang/$navbar"
        echo "Creating the directory: $dir ..."
        mkdir -p $dir
        file="$dir/index.md"
        echo "Generating $file ..."
        cat > $file << EOL
---
title: $navbar
type: "$navbar"
lang: $lang
---
EOL
    done
done

echo "Successfully generated!"
