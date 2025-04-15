function List({todos}) {
    if (!todos) {
        console.log("Empty todos...")
        return <p>Loading...</p>
    }

    if (todos.length === 0) {
        console.log("todos length = 0...")
        return <p>No items yet. Why not add some?</p>
    }

    const listItems = todos.map((todo, index) => (
        <li key={index}>{todo}</li>
    ));
    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default List;