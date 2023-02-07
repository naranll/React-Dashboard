import { useEffect, useState } from "react"
// {
//     name: "display",
//     value: "17inc"
// }
// "spec": [
//     {
//       "height": "69 7/8 inches"
//     },
//     {
//       "width": "35 3/4 inches"
//     }
//   ],
export default function TestComp(data) {
    const [specs, setSpaces] = useState()
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (data.specs) {
            let keys = Object.keys(data.specs)
            let tempSpec = []
            keys.forEach(key => {
                tempSpec.push({
                    name: key,
                    value: data.specs.key
                })
            })
            setSpaces(tempSpec)
        }
    }, [])
    function saveChangeHandler(e) {
        e.preventDefault();
        const newProduct = {
            name: e.target.productName,
            price: e.target.productPrice,
            specs: specs
        }
        fetch("url", {
            method: "PUT",
            body: newProduct
        })
    }
    function specAddHandler(e) {
        e.preventDefault();
        setSpaces([...specs, {
            name: e.target.name.value,
            value: e.target.value.value
        }])
    }
    return <>
        <form onSubmit={saveChangeHandler}>
            <input type="text" name="productName" />
            <input type="text" name="productPrice" />
            {specs && specs.map((spec, index) => <>
                <label htmlFor="">{spec.name}</label>
                <input type="text" defaultValue={spec.value} />
            </>)}
            <button type="submit">Save changes</button>
        </form>
        <button onClick={() => setShowModal(true)}>Add Spec</button>
        <Modal show={modalShow}>
            <form onSubmit={specAddHandler}>
                <label htmlFor="name">Enter Spec Name</label>
                <input type="text" name="name" />
                <label htmlFor="value">Enter value</label>
                <input type="text" name="value" />
                <button type="submit">Save Spec</button>
            </form>

        </Modal>
    </>
}