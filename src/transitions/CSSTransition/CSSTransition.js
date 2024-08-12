import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {CSSTransition as ReactCSSTransition} from 'react-transition-group';

function CSSTransition({
                           show,
                           enter = '',
                           enterStart = '',
                           enterEnd = '',
                           leave = '',
                           leaveStart = '',
                           leaveEnd = '',
                           appear,
                           unmountOnExit,
                           tag = 'div',
                           children,
                           ...rest
                       }) {
    const enterClasses = enter.split(' ').filter((s) => s.length);
    const enterStartClasses = enterStart.split(' ').filter((s) => s.length);
    const enterEndClasses = enterEnd.split(' ').filter((s) => s.length);
    const leaveClasses = leave.split(' ').filter((s) => s.length);
    const leaveStartClasses = leaveStart.split(' ').filter((s) => s.length);
    const leaveEndClasses = leaveEnd.split(' ').filter((s) => s.length);
    const removeFromDom = unmountOnExit;

    function addClasses(node, classes) {
        classes.length && node.classList.add(...classes);
    }

    function removeClasses(node, classes) {
        classes.length && node.classList.remove(...classes);
    }

    const nodeRef = useRef(null);
    const Component = tag;

    return (
        <ReactCSSTransition
            appear={appear}
            nodeRef={nodeRef}
            unmountOnExit={removeFromDom}
            in={show}
            addEndListener={(done) => {
                nodeRef.current.addEventListener('transitionend', done, false);
            }}
            onEnter={() => {
                if (!removeFromDom) nodeRef.current.style.display = null;
                addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
            }}
            onEntering={() => {
                removeClasses(nodeRef.current, enterStartClasses);
                addClasses(nodeRef.current, enterEndClasses);
            }}
            onEntered={() => {
                removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
            }}
            onExit={() => {
                addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
            }}
            onExiting={() => {
                removeClasses(nodeRef.current, leaveStartClasses);
                addClasses(nodeRef.current, leaveEndClasses);
            }}
            onExited={() => {
                removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
                if (!removeFromDom) nodeRef.current.style.display = 'none';
            }}
        >
            <Component ref={nodeRef} {...rest} style={{display: !removeFromDom ? 'none' : null}}>{children}</Component>
        </ReactCSSTransition>
    );
}

CSSTransition.propTypes = {
    show: PropTypes.bool.isRequired,
    enter: PropTypes.string,
    enterStart: PropTypes.string,
    enterEnd: PropTypes.string,
    leave: PropTypes.string,
    leaveStart: PropTypes.string,
    leaveEnd: PropTypes.string,
    appear: PropTypes.bool,
    unmountOnExit: PropTypes.bool,
    tag: PropTypes.string,
    children: PropTypes.node,
};

export default CSSTransition;
