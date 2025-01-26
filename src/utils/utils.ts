export function debounce<T extends (...args: T[]) => void>(
    func: T,
    delay: number,
): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout | undefined;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}