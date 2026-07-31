# 贡献教程

## 文件要求

- 每个软件一个 Markdown 文件，放在 `docs/tools/`。
- 文件名使用小写英文与连字符，例如 `my-tool.md`。
- 一级标题写软件名称，后续步骤使用二级、三级标题。
- 截图放在 `docs/assets/images/`，使用有意义的英文文件名。
- 示例令牌必须使用占位符，禁止提交真实密钥。

## 提交前检查

```bash
npm install
npm run docs:build
```

确认构建没有报错、图片可显示、站内链接可访问后再提交。
