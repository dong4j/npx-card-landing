#!/bin/bash

# 获取当前脚本的所在目录
SCRIPT_DIR=$(dirname "$(realpath "$0")")

cd "$SCRIPT_DIR" || exit 1

# 设置默认值
DEFAULT_SSH_ALIAS="m2"
DEFAULT_REMOTE_DIR="/Users/dong4j/Developer/Blog/npx-card-landing"
DEFAULT_LOCAL_DIR=".next"

# 检查参数，如果未提供则使用默认值
SSH_ALIAS="${1:-$DEFAULT_SSH_ALIAS}"       
REMOTE_DIR="${2:-$DEFAULT_REMOTE_DIR}"     
LOCAL_DIR="${3:-$DEFAULT_LOCAL_DIR}" 

rm -rf $DEFAULT_LOCAL_DIR && bun install && bun run build

rsync -avz --progress --delete \
  --exclude '.DS_Store' \
  --exclude '._*' \
  --exclude '__MACOSX' \
  "$LOCAL_DIR/" "$SSH_ALIAS:$REMOTE_DIR/$DEFAULT_LOCAL_DIR" > /dev/null 2>&1
  
rsync -avz --progress --delete "package.json" "$SSH_ALIAS:$REMOTE_DIR/"
rsync -avz --progress --delete "ecosystem.config.js" "$SSH_ALIAS:$REMOTE_DIR/"
rsync -avz --progress --delete ".env" "$SSH_ALIAS:$REMOTE_DIR/"

# 上传完成
echo "Upload complete."

# ssh "$SSH_ALIAS" "source ~/.nvm/nvm.sh && pm2 stop npx-card-landing && pm2 delete npx-card-landing && pm2 start $DEFAULT_REMOTE_DIR/ecosystem.config.js"
# if [ $? -ne 0 ]; then
#   echo "Error: Failed to reload server '$SSH_ALIAS'."
#   exit 1
# fi

echo "Server configuration successfully updated and reloaded on '$SSH_ALIAS'."