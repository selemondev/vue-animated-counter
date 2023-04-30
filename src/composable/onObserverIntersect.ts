export const useIntersect = (
    elementToWatch: HTMLElement,
    callback: (arg: Element) => IntersectionObserverEntry,
    once: true,
    options = { threshold: 1.0 }
) => {
    const observer: IntersectionObserver = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
            callback(entry.target);

            if (once) {
                observer.unobserve(entry.target)
            }
        }
    }, options);

    observer.observe(elementToWatch);
    return observer;
}