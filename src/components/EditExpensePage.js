import React from "react";

const EditExpensePage = (props) => {
    console.log(props);

    return (
        <div>
            <p>Editing expense with id of {props.match.params.id}</p>
        </div>
    );
}
export default EditExpensePage;