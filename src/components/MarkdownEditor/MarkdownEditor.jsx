import React, {Component} from "react";
import {Editor} from "@toast-ui/editor";


class MarkdownEditor extends Component {
    constructor(props) {
        super(props);

        this.editorRef = React.createRef()
        this.state = {
            content: null,
        }

    }

    componentDidMount() {
        this.createMarkdown();
    }

    componentWillUnmount() {
        this.editor.destroy();
    }

    createMarkdown() {
        const {onContentChange} = this.props;
        this.editor = new Editor({
            el: this.editorRef.current,
            hideModeSwitch: true,
            height: '500px',
            events: {
                change: () => {
                    const content = this.editor.getMarkdown();
                    onContentChange(content);
                }
            }
        });
    }

    render() {
        return (
            <div ref={this.editorRef}></div>
        )
    }
}

export default MarkdownEditor;