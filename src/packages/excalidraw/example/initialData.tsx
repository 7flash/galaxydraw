import { ExcalidrawElementSkeleton } from "../../../data/transform";
import { FileId } from "../../../element/types";

const elements: ExcalidrawElementSkeleton[] = [
  {
    type: "rectangle",
    x: 10,
    y: 10,
    strokeWidth: 2,
    id: "1",
  },
  {
    type: "diamond",
    x: 120,
    y: 20,
    backgroundColor: "#fff3bf",
    strokeWidth: 2,
    label: {
      text: "HELLO EXCALIDRAW",
      strokeColor: "#099268",
      fontSize: 30,
    },
    id: "2",
  },
  {
    type: "arrow",
    x: 100,
    y: 200,
    label: { text: "HELLO WORLD!!" },
    start: { type: "rectangle" },
    end: { type: "ellipse" },
  },
  {
    type: "image",
    x: 606.1042326312408,
    y: 153.57729779411773,
    width: 230,
    height: 230,
    fileId: "rocket" as FileId,
  },
  {
    type: "frame",
    children: ["1", "2"],
    name: "My frame",
  }
];
export default {
  elements,
  appState: { viewBackgroundColor: "#AFEEEE", currentItemFontFamily: 1 },
  scrollToContent: true,
  libraryItems: [],
};
