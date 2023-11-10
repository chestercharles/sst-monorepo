export function lazy(callback) {
    let loaded = false;
    let result;
    return () => {
        if (!loaded) {
            result = callback();
            loaded = true;
        }
        return result;
    };
}
