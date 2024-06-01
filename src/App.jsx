import PostCatalog from './components/PostCatalog';

const App = () => {
    return (
        <div>
            <header className="bg-primary text-white text-center py-3">
                <h1>Post Catalog</h1>
            </header>
            <main className="container my-4">
                <PostCatalog/>
            </main>
            <footer className="bg-light text-center py-3">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
