import * as path from "path";
import { getAllFiles } from "./getAllFiles";

export const getLocalModals = (exceptions: string[] = []) => {
    let localModalHandler = [];
    const modalHandlerPath = path.join(__dirname, '..', 'commands');

    const modalHandlerCategories = getAllFiles(modalHandlerPath, true);

    for (const modalHandlerCategory of modalHandlerCategories) {
        if (path.basename(modalHandlerCategory) !== 'modals') continue;
        const modalHandlerFiles = getAllFiles(modalHandlerCategory);

        for (const modalHandlerFile of modalHandlerFiles) {
            const modalHandlerObject = require(modalHandlerFile).default;

            if (exceptions.includes(modalHandlerObject.name)) continue;
            localModalHandler.push(modalHandlerObject);
        }
    }
    return localModalHandler;
};