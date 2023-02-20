import * as vscode from "vscode";
import { docs } from "./data/docs";
import {
  showDocSectionSelect,
  showDocSubsectionsSelect,
} from "./docSectionSelect";

async function handleDocSectionSelected(sectionName: string) {
  let selectedOptions: string[] = [];
  docs[sectionName].forEach((doc) => {
    selectedOptions.push(doc.name);
  });

  const apiSelected = await showDocSubsectionsSelect(selectedOptions);

  if (apiSelected === undefined) return;

  const doc = docs[sectionName].find((doc) => doc.name === apiSelected);

  if (doc === undefined) return;

  vscode.env.openExternal(vscode.Uri.parse(doc.uri));
}

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "overextended-doc-search.searchDocs",
    async () => {
      const pickedDocs = await showDocSectionSelect();

      if (pickedDocs === undefined) {
        vscode.window.showErrorMessage("Nothing was Selected");
        return;
      }

      handleDocSectionSelected(pickedDocs);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
