export const useIntersect = (
    elementToWatch: HTMLElement,
    callback: (arg0: Element) => IntersectionObserverEntry,
    outCallback = () => { },
    once: true,
    options = { threshold: 1.0 }
) => {
    const observer: IntersectionObserver = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
            callback(entry.target);

            if (once) {
                observer.unobserve(entry.target)
            }
        } else {
            //@ts-ignore
            outCallback(entry.target);
        }
    }, options);

    observer.observe(elementToWatch);
    return observer;
}