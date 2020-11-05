import React, { Component } from "react";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { connect } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
import Layout from "../../components/layout";
import Header from '../../components/Header'

// import { useHistory } from "react-router-dom";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDoneButton: false,
      // Set initial files, type 'local' means this is a file
      // that has already been uploaded to the server (see docs)
      files: [
      ],
    };
  }

  handleOnUpdate(name) {
    console.log("FilePond instance has initialised", name, this.state.files);

  }
  componentDidMount() {
    const { token, history } = this.props
    // if(token === '') {
    //   //history.push('/login')
      
    // }
  }

  fileUploadToServer = () => {
    const { files } = this.state;
    const { uploadFile } = this.props
    const data = new FormData()
    data.append( 'action', 'uploadInvoice' )
    data.append( 'filepond', files )
    console.log(files, 'file')
    uploadFile(data)
  }


  onFileUpload = (fileItems) => {
    console.log(fileItems[0].file, 'fileitems')
    this.setState({
      files: fileItems.map((fileItem) => fileItem.file),
    }, () => {this.fileUploadToServer() });
  }
  handleInit() {
    console.log('FilePond instance has been initialised');
    this.setState({
      showDoneButton: true
    })
}

  render() {
    // const history = useHistory();

    const { token, history } = this.props
    const { showDoneButton } = this.state
    console.log(this.pond?.prepareFiles(), this.state.files, 'ref')
    return (
      <Layout>
        <Header />
        <div className="App mt-50">        
          <FilePond
            ref={(ref) => (this.pond = ref)}
            files={this.state.files}
            allowMultiple={true}
            server={`https://spendwin-dev.xyz/api/?token=${token}&action=uploadInvoice`}
            // oninit={() => this.handleInit()}
            onactivatefile={() => console.log('hello')}
            onload={() => this.handleOnUpdate()}
            forceRevert={true}
            onprocessfiles={() => this.handleInit()}
            onupdatefiles={fileItems => {
              // Set currently active file objects to this.state
              this.setState({
                files: fileItems.map(fileItem => fileItem.file)
              });
            }}
            labelIdle='Select Images to Upload Your Invoices - <span class="filepond--label-action">Browse</span>'
          ></FilePond>
          <div className='d-flex justify-content-center'>
            {showDoneButton && 
            <Button
              className="w-50"
              color="voucher-blue"
              onClick={() => history.push('invoics')}
            >
              Done 
            </Button> 
            }
        </div>
        {!this.props.token&&
          <div style={{display:"flex", justifyContent: "center"}}>
            <Button
              style={{backgroundColor: "#000000"}}
              onClick={() => history.push('/login')}
            >
              Login to Upload 
            </Button> 
          </div>
        }
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = ({
  user: { loginData, loginStatus, token },
}) => ({
  loginData,
  loginStatus,
  token
});

const mapDispatchToProps = {
  uploadFile: userAction.uploadFile,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
