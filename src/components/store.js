import { useState, useEffect } from 'react';

let storeState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
    const setState = useState(storeState)[1];

    const dispatch = actionIdentifier => {
        const newState = actions[actionIdentifier](storeState);
        storeState = {...storeState, ...newState};

        for(const listener of listeners) {
            listener(storeState);
        }
    }

    useEffect(() => {
        listeners.push(setState);
        return () => {
            listeners = listeners.filter(li => li !== setState)
        }
    }, [setState])

    return [storeState, dispatch];
}

export const initStore = () => {
    storeState = {
        loader: true
    };
    actions = {
        TURN_LOADER_ON: (state) => {
            return {loader: true}
        },
        TURN_LOADER_OFF: (state) => {
            return {loader: false}
        }
    };
}