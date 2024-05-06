import React from 'react';
import cn from 'classnames';

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: props.opened
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            opened: !prevState.opened
        }));
    }

    render() {
        const { id, text } = this.props;
        const { opened } = this.state;

        return (
            <div>
                <p>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href={`#${id}`} role="button"
                       aria-expanded={opened} onClick={this.handleClick}>
                        {id}
                    </a>
                </p>
                <div className={cn("collapse multi-collapse", { "show": opened })} id={id}>
                    <div className="card card-body">
                        {text}
                    </div>
                </div>
            </div>
        );
    }
}

export default Collapse;
