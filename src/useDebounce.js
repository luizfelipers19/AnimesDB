import {useRef} from 'react';

export default function useDebounce(fn, delay){

    const timeoutRef = useRef(null);

        function debouncedFN(...args){
            window.clearTimeout();
            timeoutRef.current = window.setTimeout(()=> {
                fn(...args);
            }, delay);

                fn(...args);
        }
        return debouncedFN;
}