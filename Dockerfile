# ベースイメージを指定
FROM node:13.14.0

# node.js の環境変数を定義する
# 本番環境では production
ENV NODE_ENV=development

# ディレクトリを移動する
WORKDIR /app