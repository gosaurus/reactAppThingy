function List({todos}) {
    if (!todos) {
        return <p>Loading...</p>
    }

    if (todos.length === 0) {
        return <p>No items yet. Why not add some?</p>
    }

    const listItems = todos.map((todo) => (
        <li key={crypto.randomUUID()}>{todo}</li>
    ));
    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default List;