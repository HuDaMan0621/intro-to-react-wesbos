import React from 'react';

class StorePicker extends React.Component {
    render() {
        return (

            // <p> fish </p>
            <form action="" className="store-selector">
                {/* this is a store picker! */}
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store ➡️</button>
            </form>
        )
    }
}

export default StorePicker;