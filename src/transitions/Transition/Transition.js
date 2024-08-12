import React, {useContext, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import CSSTransition from '../CSSTransition';

const TransitionContext = React.createContext({
    parent: {},
});

function useIsInitialRender() {
    const isInitialRender = useRef(true);
    useEffect(() => {
        isInitialRender.current = false;
    }, []);
    return isInitialRender.current;
}

function Transition({show, appear, ...rest}) {
    const {parent} = useContext(TransitionContext);
    const isInitialRender = useIsInitialRender();
    const isChild = show === undefined;

    if (isChild) {
        return (
            <CSSTransition
                appear={parent.appear || !parent.isInitialRender}
                show={parent.show}
                {...rest}
            />
        );
    }

    return (
        <TransitionContext.Provider
            value={{
                parent: {
                    show,
                    isInitialRender,
                    appear,
                },
            }}
        >
            <CSSTransition appear={appear} show={show} {...rest} />
        </TransitionContext.Provider>
    );
}

Transition.propTypes = {
    show: PropTypes.bool,
    appear: PropTypes.bool,
};

export default Transition;
