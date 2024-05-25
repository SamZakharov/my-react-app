const Item = ({id, task, onRemove}) => {
    const handleClick = (e) => {
        onRemove(e.target.id)
        console.log(e.target.id);
    }
    return (
        <div>
            <div className="row">
                <div className="col-auto">
                    <button type="button" id={id} className="btn btn-primary btn-sm" onClick={handleClick}>-
                    </button>
                </div>
                <div className="col">{task}</div>
            </div>
            <hr/>
        </div>
    );
}

export default Item;
