import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";
import HandleModal from "../../../components/admin/handle/modal";
import { useNavigate } from "react-router-dom";
import ButtonReturn from "../../../components/admin/handle/buttonReturn";
import axios from "axios";
import swal from 'sweetalert';
import "./style.css";

const EditBookPage = () => {
    const navigate= useNavigate();
    const defaultInfo = {
        'id': '' ,
        'Danh_Muc': {
            'id': ''
        },
        'Don_Gia':'',
        'Giam_Gia':'',
        'Hinh_Anh':'',
        'Mo_Ta':'',
        'NXB': '',
        'So_Luong':'',
        'Tac_Gia':'',
        'Ten_SP':'',
        'Tinh_Trang':''
    }
    const {idbook} = useParams();
    const [selectModalAddBook, setSelectModalAddBook] = useState([]);
    const [infoBook, setInfoBook] = useState(defaultInfo);
    const [imageBook, setImageBook] = useState("");
    const [showModalCancelEditBook, setShowModalCancelEditBook] = useState(false);
    const [imageUpload, setImageUpload] = useState("");
    //function
    const handleCloseModalEditBook = () => setShowModalCancelEditBook(false);
    const handleShowModalEditBook = () => setShowModalCancelEditBook(true);
    // axios
    useEffect(()=>{
        const getSelectModalAddBook = async() => {
            const response = await axios.get("http://localhost:8000/api/category");
            setSelectModalAddBook(response.data.data);
        }
        getSelectModalAddBook();
        const getInfoBook = async() => {
            const response = await axios.get(`http://localhost:8000/api/product/${idbook}`);
            setInfoBook(response.data.data);
        }
        getInfoBook();
    },[idbook]);
    // function
    const handleInputChangeBook = e => {
        const {name, value} = e.target;
        setInfoBook({...infoBook, [name]: value});
        
    }
    const handleUploadImageBook = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setImageBook(reader.result);
               // console.log(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
        setInfoBook({...infoBook, 'Hinh_Anh': e.target.files[0].name })
        setImageUpload(e.target.files[0]);
    }
    // CRUD
    const axiosEditBook = async(databook) => {
        databook = {...databook, 'Danh_Muc': (!(databook.Danh_Muc.Ma_DM)?databook.Danh_Muc:databook.Danh_Muc.Ma_DM),'Don_Gia': databook.Don_Gia.replace('.','')};
        const id = databook.Ma_SP;
        delete databook.id;
        delete databook.created_at;
        delete databook.updated_at;
        const response = await axios.put(`http://localhost:8000/api/product/${id}`, databook);
        if(response.data.status === "success"){
            swal({
                title: "S???a th??nh c??ng",
                text: "Nh???n OK ????? x??c nh???n",
                icon: "success",
                button: "OK",
              }).then((value)=> navigate('/admin/books'));
        }
    }
    const handleEditBook = (databook) => {
        const data = new FormData();
        data.append("file",imageUpload);
        data.append("upload_preset","imagesbookstore");
        fetch("https://api.cloudinary.com/v1_1/dgkrtexdv/image/upload",{
            method: "post",
            body: data,
        })
        .then((res)=>res.json())
        .then((data)=>{
             databook.Hinh_Anh = data.secure_url;
             axiosEditBook(databook);
          
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <Fragment>
            <ButtonReturn link="/admin/books" />
            <Box className="create-page-news">
                <div className="title-create-page-news">
                    <h3>Th??ng tin s??ch c?? m?? l?? {idbook}</h3>
                </div>
                <div className="content-add">
                    <div className="info-add">
                        <div className="input-box-info">
                            <span className="details-info">T??n SP</span>
                            <input type="text" placeholder="Nh???p t??n s???n ph???m..." value={infoBook.Ten_SP} required onChange={handleInputChangeBook} name="Ten_SP"/>
                        </div>
                        <div className="input-box-info">
                            <span className="details-info">NXB</span>
                            <input type="text" placeholder="Nh???p nh?? xu???t b???n..." value={infoBook.NXB} required onChange={handleInputChangeBook} name="NXB"/>
                        </div>
                        <div className="input-box-info">
                            <span className="details-info">T??c gi???</span>
                            <input type="text" placeholder="Nh???p t??n t??c gi???..." value={infoBook.Tac_Gia} required onChange={handleInputChangeBook} name="Tac_Gia"/>
                        </div>
                        <div className="input-box-info">
                            <span className="details-info">????n gi??</span>
                            <input type="text" placeholder="Nh???p ????n gi??..." required value={infoBook.Don_Gia} onChange={handleInputChangeBook} name="Don_Gia"/>
                        </div>
                        <div className="input-box-info">
                            <span className="details-info">S??? l?????ng</span>
                            <input type="text" value={infoBook.So_Luong} required disabled/>
                        </div>
                        <div className="input-box-info">
                            <span className="details-info">Danh m???c</span>
                            <select className="form-select" value={infoBook.Danh_Muc.Ma_DM} onChange={handleInputChangeBook} name="Danh_Muc" >
                                {
                                    selectModalAddBook.map((option,index)=>(
                                        <option value={option.Ma_DM} key={index}>{option.Ten_DM}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="input-box-info area-description">
                            <span className="details-info">M?? t???</span>
                            <textarea rows="5" className="input-area" value={infoBook.Mo_Ta} required onChange={handleInputChangeBook} name="Mo_Ta"></textarea>
                        </div>
                        <div className="input-box-info image-product">
                            <span className="details-info">H??nh ???nh</span>
                            <div className="upload-image">
                                <button type="button" className="btn-warning">
                                    <FontAwesomeIcon icon={faUpload} />
                                    Ch???n ???nh
                                    <input type="file" onChange={handleUploadImageBook}/>
                                </button>
                            </div>
                            <div className="image-upload">
                                <img src={imageBook} alt=""/>
                            </div>
                        </div>
                        <div className="btn-cofirm-create-news">
                            <button className="btn-create" onClick={()=>handleEditBook(infoBook)}>X??c nh???n s???a</button>
                            <button className="btn-cancel" onClick={handleShowModalEditBook}>H???y</button>
                        </div>
                    </div>
                </div>
            </Box>
            <HandleModal 
                show={showModalCancelEditBook} 
                handleClose={handleCloseModalEditBook} 
                content="X??c nh???n h???y s???a s??ch"
                link="/admin/books"
                title="H???y s???a"
            />
        </Fragment>
    )
}

export default EditBookPage;