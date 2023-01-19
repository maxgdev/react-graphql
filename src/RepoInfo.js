const RepoInfo = ({ repo }) => {

    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
                <p>
                    {repo.node.name} -:- 
                    {repo.node.id} -:- 
                    {repo.node.description}
                </p>
            </div>
        </li>
    );
}
export default RepoInfo;
