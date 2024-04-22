import PropTypes from 'prop-types';

function List(props){

    const itemList = props.items;

    const category = props.category;

    // Sort by name alphabetically. Swap b and a in arrow function to reverse.
    itemList.sort((a, b)=> a.name.localeCompare(b.name))

    // Sort by calories numerically ascending. Swap b and a in arrow function for descending.
    itemList.sort((a, b)=> a.calories - b.calories)

    // Create a new list of fruits whose calories are < 100.
    const lowCalItems = itemList.filter(item => item.calories < 100);

    const listItems = itemList.map(
        // Each item should have a unique key
        item => <li key={item.id}>
                {item.name}: &nbsp;
                <b>{item.calories}</b>
            </li>
    )

    const listItemsLowCal = lowCalItems.map(
        lowCalItem => 
            <li key={lowCalItem.id}>
                {lowCalItem.name}: &nbsp;
                <b>{lowCalItem.calories}</b>
            </li>
    )

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
        
    )
}

List.propTypes = {
    category: PropTypes.string,
    // Array of objects
    items: PropTypes.arrayOf(
        // We have to define the shape of each object
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number
        })
    )
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List