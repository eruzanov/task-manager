export const isNotPassedTask = (taskStatusId: string) => {
    return taskStatusId !== "5f33" && taskStatusId !== "73d5" // closed and done
}