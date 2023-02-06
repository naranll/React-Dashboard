import axios from "axios";
import { useState } from "react";
import AddIcon from "../../svg/AddIcon";
import "../../styles/modal.css";

export default function Modal(prop) {
  const { data: product, setShowModal, setShowAddSpec } = prop;
  const [showNewSpec, setShowNewSpec] = useState(false);
  const [specNumber, setSpecNumber] = useState([]);
  //new spec constent saved at
  const [newSpecProperty, setNewSpecProperty] = useState();
  const [newSpecName, setNewSpecName] = useState();
  const [newSpecs, setNewSpecs] = useState([]);
  // let newSpecs = [];

  function getSpecInput() {
    let newSpec = {};
    newSpec[newSpecName] = newSpecProperty;
    console.log("newSpec: ", newSpec);
    setNewSpecs([...newSpecs, newSpec]);

    console.log("new specs:", newSpecs);
    return newSpecs;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const newObj = {
      name: e.target.productName.value,
      price: e.target.productPrice.value,
      stock: e.target.productStock.value,
      sale: e.target.productSale.value,
      category: e.target.category.value,
      spec: product.spec,
    };
    console.log("input newProduct:", newObj);

    if (product) {
      const editedObj = {
        id: product.id,
        ...newObj,
      };
      editProduct(editedObj);
    } else {
      addNew(newObj);
    }
  };

  function editProduct(product) {
    axios
      .patch(`http://localhost:2020/products/${product.id}`, product)
      .then((response) => {
        response && setShowModal(false);
      })
      .catch(() => console.log("error editing product"));
  }

  function addNew(newProduct) {
    axios
      .post("http://localhost:2020/products", newProduct)
      .then((response) => {
        console.log(response);
        response && setShowModal(false);
      })
      .catch(() => console.log("error posting axios"));
  }

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={() => setShowModal(false)}>
            <h6 className="cancelIcon">&times;</h6>
          </span>
          <h3>{product && product.name}</h3>
        </div>
        <div className="modal-body">
          <form onSubmit={submitHandler}>
            <div className="modal-img-container">
              <img
                src={product && product.image}
                className="modal-image-view"
              />
              <input
                type="text"
                name="productImage"
                defaultValue={product && product.image}
              />
            </div>
            <div className="modal-rows">
              <label>
                <b>Name</b>
                <input
                  type="text"
                  name="productName"
                  defaultValue={product && product.name}
                />
              </label>
              <label>
                <b>Price</b>
                <input
                  type="text"
                  name="productPrice"
                  defaultValue={product && product.price}
                />
              </label>
            </div>
            <div className="modal-rows">
              <label>
                <b>Stock</b>
                <input
                  type="text"
                  name="productStock"
                  defaultValue={product && product.stock}
                />
              </label>
              <label>
                <b>Sale</b>
                <input
                  type="text"
                  name="productSale"
                  defaultValue={product && product.sale}
                />
              </label>
            </div>

            <h4>Specs</h4>
            {product && product.spec && (
              <div className="modal-rows">
                {product.spec.map((specObject, i) => {
                  for (let prop in specObject) {
                    return (
                      <label key={i}>
                        <b>{prop}</b>
                        <input type="text" defaultValue={specObject[prop]} />
                      </label>
                    );
                  }
                })}
              </div>
            )}

            {/* <div>
                                    <h3>New spec</h3>
                                    {showNewSpec &&
                                        specNumber.map((n, i) => {
                                            return <AddSpec key={i} />;
                                            // return <NewSpec key={i} setNewSpecName={setNewSpecName} setNewSpecProperty={setNewSpecProperty} />;
                                        })}
                                </div> */}
            <div
              className="spec-add-btn"
              onClick={() => {
                // setShowNewSpec(true);
                setSpecNumber([...specNumber, ""]);
                // getSpecInput();
                setShowAddSpec(true);
              }}
            >
              <span>
                <AddIcon color={"black"} />
              </span>
              <input type="button" value="Add spec" className="spec-btn" />
            </div>
            <div>
              <h3>Choose category</h3>
              <select name="category" className="modal-category">
                <option value="Applainces">Appliances</option>
                <option value="Computers & Tablets">Computers & Tablets</option>
                <option value="Gaming console">Gaming console</option>
                <option value="Telescope">Telescope</option>
              </select>
            </div>
            <button type="submit" className="submit">
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// export function NewSpec(prop) {
//     const { setNewSpecName, setNewSpecProperty } = prop;

//     return (
//         <div className="modal-rows">
//             <label className="spec-label">
//                 <input type="text" name="specName" placeholder="New Spec name" className="spec-label" onChange={(e) => setNewSpecName(e.target.value)} />
//                 <input type="text" name="specValue" placeholder="New Spec" onChange={(e) => setNewSpecProperty(e.target.value)} />
//             </label>
//         </div>
//     );
// }
