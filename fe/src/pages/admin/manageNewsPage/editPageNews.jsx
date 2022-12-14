import React, { Fragment, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import JoditEditor from 'jodit-react';
import { useParams } from "react-router-dom";
import "./style.css";
import HandleModal from "../../../components/admin/handle/modal";
import ButtonReturn from "../../../components/admin/handle/buttonReturn";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const EditPageNews = () => {
    const navigate= useNavigate();
    const defaultInfoNews = {
        'Tieu_De': '',
        'Loai_Tin_Tuc': '',
        'Ma_DM': {
            'id': '',
        },
        'Noi_Dung': ''
    }
    const {idnews} = useParams();
    const editor = useRef(null);
    const [infoNews, setInfoNews] = useState(defaultInfoNews);
    const [selectType, setSelectType] = useState([]);
    const [showModalCancelEditNews, setShowModalCancelEditNews] = useState(false);
    // function
    const handleCloseModalEditNews = () => setShowModalCancelEditNews(false);
    const handleShowModalEditNews = () => setShowModalCancelEditNews(true);
    useEffect(()=>{
        const getSelectType = async() => {
            const response = await axios.get("http://localhost:8000/api/category");
            setSelectType(response.data.data);
        }
        getSelectType();
        const getInfoNews = async() => {
            const response = await axios.get(`http://localhost:8000/api/news/${idnews}`);
            setInfoNews(response.data.data);
        }
        getInfoNews();
    },[idnews])
    //get data
    const handleInputChangeNews = (e) => {
        const {value, name} = e.target;
        setInfoNews({...infoNews,[name]: value, 
                    'Ma_NV': 1,});
    } 

    // CRUD
    const handleEditNews = async(datanews) => {
        datanews = {...datanews, 'Ma_DM': (!(datanews.Ma_DM.Ma_DM)?datanews.Ma_DM:datanews.Ma_DM.Ma_DM)}
        const id = datanews.Ma_TT;
        delete datanews.id;
        delete datanews.created_at;
        delete datanews.updated_at;
        const response = await axios.put(`http://localhost:8000/api/news/${id}`, datanews);
        if(response.data.status === "success"){
            swal({
                title: "S???a th??nh c??ng",
                text: "Nh???n OK ????? x??c nh???n",
                icon: "success",
                button: "OK",
              }).then((value)=> navigate('/admin/news'));
        }
    }
    return(
        <Fragment>
            <ButtonReturn link="/admin/news" />
            <Box className="create-page-news">
                <div className="title-create-page-news">
                    <h3>S???a b??i vi???t c?? m?? {idnews}</h3>
                </div>
                <div className="content-register">
                    <div className="user-details-register">
                        <div className="input-box-register input-create-page-news-title">
                            <span className="details-register">Ti??u ????? b??i vi???t</span>
                            <input type="text" value={infoNews.Tieu_De} placeholder="Nh???p ti??u ?????..." required onChange={handleInputChangeNews} name="Tieu_De"/>
                        </div>
                        <div className="input-box-register">
                            <span className="details-register">Lo???i</span>
                            <select className="form-select" value={infoNews.Loai_Tin_Tuc} aria-label="Default select example" onChange={handleInputChangeNews} name="Loai_Tin_Tuc">
                                <option value="Khuy???n M??i">Khuy???n M??i</option>
                                <option value="Tin T???c S???n ph???m">Tin T???c S???n ph???m</option>
                            </select>
                        </div>
                        <div className="input-box-register">
                            <span className="details-register">Danh m???c</span>
                            <select className="form-select" value={infoNews.Ma_DM.id} aria-label="Default select example" onChange={handleInputChangeNews} name="Ma_DM">
                                {
                                    selectType.map((option, index)=> (
                                        <option value={option.id} key={index}>{option.Ten_DM}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="input-box-register input-create-page-news-description">
                            <span className="details-register">N???i dung</span>
                            <JoditEditor
                                ref={editor}
                                tabIndex={1}
                                value={infoNews.Noi_Dung}
                                onChange={newContent => {setInfoNews({...infoNews, 'Noi_Dung': newContent})}}
                            />
                        </div>
                        <div className="btn-cofirm-create-news">
                            <button className="btn-create" onClick={()=>handleEditNews(infoNews)}>X??c nh???n s???a</button>
                            <button className="btn-cancel" onClick={handleShowModalEditNews}>H???y</button>
                        </div>
                    </div>
                </div>
            </Box>
            <HandleModal 
                show={showModalCancelEditNews} 
                handleClose={handleCloseModalEditNews} 
                content="X??c nh???n h???y s???a b??i vi???t"
                link="/admin/news"
                title="H???y s???a"
            />
        </Fragment>
    )
}

export default EditPageNews;