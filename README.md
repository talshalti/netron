# vscode-netron

This is an extension for Netron machine learning model visualisation inside VS Code. Simply download a model, for example from https://github.com/onnx/models, and click on it.

This extension is based directly on Netron's web hosted version: https://lutzroeder.github.io/netron/.

## Caveats

- Netron's JavaScript is used as-is from https://lutzroeder.github.io/netron/ and lightly monkey-patched (see index.html) to work inside VS Code's webview environment. Netron should be made more flexible to avoid any monkey-patching.
- Ideally, Netron's js files should be hosted locally inside the extension, however that would require more work to deal with VS Code's webview restrictions when loading css/js files from disk.
