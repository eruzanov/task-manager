export const useColor = (statusId: string | undefined) => {
    switch (statusId) {
        case "819e":
            return "cyan";
        case "f7a2":
            return "blue";
        case "d6af":
            return "magenta";
        case "73d5":
            return "green";
        default:
            return "default";
    }
};
