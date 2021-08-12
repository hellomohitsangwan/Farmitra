// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Form, Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import Message from "../components/Message";
// import Loader from "../components/Loader";
// import FormContainer from "../components/FormContainer";
// import { listProductDetails, updateProduct } from "../actions/productActions";
// import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";
// // import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

// const ProductEditScreen = ({ match, history }) => {
//   const productId = match.params.id;

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState(0);
//   const [image, setImage] = useState("");
//   const [brand, setBrand] = useState("");
//   const [category, setCategory] = useState("");
//   const [countInStock, setCountInStock] = useState(0);
//   const [description, setDescription] = useState("");
//   const [uploading, setUploading] = useState(false);
//   const [images, setImages] = useState([]);
//   const dispatch = useDispatch();

//   const productDetails = useSelector((state) => state.productDetails);
//   const { loading, error, product } = productDetails;

//   const productUpdate = useSelector((state) => state.productUpdate);
//   const {
//     loading: loadingUpdate,
//     error: errorUpdate,
//     success: successUpdate,
//   } = productUpdate;

//   const userInfo = useSelector((state) => state.userInfo);

//   useEffect(() => {
//     // if (!userInfo || !userInfo.isAdmin) {
//     //   history.push("/login");
//     // }

//     if (successUpdate) {
//       dispatch({ type: PRODUCT_UPDATE_RESET });
//       history.push("/admin/productlist");
//     } else {
//       if (!product.name || product._id !== productId) {
//         dispatch(listProductDetails(productId));
//       } else {
//         setName(product.name);
//         setPrice(product.price);
//         setImage(product.image);
//         setBrand(product.brand);
//         setCategory(product.category);
//         setCountInStock(product.countInStock);
//         setDescription(product.description);
//       }
//     }
//   }, [dispatch, history, productId, product, successUpdate, userInfo]);

//   const onChange = (e) => {
//     const files = Array.from(e.target.files);

//     // setImagesPreview([]);
//     setImages([]);

//     files.forEach((file) => {
//       const reader = new FileReader();

//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           // setImagesPreview(oldArray => [...oldArray, reader.result])
//           setImages((oldArray) => [...oldArray, reader.result]);
//         }
//       };

//       reader.readAsDataURL(file);
//     });
//   };
//   const submitHandler = (e) => {
//     dispatch(
//       updateProduct(
//         {
//           _id: productId,
//           name,
//           price,
//           images,
//           brand,
//           category,
//           description,
//           countInStock,
//         },
//         productId
//       )
//     );
//   };

//   return (
//     <>
//       <Link to="/admin/productlist" className="btn btn-light my-3">
//         Go Back
//       </Link>
//       <FormContainer>
//         <h1>Edit Product</h1>
//         {loadingUpdate && <Loader />}
//         {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
//         {loading ? (
//           <Loader />
//         ) : error ? (
//           <Message variant="danger">{error}</Message>
//         ) : (
//           <Form onSubmit={submitHandler}>
//             <Form.Group controlId="name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="name"
//                 placeholder="Enter name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="price">
//               <Form.Label>Price</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Enter price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="image">
//               <Form.Label>Image</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter image url"
//                 value={image}
//                 onChange={(e) => setImage(e.target.value)}
//               ></Form.Control>
//               {/* <Form.File
//                 id="image-file"
//                 label="Choose File"
//                 custom
//                 onChange={uploadFileHandler}
//               ></Form.File> */}
//               <div className="custom-file">
//                 <input
//                   type="file"
//                   name="product_images"
//                   className="custom-file-input"
//                   id="customFile"
//                   onChange={onChange}
//                   multiple
//                 />
//                 <label className="custom-file-label" htmlFor="customFile">
//                   Choose Images
//                 </label>
//               </div>
//               {uploading && <Loader />}
//             </Form.Group>

//             <Form.Group controlId="brand">
//               <Form.Label>Brand</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter brand"
//                 value={brand}
//                 onChange={(e) => setBrand(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="countInStock">
//               <Form.Label>Count In Stock</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Enter countInStock"
//                 value={countInStock}
//                 onChange={(e) => setCountInStock(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="category">
//               <Form.Label>Category</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter category"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Form.Group controlId="description">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></Form.Control>
//             </Form.Group>

//             <Button type="submit" variant="primary">
//               Update
//             </Button>
//           </Form>
//         )}
//       </FormContainer>
//     </>
//   );
// };

// export default ProductEditScreen;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import {
  clearErrors,
  listProductDetails,
  newProduct,
  updateProduct,
} from "../actions/productActions";
import {
  NEW_PRODUCT_RESET,
  PRODUCT_UPDATE_RESET,
  UPDATE_PRODUCT_RESET,
} from "../constants/productConstants";
// import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

const NewProductScreen = ({ history, match }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  //   const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const [oldImages, setOldImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const dispatch = useDispatch();

  const { error, product } = useSelector((state) => state.productDetails);
  const {
    loading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.product);

  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(listProductDetails(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setImages(product.images);
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
      setOldImages(product.images);
    }
    if (isUpdated) {
      dispatch(listProductDetails(productId));
    }
    // if (error) {
    //   // alert.error(error);
    //   dispatch(clearErrors());
    // }

    // if (updateError) {
    //   // alert.error(updateError);
    //   dispatch(clearErrors());
    // }

    if (isUpdated) {
      history.push("/admin/productlist");
      // alert.success('Product updated successfully');
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [
    dispatch,
    isUpdated,
    history,
    userInfo,
    product,
    productId,
    updateError,
    error,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("price", price);
    formData.set("description", description);
    formData.set("category", category);
    formData.set("stock", countInStock);
    formData.set("brand", brand);

    images.forEach((image) => {
      formData.append("images", image);
    });

    dispatch(updateProduct(formData, productId));
  };
  const onChange = (e) => {
    const files = Array.from(e.target.files);

    setImagesPreview([]);
    setImages([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {/* {(loading && !error) && <Loader />}
        {error && <Message variant="danger">{error}</Message>} */}
        {loading ? (
          <Loader />
        ) : updateError ? (
          <Message variant="danger">{updateError}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <div className="form-group">
              <label>Images</label>

              <div className="custom-file">
                <input
                  type="file"
                  name="product_images"
                  className="custom-file-input"
                  id="customFile"
                  onChange={onChange}
                  multiple
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose Images
                </label>
              </div>

              {oldImages &&
                oldImages.map((img) => (
                  <img
                    key={img}
                    src={img.url}
                    alt={img.url}
                    className="mt-3 mr-2"
                    width="55"
                    height="52"
                  />
                ))}

              {imagesPreview.map((img) => (
                <img
                  src={img}
                  key={img}
                  alt="Images Preview"
                  className="mt-3 mr-2"
                  width="55"
                  height="52"
                />
              ))}
            </div>
            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="countInStock">
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default NewProductScreen;
