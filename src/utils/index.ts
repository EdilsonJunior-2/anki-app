function indexLoop(arr: any[], index: number): number {
    if (index < arr.length - 1) return index + 1;
    return 0;
}

export {
    indexLoop
}