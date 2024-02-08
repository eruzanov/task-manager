export const useColor = (statusId: string | undefined) => {
    switch (statusId) {
        case "819e":
            return "lime";
        case "f7a2":
            return "green";
        case "d6af":
            return "magenta";
        case "73d5":
            return "gold";
        default:
            return "default";
    }
};
