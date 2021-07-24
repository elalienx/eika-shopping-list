export default function askName() {
  const promptName = prompt("What's  the name of the shopping item?");

  // Guards if the user cancel o put an invalid value
  if (promptName === null) return null;
  if (promptName === undefined) return null;
  if (promptName.trim() === "") return null;

  return promptName.trim();
}
