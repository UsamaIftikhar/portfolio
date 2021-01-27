import React, { Component } from 'react';
import axios from 'axios';
//import './App.css';

import {Link} from 'react-router-dom'
  
class App extends Component {

  state = {
    title: '',
    email: '',
    description: '',
    image: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    form_data.append('title', this.state.title);
    form_data.append('email', this.state.email);
    form_data.append('description', this.state.description);
    //let url = 'http://localhost:8000/api/post/';
    let url = 'http://localhost:8000/single';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      }
    })
        .then(res => {
          console.log(res.data["message"]);
            if(res.data["message"]==="success")
            {
              console.log("Images showed");
              
              <Link to="/portfolio.js " ></Link>
              //window.location.href = 'portfolio.js';
              // const navigation=this.props.navigation;
              // navigation('portfolio.js');
              //window.location = 'http://localhost:3001/portfolio.js';
            }
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="text" placeholder='Email' id='email' value={this.state.email} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="text" placeholder='Description' id='description' value={this.state.description} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;


// import './App.css';
// import { useState } from 'react';
// import ImageUploader from 'react-images-upload';
// import Axios from 'axios';
// const UploadComponent = props => (
//   <form>
//       <label>
//           File Upload URL:
//           <input id="urlInput" type="text" onChange={props.onUrlChange} value={props.url}></input>
//       </label>
//       <ImageUploader
//           key="image-uploader"
//           withIcon={true}
//           singleImage={true}
//           withPreview={true}
//           label="Maximum size file: 5MB"
//           buttonText="Choose an image"
//           onChange={props.onImage}
//           imgExtension={['.jpg', '.png', '.jpeg']}
//           maxFileSize={5242880}
//       ></ImageUploader>
//   </form>
// );

// // const UploadComponent=props => {
// //   <form>
// //     <label>
// //       File Upload URL:
// //       <input id='urlInput' type='text' onChange={props.onUrlChange} value={props.url}></input>
// //     </label>
// //     <ImageUploder
// //       key='image-uploader'
// //       withIcon={true}
// //       SingleImage={true}
// //       withPreview={true}
// //       label="Maximum size file: 5MB"
// //       buttonText='Choose an Image'
// //       onChange={props.onImage}
// //       imageExtension={['.jpg','.png','jpeg']}
// //       maxFileSize={5242880}></ImageUploder>
// //   </form>
// // }

// const App = () => {

//   const [progress,setProgress] = useState ('getUplaod')
//   const [url, setImageURL] = useState (undefined)
//   const [errorMessage, setErrorMessage]= useState('')
//   const onUrlChange = e => {
//     setImageURL(e.target.value);
//   };
//   const onImage=async(failedImages, successImages) => {
//     // if (!url)
//     // {
//     //   console.log('missing Url')
//     //   setErrorMessage('missing a url to upload')
//     //   setProgress('uploadError');
//     //   return
//     // }
//     setProgress('uploading');
  
//       try {
//         console.log('successImages',successImages);
//         const parts = successImages[0].split(':')
//         const mine= parts[0].split(':')[1];
//         const name= parts[1].split('=')[1];
//         const data=parts[2];
//         console.log(parts);
//         // const res=await Axios.post(url, {mine, name, image:data});
//         // console.log(res);
//         // setImageURL(res.data.imageURL)
//         setProgress('uploaded')
//       }
    
//       catch (error){
//         console.log('error in upload',error);
//         setErrorMessage(error.message);
//         setProgress('uploadError')

//       }
//   }
//   const content = () =>
//   {
//     switch(progress){
//       case 'getUplaod':
//         return <UploadComponent onUrlChange={onUrlChange} onImage={onImage} url={url}/>
//       case 'uploading':
//         return <h2>Uploading...</h2>
//       case 'uploaded':
//         return <img scr={url} alt='uploaded' />
//       case 'uploadError':
//         return (
//           <>
//           <div>Error Message={errorMessage}</div>
//           <UploadComponent onUrlChange={onUrlChange} onImage={onImage} url={url}/>
//           </>
//         )
//     }
//   }

//   return (
//     <div className="App">
//       <h1>Image Upload </h1>
//       {content()}
//     </div>
//   )
// }


// export default App