import React from 'react'
import photo1 from './assets/img/products/lamp1-trans.png'
import photo2 from './assets/img/products/lamp2-trans.png'

const ProductImage = (props) => {
  let file
  let fileId
  let placeholder = [photo1, photo2][Math.floor(0.5 + Math.random())]

  var isThereAMainImage = (product) => {
    //fileId = props.product.relationships.main_image.data.id;
    file = props.product.url
    console.log(file)
    // file = props.products.included.main_images.find(function(el) {
    //   return fileId === el.id;
    // });

    return (
      (
        <img
          alt={props.product.name + '-' + props.product.description}
          src={placeholder}
          style={{ background: props.background }}
        />
      ) || <img alt="placeholder" src={placeholder} />
    )
  }

  var isThereAFile = (product) => {
    try {
      fileId = props.product.relationships.files.data[0].id
      file = props.products.included.files.find(function(el) {
        return fileId === el.id
      })
      return (
        <img
          alt={props.product.name + ', ' + props.product.description}
          src={file.link.href}
          style={{ background: props.background }}
        />
      )
    } catch (e) {
      return <img alt="placeholder" src={placeholder} />
    }
  }

  try {
    return isThereAMainImage(props.product)
  } catch (e) {
    return isThereAFile(props.product)
  }
}

export default ProductImage
