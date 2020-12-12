// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as path from 'path';
import * as vscode from 'vscode';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('netron.open', (resource: vscode.Uri) => {
            const panel = vscode.window.createWebviewPanel(
                'netron',
                'Netron',
                vscode.ViewColumn.One,
                {
                    enableScripts: true,
                    retainContextWhenHidden: true
                }
            );
			const indexPath = vscode.Uri.file(
				path.join(context.extensionPath, 'webview', 'index.html')
			);
			let html = fs.readFileSync(indexPath.fsPath, 'utf8');
			let lol = vscode.window.activeTextEditor?.document.fileName;
			if (resource !== undefined)
			{
				lol = resource.fsPath;
			}
			let modelData = Buffer.from(fs.readFileSync(lol!, 'utf8'), "binary").toString("base64");
			html = html.replace('%MODEL%', modelData);
			panel. webview.html = html;
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
