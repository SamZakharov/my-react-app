import MarkdownEditor from './components/MarkdownEditor';

const App = () => {
    const handleContentChange = (content) => {
        console.log('Content changed:', content);
    };

    return (
        <div>
            <h1>Markdown Editor</h1>
            <MarkdownEditor onContentChange={handleContentChange}/>
        </div>
    );
};

export default App;
