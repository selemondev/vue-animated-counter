import { ref } from 'vue';

export const useIntersectionObserver = () => {
    const observedElement = ref<HTMLElement | null>(null);
    const isIntersecting = ref<boolean>(false);

    const interCallback = (entries: IntersectionObserverEntry[]) => {
        if (entries.length > 0) {
            const [entry] = entries;
            isIntersecting.value = entry!.isIntersecting;
        }
    };

    const observer = new IntersectionObserver(interCallback, {
        root: null,
        threshold: 0.5,
        rootMargin: '0px'
    });

    return {
        observedElement,
        observer,
        isIntersecting
    };
};
