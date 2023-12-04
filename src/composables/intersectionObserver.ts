import { ref } from 'vue';

export const useIntersectionObserver = () => {
    const observedElement = ref<HTMLDivElement | null>(null);
    const isIntersecting = ref<boolean>(false);

    const interOptions = (root: null | HTMLDivElement, threshold: number) => {
        return {
            root: root,
            threshold: threshold
        };
    };

    const interCallback = (entries: { isIntersecting: boolean; }[]) => {
        if (entries[0].isIntersecting) {
            isIntersecting.value = entries[0].isIntersecting;
        }
    };

    const observer = new IntersectionObserver(interCallback, interOptions(null, 0.5));

    return {
        observedElement,
        observer,
        isIntersecting
    };
};
