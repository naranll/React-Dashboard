import "../../styles/modal.css";
import "../../styles/addspec.css";

export default function AddSpec({setShowAddSpec}) {

    console.log("new spec modal showing");

    function specAddHandler(e) {
        e.preventDefault();
        setSpaces([...specs, {
            name: e.target.name.value,
            value: e.target.value.value
        }])
    }

    return (
        <div className="addspec-container">
            <div className="addspec-content">
                <div className="modal-header">
                    <span className="close" onClick={() => setShowAddSpec(false)}>
                        <h6 className="cancelIcon">&times;</h6>
                    </span>
                    <h3>Add new spec</h3>
                </div>
                <div className="addspec-body">
                    <form onSubmit={specAddHandler}>
                        <label htmlFor="name">Enter Spec Name</label>
                        <input type="text" name="name" />
                        <label htmlFor="value">Enter value</label>
                        <input type="text" name="value" />
                        <button type="submit">Save Spec</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
