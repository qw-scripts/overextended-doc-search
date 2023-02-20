import { window } from "vscode";

const availableDocs = [
  "ox_inventory",
  "oxmysql",
  "ox_lib",
  "ox_target",
  "ox_core",
];

export async function showDocSectionSelect() {
  const result = await window.showQuickPick(availableDocs, {
    placeHolder: "Select a Documentation Section",
    title: "Overextended Documentation Search",
  });

  return result;
}

export async function showDocSubsectionsSelect(docs: string[]) {
  const result = await window.showQuickPick(docs, {
    placeHolder: "Select an API to View",
    title: "Overextended Documentation Search",
  });

  return result;
}
