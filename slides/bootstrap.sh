#!/usr/bin/env bash
set -exu

die () {
  echo >&2 "$@"
  exit 1
}

[ "$#" -eq 1 ] || die "1 argument required, $# provided. Please add the project name"

project_name=$1

# Update project name
sed -i '' -e "s/rs-slides-template/${project_name}/g" package.json

# Update project name
sed -i '' -e "s/rs-slides/${project_name}/g" public/index.html

# Install node dependencies
./.yarn/releases/yarn-3.2.3.cjs
