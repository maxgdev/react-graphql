const NavButtons = () => {
    return (
        <div className="d-flex justify-content-center my-2">
            <button
                className="btn mx-1 btn-sm btn-primary bi bi-arrow-left"
            >Previous
            </button>
            <button
                className="btn mx-1 btn-sm btn-primary bi bi-arrow-right"
            >Next
            </button>
        </div>
    );
};

export default NavButtons;