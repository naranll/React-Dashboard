// export default function AddSpec() {
//     return <div>
//         <form>
//             <h3>Add spec modal header</h3>
//             <label className="spec-label">
//                 <input type="text" name="specName" placeholder="New Spec name" className="spec-label" onChange={(e) => setNewSpecName(e.target.value)} />
//                 <input type="text" name="specValue" placeholder="New Spec" onChange={(e) => setNewSpecProperty(e.target.value)} />
//             </label>
//         </form>
//     </div>
// }

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";

export default function AddSpec() {
    console.log("new spec showing");
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Add new spec</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formNewSpec">
                            <Form.Label>Spec name</Form.Label>
                            <Form.Control type="email" placeholder="Enter spec name" />
                            <Form.Label>Spec value</Form.Label>
                            <Form.Control type="email" placeholder="Enter spec value" />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}
